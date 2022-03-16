import React from "react";
import { IcOutlineShoppingCart } from "../../../assets/Icons";
import { useCart } from "../../../context";

function CartButton() {
  const { cartProducts } = useCart();

  return (
    <button className="btn_icon_fa">
      <div className="sui_avatar">
        <IcOutlineShoppingCart />
        {cartProducts.length !== 0 && (
          <div className="bd_num bd_red">{cartProducts.length}</div>
        )}
      </div>
    </button>
  );
}

export default CartButton;
