import { createContext, useContext, useState, useEffect } from "react";
import { useAxios } from "../../utils";
import { useAuth } from "../auth-context/auth-context";
import { useToast } from "../toast-context/toast-context";

const AddressContext = createContext();

const useAddress = () => useContext(AddressContext);

function AddressProvider({ children }) {
  const [address, setAddress] = useState([]);
  const [processingAddress, setProcessingAddress] = useState(null);
  const { user, token } = useAuth();
  const { response, operation } = useAxios();
  const { sendToast } = useToast();

  useEffect(() => {
    if (user) {
      setAddress(user.address);
    } else {
      setAddress([]);
    }
  }, [user]);

  useEffect(() => {
    if (response && response.address) {
      if (response.address.length > address.length) {
        sendToast("Address added to your address book");
      } else if (response.address.length === address.length) {
        sendToast("Address updated to your address book");
      } else {
        sendToast("Address removed from your address book", true);
      }
      setAddress(response.address);
      setProcessingAddress(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [response]);

  const updateOrSaveAddress = (id, newlyCreatedAddress) => {
    const method = id ? "put" : "post";
    setProcessingAddress(true);
    operation({
      method: method,
      url: "/api/user/address",
      headers: { authorization: token },
      data: { address: newlyCreatedAddress },
    });
  };

  const deleteAddress = async (id) => {
    const url = `/api/user/address/${id}`;
    operation({
      method: "delete",
      url: url,
      headers: { authorization: token },
    });
  };

  return (
    <AddressContext.Provider
      value={{ address, processingAddress, updateOrSaveAddress, deleteAddress }}
    >
      {children}
    </AddressContext.Provider>
  );
}

export { AddressProvider, useAddress };
