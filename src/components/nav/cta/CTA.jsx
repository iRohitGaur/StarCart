import React from "react";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Fa6SolidBars } from "../../../assets/Icons";
import { useAuth } from "../../../context";
import CartButton from "./CartButton";
import DarkModeButton from "./DarkModeButton";
import FavoriteButton from "./FavoriteButton";
import FilterButton from "./FilterButton";
import LoginButton from "./LoginButton";
import User from "./User";

function CTA() {
  const [dropdown, setDropdown] = useState(false);
  const currentPath = useLocation();
  const { user } = useAuth();

  return (
    <div className="sui_cta_wrapper flex_row">
      <div className="flex_row flex_align_center">
        {currentPath.pathname === "/products" && <FilterButton />}
        <button
          className="btn_icon_fa fa-bars"
          onClick={() => setDropdown((d) => !d)}
        >
          <Fa6SolidBars />
        </button>
      </div>
      <div
        className={`sui_cta collapsed_cta flex_row ${
          dropdown ? "" : "hide_cta"
        }`}
      >
        <DarkModeButton />
        {user ? (
          <>
            <Link to="/wishlist">
              <FavoriteButton />
            </Link>
            <Link to="/cart">
              <CartButton />
            </Link>
            <User />
          </>
        ) : (
          <Link to="/auth">
            <LoginButton />
          </Link>
        )}
      </div>
    </div>
  );
}

export default CTA;
