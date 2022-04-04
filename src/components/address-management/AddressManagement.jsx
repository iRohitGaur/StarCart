import React, { useState } from "react";
import Address from "./Address";
import AddressList from "./AddressList";
import "./address-management.css";
import { useAddress } from "../../context";
import { useDocumentTitle } from "../../utils";

function AddressManagement() {
  const [isAddNewAddress, setIsAddNewAddress] = useState(false);
  useDocumentTitle("StarCart - Address Management - Rohit Gaur");

  const [newAddress, setNewAddress] = useState({
    fullname: "",
    mobile: "",
    pincode: "",
    address: "",
    city: "",
    state: "",
  });

  const { address } = useAddress();

  const handleAddNewAddress = () => {
    setIsAddNewAddress((a) => !a);
  };

  return (
    <div className={`add_mgmt_wrapper `}>
      <button
        className="sui_btn add_new_address_btn"
        onClick={handleAddNewAddress}
      >
        Add New Address
      </button>
      <div
        className={`new_address_wrapper ${
          !isAddNewAddress && "new_address_hidden"
        }`}
      >
        <h2>add new address</h2>
        <Address
          newAddress={newAddress}
          setNewAddress={setNewAddress}
          setIsAddNewAddress={setIsAddNewAddress}
        />
      </div>
      <ul className="address_ul_wrapper flex_row flex_wrap flex_gap2">
        {address.map((add) => (
          <AddressList
            key={add._id}
            id={add._id}
            address={add}
            setNewAddress={setNewAddress}
            setIsAddNewAddress={setIsAddNewAddress}
          />
        ))}
      </ul>
    </div>
  );
}

export default AddressManagement;
