import React from "react";
import { useState } from "react";
import { FaSolidTshirt } from "../../assets/Icons";
import "./auth.css";
import Login from "./Login";
import Signup from "./Signup";

function Auth() {
  const [moveUp, setMoveUp] = useState(false);
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
