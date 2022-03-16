import React from "react";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  MdiCardsHeart,
  MdiCardsHeartOutline,
  IcOutlineShoppingCart,
} from "../../assets/Icons";
import { useWishlist, useCart } from "../../context";

function Card({ product, btnTitle }) {
  const [hoverTitle, setHoverTitle] = useState("");

  const { wishlistProducts, toggleWishlist } = useWishlist();
  const { cartProducts, addToCart } = useCart();
  const navigate = useNavigate();

  const {
    overlay,
    image,
    imageAlt,
    title,
    seller,
    sellerUrl,
    description,
    price,
  } = product;

  const isOverlay = overlay.text !== "";

  const isProductInWishlist =
    wishlistProducts.findIndex((p) => p.id === product.id) === -1
      ? false
      : true;

  const isProductInCart =
    cartProducts.findIndex((p) => p.id === product.id) === -1 ? false : true;

  const handleCardEvent = () => {
    isProductInCart ? navigate("/cart") : addToCart(product);
  };

  const currentPath = useLocation();
  const isHorizonalCard =
    currentPath.pathname === "/wishlist" || currentPath.pathname === "/cart";

  let timer;

  const showTitle = () => {
    timer = setTimeout(() => {
      setHoverTitle(title);
    }, 500);
  };

  const hideTitle = () => {
    clearTimeout(timer);
    setHoverTitle("");
  };

  return (
    <div
      className={`sui_card ${isOverlay ? "card_badge" : ""} ${
        isHorizonalCard ? "card_list" : ""
      }`}
    >
      <div className="card_img_wrapper">
        {isOverlay && (
          <span className={`card_overlay ${overlay.bg}`}>{overlay.text}</span>
        )}
        <button
          className="sui_btn_float float_top_right stc_red_icon"
          onClick={() => toggleWishlist(product)}
        >
          {isProductInWishlist ? <MdiCardsHeart /> : <MdiCardsHeartOutline />}
        </button>
        <img src={image} alt={imageAlt} />
      </div>
      <div className="card_content_wrapper">
        <h2
          className="card_content_title"
          fulltext={hoverTitle}
          onMouseOver={showTitle}
          onMouseOut={hideTitle}
        >
          {title}
        </h2>
        <h4 className="card_content_seller flex_row flex_gap1">
          by
          <a href={sellerUrl} className="btn_txt">
            {seller}
          </a>
        </h4>
        <div className="card_content_desc">{description}</div>
        <div className="card_cta">
          <span className="card_price">
            ${price.current}
            <span className="card_price_old">${price.old}</span>
            <span className="card_price_off">
              {100 - (price.current / price.old) * 100}% off
            </span>
          </span>
          <button
            className="sui_btn flex_row flex_justify_center flex_align_center flex_gap1"
            onClick={handleCardEvent}
          >
            <IcOutlineShoppingCart />
            {isProductInCart ? "Go to cart" : btnTitle}
            {/*TODO: on visit of that page it does not show Go to cart yet by default if the prod is already in cart*/}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Card;
