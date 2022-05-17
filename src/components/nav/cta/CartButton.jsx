import React from "react";
import { IcOutlineShoppingCart } from "../../../assets/Icons";
import { useCart } from "../../../context";

function CartButton() {
  const { cartProducts } = useCart();

  const totalQuantity = cartProducts.reduce(
    (acc, prd) => acc + prd.cartQuantity,
    0
  );

  return (
    <button className="btn_icon_fa">
      <div className="sui_avatar">
        <IcOutlineShoppingCart />
        {cartProducts.length !== 0 && (
          <div className="bd_num bd_red">{totalQuantity}</div>
        )}
      </div>
    </button>
  );
}

export default CartButton;
