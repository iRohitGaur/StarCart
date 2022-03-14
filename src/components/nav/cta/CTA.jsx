import React from "react";
import { useState } from "react";
import { Fa6SolidBars } from "../../../assets/Icons";
import CartButton from "./CartButton";
import DarkModeButton from "./DarkModeButton";
import FavoriteButton from "./FavoriteButton";
import LoginButton from "./LoginButton";

function CTA() {
  const [dropdown, setDropdown] = useState(false);
  return (
    <div className="sui_cta_wrapper flex_row">
      <button
        className="btn_icon_fa fa-bars"
        onClick={() => setDropdown((d) => !d)}
      >
        <Fa6SolidBars />
      </button>
      <div
        className={`sui_cta collapsed_cta flex_row ${
          dropdown ? "" : "hide_cta"
        }`}
      >
        <DarkModeButton />
        <FavoriteButton count={0} />
        <CartButton count={0} />
        <LoginButton />
      </div>
    </div>
  );
}

export default CTA;
