import React from "react";
import "./cart.css";
import { useDocumentTitle } from "../../utils";
import { Card } from "../../components";
import { useCart } from "../../context";
import { Fa6SolidDove } from "../../assets/Icons";

function Cart() {
  useDocumentTitle("StarCart - Cart - Rohit Gaur");

  const { cartProducts } = useCart();

  const initialState = {
    cartQuantity: 0,
    totalPrice: 0,
    delivery: 9,
    discount: 0,
  };

  const checkout = cartProducts.reduce(
    (acc, product) => ({
      ...acc,
      cartQuantity: acc.cartQuantity + product.cartQuantity,
      totalPrice: acc.totalPrice + product.price.current * product.cartQuantity,
    }),
    initialState
  );

  return (
    <main className="cartpage">
      <div className="cart_products_area flex_column flex_gap2">
        {cartProducts.map((product) => (
          <Card key={product.id} product={product} btnTitle="Move to cart" />
        ))}
      </div>
      <div className="checkout_area flex_column">
        <div className="checkout_title">Checkout</div>
        <div className="checkout_details flex_row">
          Quantity:<span>{checkout.cartQuantity}</span>
        </div>
        <div className="checkout_details flex_row">
          Price:<span className="stc_orange_icon">${checkout.totalPrice}</span>
        </div>
        <div className="checkout_details flex_row">
          Delivery:<span className="stc_orange_icon">${checkout.delivery}</span>
        </div>
        <div className="checkout_details flex_row">
          Discount:<span className="stc_green_icon">-${checkout.discount}</span>
        </div>
        <div className="checkout_total flex_row">
          Total:
          <span className="stc_orange_icon">
            ${checkout.totalPrice + checkout.delivery - checkout.discount}
          </span>
        </div>
        <button className="sui_btn flex_row flex_align_center flex_justify_center flex_gap1">
          Place Order
          <Fa6SolidDove />
        </button>
      </div>
    </main>
  );
}

export default Cart;
