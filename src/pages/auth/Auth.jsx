import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { FaSolidTshirt } from "../../assets/Icons";
import { useDocumentTitle } from "../../utils";
import "./auth.css";
import Login from "./Login";
import Signup from "./Signup";

function Auth() {
  useDocumentTitle("StarCart - Authentication - Rohit Gaur");
  const [moveUp, setMoveUp] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <main className="authpage">
      <div className="login_tee_wrapper">
        <FaSolidTshirt className={moveUp ? "rotate_tee" : ""} />
        <div className="login_signup_wrapper flex_column">
          <Login moveUp={moveUp} setMoveUp={setMoveUp} />
          <Signup moveUp={moveUp} setMoveUp={setMoveUp} />
        </div>
      </div>
    </main>
  );
}

export default Auth;
