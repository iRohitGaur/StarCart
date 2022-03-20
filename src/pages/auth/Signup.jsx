import React from "react";
import { useState } from "react";
import { MdiAccountCheckOutline } from "../../assets/Icons";
import { Input } from "../../components";

function Signup({ moveUp, setMoveUp }) {
  const [signupData, setSignupData] = useState({
    name: "",
    email: "",
    password: "",
  });
  return (
    <div
      className={`stc_signup signup_wrapper flex_column ${
        moveUp ? "move_up" : ""
      }`}
    >
      <div className="box_title">Signup</div>

      <div className="ep_wrapper flex_column">
        <Input
          required={true}
          label="name"
          status=""
          type="text"
          value={signupData.name}
          onChange={(e) =>
            setSignupData((d) => ({ ...d, name: e.target.value }))
          }
        />
        <Input
          required={true}
          label="email"
          status=""
          type="email"
          value={signupData.email}
          onChange={(e) =>
            setSignupData((d) => ({ ...d, email: e.target.value }))
          }
        />
        <Input
          required={true}
          label="password"
          status=""
          type="password"
          value={signupData.password}
          onChange={(e) =>
            setSignupData((d) => ({ ...d, password: e.target.value }))
          }
        />
      </div>

      <div className="ep_check_wrapper flex_column">
        <div className="flex_row flex_gap1">
          <input type="checkbox" value="" />
          <span className="login_checkbox_text">
            I accept all
            <button className="btn_txt">Terms & Conditions</button>
          </span>
        </div>
      </div>

      <button className="sui_btn ep_mt2">Signup</button>

      <div className="ep_cna ep_mt2 h5">
        <span
          className="btn_txt flex_row flex_align_center flex_gap1"
          onClick={() => setMoveUp(false)}
        >
          <MdiAccountCheckOutline />
          Already have an Account
        </span>
      </div>
    </div>
  );
}

export default Signup;
