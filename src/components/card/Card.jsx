import React from "react";
import { useState } from "react";

function Card({ product, btnTitle, btnAction }) {
  const [hoverTitle, setHoverTitle] = useState("");

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
    <div className={`sui_card ${isOverlay ? "card_badge" : ""}`}>
      <div className="card_img_wrapper">
        {isOverlay && (
          <span className={`card_overlay ${overlay.bg}`}>{overlay.text}</span>
        )}
        <button className="sui_btn_float float_top_right stc_red_icon">
          <i className="far fa-heart"></i>
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
          <button className="sui_btn" onClick={btnAction}>
            <i className="btn_icon fas fa-shopping-cart"></i>
            {btnTitle}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Card;
