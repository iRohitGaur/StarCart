import React, { useState, useEffect } from "react";
import { v4 as uuid } from "uuid";
import "./address-management.css";
import Input from "../input/Input";
import { useAddress } from "../../context";

export default function Address({
  newAddress,
  setNewAddress,
  setIsAddNewAddress,
}) {
  const emptyAddress = {
    fullname: "",
    mobile: "",
    pincode: "",
    address: "",
    city: "",
    state: "",
  };

  const dummyAddress = {
    fullname: "Navami Chacko",
    mobile: "9999999999",
    pincode: "386031",
    address: "79, Mini Heights, Malad",
    city: "Vishakhapattanam",
    state: "Andhra Pradesh",
  };

  const [valid, setValid] = useState(false);

  useEffect(() => {
    if (
      newAddress.fullname.length > 1 &&
      newAddress.mobile.length > 1 &&
      newAddress.pincode.length > 1 &&
      newAddress.address.length > 1 &&
      newAddress.address.length > 1 &&
      newAddress.city.length > 1 &&
      newAddress.state.length > 1
    ) {
      setValid(true);
    } else {
      setValid(false);
    }
  }, [newAddress]);

  const { processingAddress, updateOrSaveAddress } = useAddress();

  const handleAddress = () => {
    const newlyCreatedAddress = {
      _id: newAddress._id ?? uuid(),
      fullname: newAddress.fullname,
      mobile: newAddress.mobile,
      pincode: newAddress.pincode,
      address: newAddress.address,
      city: newAddress.city,
      state: newAddress.state,
    };
    updateOrSaveAddress(newAddress._id, newlyCreatedAddress);
  };

  const handleDummyAddress = () => {
    setNewAddress(dummyAddress);
  };

  useEffect(() => {
    if (processingAddress === false) {
      setNewAddress(emptyAddress);
      setIsAddNewAddress(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [processingAddress]);

  const handleCancelAddress = () => {
    setIsAddNewAddress(false);
    setNewAddress(emptyAddress);
  };

  return (
    <div className="address_wrapper flex_column flex_gap2">
      <Input
        label="Full name"
        status=""
        validation={newAddress.fullname.length > 1}
        type="text"
        value={newAddress.fullname}
        onChange={(e) =>
          setNewAddress((add) => ({ ...add, fullname: e.target.value }))
        }
      />
      <Input
        label="Mobile number"
        status=""
        validation={newAddress.mobile.length > 1}
        type="text"
        value={newAddress.mobile}
        onChange={(e) =>
          setNewAddress((add) => ({ ...add, mobile: e.target.value }))
        }
      />
      <Input
        label="Pincode"
        status=""
        validation={newAddress.pincode.length > 1}
        type="text"
        value={newAddress.pincode}
        onChange={(e) =>
          setNewAddress((add) => ({ ...add, pincode: e.target.value }))
        }
      />
      <Input
        label="Address"
        status=""
        validation={newAddress.address.length > 1}
        type="text"
        value={newAddress.address}
        onChange={(e) =>
          setNewAddress((add) => ({ ...add, address: e.target.value }))
        }
      />
      <Input
        label="Town/City"
        status=""
        validation={newAddress.city.length > 1}
        type="text"
        value={newAddress.city}
        onChange={(e) =>
          setNewAddress((add) => ({ ...add, city: e.target.value }))
        }
      />
      <Input
        label="State"
        status=""
        validation={newAddress.state.length > 1}
        type="text"
        value={newAddress.state}
        onChange={(e) =>
          setNewAddress((add) => ({ ...add, state: e.target.value }))
        }
      />
      <div className="flex_row flex_gap1">
        <button
          className={`sui_btn ${valid ? "" : "disabled"}`}
          onClick={handleAddress}
        >
          {newAddress._id ? "Update Address" : "Save Address"}
        </button>
        {newAddress._id && (
          <button className="sui_btn btn_v1" onClick={handleCancelAddress}>
            Cancel
          </button>
        )}
      </div>
      {!valid && (
        <button className="sui_btn" onClick={handleDummyAddress}>
          Add Dummy Address
        </button>
      )}
    </div>
  );
}
