import React from "react";
import "./nav.css";
import { Logo, Search, CTA } from "./index";

function Nav() {
  return (
    <header className="sui_nav_mobile">
      <Logo />
      <Search mobile={false} />
      <CTA />
      <Search mobile={true} />
    </header>
  );
}

export default Nav;
