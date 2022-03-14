import React from "react";
import { IcOutlineFavoriteBorder } from "../../../assets/Icons";

function FavoriteButton({ count }) {
  return (
    <button className="btn_icon_fa">
      <div className="sui_avatar">
        <IcOutlineFavoriteBorder />
        {count !== 0 && <div className="bd_num bd_red">{count}</div>}
      </div>
    </button>
  );
}

export default FavoriteButton;
