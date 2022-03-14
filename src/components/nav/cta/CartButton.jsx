import React from "react";
import { IcOutlineShoppingCart } from "../../../assets/Icons";

function CartButton({ count }) {
  return (
    <button className="btn_icon_fa">
      <div className="sui_avatar">
        <IcOutlineShoppingCart />
        {count !== 0 && <div className="bd_num bd_red">{count}</div>}
      </div>
    </button>
  );
}

export default CartButton;
