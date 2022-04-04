import React from "react";
import { IcOutlineModeEdit, MdiTrashCanOutline } from "../../assets/Icons";
import { useAddress } from "../../context";
import "./address-management.css";

export default function AddressList({
  id,
  address,
  setNewAddress,
  setIsAddNewAddress,
}) {
  const { deleteAddress } = useAddress();

  const handleDeleteAddress = () => {
    deleteAddress(id);
  };

  const handleEditAddress = () => {
    setIsAddNewAddress(true);
    setNewAddress(address);
  };

  return (
    <li className="address_list_wrapper" key={id}>
      <div className="btn_wrapper flex_row">
        <button
          className="address_edit_btn sui_btn_float float_top_right"
          onClick={handleEditAddress}
        >
          <IcOutlineModeEdit />
        </button>
        <button
          className="address_trash_btn sui_btn_float float_top_right"
          onClick={handleDeleteAddress}
        >
          <MdiTrashCanOutline />
        </button>
      </div>
      <table className="address_table">
        <tbody>
          <tr>
            <td className="address_title">Full Name:</td>
            <td>{address.fullname}</td>
          </tr>
          <tr>
            <td className="address_title">Mobile:</td>
            <td>{address.mobile}</td>
          </tr>
          <tr>
            <td className="address_title">Pincode:</td>
            <td>{address.pincode}</td>
          </tr>
          <tr>
            <td className="address_title">Address:</td>
            <td>{address.address}</td>
          </tr>
          <tr>
            <td className="address_title">City:</td>
            <td>{address.city}</td>
          </tr>
          <tr>
            <td className="address_title">State:</td>
            <td>{address.state}</td>
          </tr>
        </tbody>
      </table>
    </li>
  );
}
