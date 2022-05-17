import React, { useEffect } from "react";
import "./cart.css";
import { useDocumentTitle } from "../../utils";
import { Card } from "../../components";
import { useCart } from "../../context";
import { Fa6SolidDove, IconParkOutlineShare } from "../../assets/Icons";
import { useLocation, useNavigate } from "react-router-dom";

function Cart() {
  useDocumentTitle("StarCart - Cart - Rohit Gaur");
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  const { cartProducts, cartSummary, deliveryAmount } = useCart();

  const navigate = useNavigate();

  const handleNavigateToProducts = () => {
    navigate("/products");
  };

  const handleNavigateToOrderSummary = () => {
    navigate("/order-summary");
  };

  const handleShareCart = async () => {
    const shareUrl = cartProducts.reduce(
      (acc, val, index) =>
        index === 0 ? `${acc}${val._id}` : `${acc},${val._id}`,
      "https://starcart-react.netlify.app/products?cart="
    );
    try {
      await navigator.clipboard.writeText(shareUrl);
      alert("Cart URL copied to your clipboard. Share it with your friends");
    } catch (err) {
      alert("Failed to copy.", err);
    }
  };

  return (
    <main className="cartpage">
      {cartProducts.length === 0 ? (
        <div className="no_items_in_cart">
          No items in cart. Check out some
          <button
            className="sui_btn btn_txt cart_products_btn"
            onClick={handleNavigateToProducts}
          >
            products
          </button>
        </div>
      ) : (
        <>
          <div className="cart_products_area flex_column flex_gap2">
            {cartProducts.map((product) => (
              <Card
                key={product.id}
                product={product}
                btnTitle="Move to cart"
              />
            ))}
          </div>
          <div className="checkout_area flex_column">
            <div className="checkout_title">Cart Summary</div>
            <div className="checkout_details flex_row">
              Quantity:<span>{cartSummary.cartQuantity}</span>
            </div>
            <div className="checkout_details flex_row">
              Price:
              <span className="stc_orange_icon">
                ${cartSummary.totalPrice.toFixed(2)}
              </span>
            </div>
            <div className="checkout_details flex_row">
              Discount:
              <span className="stc_green_icon">
                -$
                {(cartSummary.totalPrice - cartSummary.discountedPrice).toFixed(
                  2
                )}
              </span>
            </div>
            <div className="checkout_details flex_row">
              Delivery:
              <span
                className={`${
                  deliveryAmount === 0 ? "stc_green_icon" : "stc_orange_icon"
                }`}
              >
                {deliveryAmount === 0
                  ? "FREE"
                  : `$${deliveryAmount.toFixed(2)}`}
              </span>
            </div>
            <div className="checkout_total flex_row">
              Total:
              <span className="stc_green_icon">
                ${(cartSummary.discountedPrice + deliveryAmount).toFixed(2)}
              </span>
            </div>
            <button
              className="sui_btn flex_row flex_align_center flex_justify_center flex_gap1"
              onClick={handleNavigateToOrderSummary}
            >
              Checkout
              <Fa6SolidDove />
            </button>
            {cartProducts.length !== 0 && (
              <button
                className="sui_btn btn_outline flex_row flex_align_center flex_justify_center flex_gap1"
                onClick={handleShareCart}
              >
                Share this Cart
                <IconParkOutlineShare />
              </button>
            )}
          </div>
        </>
      )}
    </main>
  );
}

export default Cart;
