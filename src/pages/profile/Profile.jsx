import React, { useState } from "react";
import { AddressManagement, Orders, UserDetail } from "../../components";
import "./profile.css";

function Profile() {
  const [currentSelection, setCurrentSelection] = useState(0);

  return (
    <div className="profile_page">
      <div className="profile_page_sidebar_wrapper">
        <button
          className={`sui_btn profile_page_btn ${
            currentSelection === 0 && "profile_page_btn_selected"
          }`}
          onClick={() => setCurrentSelection(0)}
        >
          Profile Information
        </button>
        <button
          className={`sui_btn profile_page_btn ${
            currentSelection === 1 && "profile_page_btn_selected"
          }`}
          onClick={() => setCurrentSelection(1)}
        >
          Manage Addresses
        </button>
        <button
          className={`sui_btn profile_page_btn ${
            currentSelection === 2 && "profile_page_btn_selected"
          }`}
          onClick={() => setCurrentSelection(2)}
        >
          My Orders
        </button>
      </div>
      <div className="profile_page_content_wrapper">
        {currentSelection === 0 && <UserDetail />}
        {currentSelection === 1 && <AddressManagement />}
        {currentSelection === 2 && <Orders />}
      </div>
    </div>
  );
}

export default Profile;
