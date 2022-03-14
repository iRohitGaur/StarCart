import React from "react";
import starling from "../../../assets/starling.svg";

function Logo() {
  return (
    <div id="stc-logo" className="sui_logo_wrapper flex_row">
      <img className="sui_logo" src={starling} alt="logo" />
      <div className="flex_column">
        <span className="sui_logo_text">StarCart</span>
        <span className="sui_logo_caption">little bird-tee store</span>
      </div>
    </div>
  );
}

export default Logo;
