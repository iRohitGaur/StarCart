import React from "react";
import starling from "../../../assets/starling.svg";
import { Link } from "react-router-dom";

function Logo() {
  return (
    <Link className="sui_logo_wrapper flex_row" to="/">
      <img className="sui_logo" src={starling} alt="logo" />
      <div className="flex_column">
        <span className="sui_logo_text">StarCart</span>
        <span className="sui_logo_caption">little bird-tee store</span>
      </div>
    </Link>
  );
}

export default Logo;
