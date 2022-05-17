import React from "react";
import { IcRoundCheck } from "../../assets/Icons";
import "./address-management.css";

export default function AddressListOrderSummary({
  id,
  address,
  selected = false,
  setSelectedAddress,
}) {
  return (
    <li
      className="address_list_wrapper"
      key={id}
      onClick={() => setSelectedAddress(address)}
    >
      <div
        className={`flex_row order_summary_selected_address ${
          !selected && "order_summary_selected_address_hide"
        }`}
      >
        <IcRoundCheck />
      </div>
      <div className="address_table">
        <p>{address.mobile}</p>
        <p>{address.fullname}</p>
        <p>{address.address}</p>
        <p>
          {address.city}, {address.state} - {address.pincode}
        </p>
      </div>
    </li>
  );
}
