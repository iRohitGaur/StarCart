import React from "react";
import {
  IconoirPasswordError,
  IconoirPasswordPass,
  IconParkOutlineEmailFail,
  IconParkOutlineEmailSuccessfully,
  LucideUserCheck,
  LucideUserX,
} from "../../assets/Icons";

function Input({ required, label, status, type, value = "", onChange }) {
  const isInputRequired = required ? "input_req" : "";

  const isValidEmail =
    type === "email" &&
    value.match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
  const emailSucessFailure =
    type === "email" && value !== ""
      ? isValidEmail
        ? "input_ss"
        : "input_er"
      : "";

  const isValidPassword = type === "password" && value.length > 5;
  const passwordSuccessFailure =
    type === "password" && value !== ""
      ? isValidPassword
        ? "input_ss"
        : "input_er"
      : "";

  const isValidName = type === "text" && label === "name" && value.length > 1;
  const nameSuccessFailure =
    type === "text" && label === "name" && value !== ""
      ? isValidName
        ? "input_ss"
        : "input_er"
      : "";

  return (
    <div
      className={`sui_input ${
        emailSucessFailure || passwordSuccessFailure || nameSuccessFailure
      } ${isInputRequired}`}
    >
      <div className="input_desc">
        <span className="input_lbl">{label}</span>
        <span className="input_info">
          {type === "email" ? (
            isValidEmail ? (
              <IconParkOutlineEmailSuccessfully />
            ) : (
              <IconParkOutlineEmailFail />
            )
          ) : type === "password" ? (
            isValidPassword ? (
              <IconoirPasswordPass />
            ) : (
              <IconoirPasswordError />
            )
          ) : type === "text" ? (
            isValidName ? (
              <LucideUserCheck />
            ) : (
              <LucideUserX />
            )
          ) : (
            status
          )}
        </span>
      </div>
      <input value={value} type={type} onChange={onChange} />
    </div>
  );
}

export default Input;
