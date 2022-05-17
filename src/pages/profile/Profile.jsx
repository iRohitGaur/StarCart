import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { AddressManagement, Orders, UserDetail } from "../../components";
import { useDocumentTitle } from "../../utils";
import "./profile.css";

function Profile() {
  const [currentSelection, setCurrentSelection] = useState(0);
  useDocumentTitle("StarCart - Profile - Rohit Gaur");
  const [searchParams] = useSearchParams();

  useEffect(() => {
    const section = searchParams.get("section");
    if (section === "profile") {
      setCurrentSelection(0);
    } else if (section === "address") {
      setCurrentSelection(1);
    } else if (section === "orders") {
      setCurrentSelection(2);
    }
  }, [searchParams]);

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
