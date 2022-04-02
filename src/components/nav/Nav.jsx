import "./nav.css";
import { Logo, Search, CTA } from "./index";
import { useLocation } from "react-router-dom";

function Nav() {
  const currentPath = useLocation();

  return (
    <header
      className={`sui_nav_mobile ${
        currentPath.pathname === "/auth" ? "without_searchbar" : ""
      }`}
    >
      <Logo />
      {currentPath.pathname !== "/auth" && <Search mobile={false} />}
      <CTA />
      {currentPath.pathname !== "/auth" && <Search mobile={true} />}
    </header>
  );
}

export default Nav;
