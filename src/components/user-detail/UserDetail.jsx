import React, { useState, useEffect } from "react";
import { IcOutlineModeEdit } from "../../assets/Icons";
import { useAuth } from "../../context";
import { useDocumentTitle } from "../../utils";
import Input from "../input/Input";
import "./user-detail.css";

function UserDetail() {
  useDocumentTitle("StarCart - Profile Information - Rohit Gaur");
  const [isEditing, setIsEditing] = useState(false);
  const { user, setUser } = useAuth();
  const { firstName, email } = user ?? { firstName: "", email: "" };
  const [fName, setFname] = useState("");

  useEffect(() => {
    setFname(firstName);
  }, [firstName]);

  const handleToggleEditing = () => {
    setIsEditing((editing) => !editing);
  };

  const isValidName = fName.length > 1;

  const handleFnameChange = (e) => {
    setFname(e.target.value);
  };

  const handleSaveName = () => {
    setUser((u) => ({ ...u, firstName: fName }));
    handleToggleEditing();
  };

  return (
    <div className="stf_user_details_wrapper">
      <button
        className="sui_btn_float float_top_right"
        onClick={handleToggleEditing}
      >
        <IcOutlineModeEdit />
      </button>
      <div className="sui_avatar av_md av_txt sui_v1">
        <h2>{firstName[0]}</h2>
      </div>
      <div
        className={`stf_user_name_email_wrapper ${
          isEditing && "flex_align_center"
        }`}
      >
        <span className="stf_user_detail">
          <p>Email:</p>
          <p>{email}</p>
        </span>
        {isEditing ? (
          <>
            <Input
              required={true}
              label="name"
              status=""
              type="text"
              validation={isValidName}
              value={fName}
              onChange={handleFnameChange}
            />
            <button
              className={`sui_btn ${isValidName ? "" : "sui_btn_disabled"}`}
              onClick={handleSaveName}
            >
              Save
            </button>
          </>
        ) : (
          <span className="stf_user_detail">
            <p>Name:</p>
            <p>{firstName}</p>
          </span>
        )}
      </div>
    </div>
  );
}

export default UserDetail;
