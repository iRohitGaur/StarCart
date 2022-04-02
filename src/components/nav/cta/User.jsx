import React from "react";
import { IcOutlineLogout, RiUser3Line } from "../../../assets/Icons";
import { useAuth } from "../../../context";

function User() {
  const { user, setUserAndToken } = useAuth();

  return (
    <div className="stc_user_area flex_column flex_align_end">
      <div className="stc_user_btn sui_avatar av_sm av_txt sui_v1">
        {user.firstName[0].toUpperCase()}
      </div>
      <div className="stc_user_hover_area">
        <button className="sui_btn btn_txt stc_user_profile">
          <RiUser3Line />
          Profile
        </button>
        <button
          className="sui_btn btn_txt stc_logout_btn"
          onClick={() => setUserAndToken(null, null)}
        >
          <IcOutlineLogout />
          Logout
        </button>
      </div>
    </div>
  );
}

export default User;
