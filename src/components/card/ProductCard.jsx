import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  MdiCardsHeart,
  MdiCardsHeartOutline,
  IcOutlineShoppingCart,
  MdiTrashCanOutline,
  UiwStarOn,
  AntDesignLoading3QuartersOutlined,
} from "../../assets/Icons";
import { useWishlist, useCart, useAuth } from "../../context";

function ProductCard({ product, btnTitle }) {
  const [hoverTitle, setHoverTitle] = useState("");
  const { wishlistProducts, toggleWishlist, processingWishlist } =
    useWishlist();
  const { user } = useAuth();
  const navigate = useNavigate();
  const {
    cartProducts,
    addToCart,
    updateProductQuantityInCart,
    removeFromCart,
    processingCart,
  } = useCart();

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

  const currentPath = useLocation();

  const handleCardEvent = () => {
    user
      ? isProductInCart
        ? navigate("/cart")
        : addToCart(product)
      : navigate("/auth", { state: { from: currentPath }, replace: true });
  };

  const handleWishlist = () => {
    user
      ? toggleWishlist(product)
      : navigate("/auth", { state: { from: currentPath }, replace: true });
  };

  const isHorizontalCard =
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

  const ratingBackgroundColor =
    product.rating >= 4
      ? "product_rating_good"
      : product.rating >= 3
      ? "product_rating_medium"
      : "product_rating_bad";

  const goToProductDetail = (e) => {
    e.stopPropagation();
    navigate(`/products/${product._id}`);
  };

  return (
    <div
      className={`stc_product_card sui_card ${isOverlay ? "card_badge" : ""} ${
        isHorizontalCard ? "card_list" : ""
      }`}
    >
      <div className="card_img_wrapper">
        {isOverlay && (
          <span className={`card_overlay ${overlay.bg}`}>{overlay.text}</span>
        )}
        {processingWishlist !== null &&
        processingWishlist.productID === product._id ? (
          <button className="sui_btn_float float_top_right stc_red_icon">
            <AntDesignLoading3QuartersOutlined
              className="spinning_loader"
              style={{ width: "1.6rem", height: "1.6rem" }}
            />
          </button>
        ) : (
          <button
            className="sui_btn_float float_top_right stc_red_icon"
            onClick={handleWishlist}
          >
            {isProductInWishlist ? <MdiCardsHeart /> : <MdiCardsHeartOutline />}
          </button>
        )}
        <div className={`product_rating ${ratingBackgroundColor}`}>
          {product.rating}
          <UiwStarOn />
        </div>
        <img src={image} alt={imageAlt} onClick={(e) => goToProductDetail(e)} />
      </div>
      <div className="card_content_wrapper">
        <h2
          className="card_content_title"
          fulltext={hoverTitle}
          onMouseOver={showTitle}
          onMouseOut={hideTitle}
          onClick={goToProductDetail}
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
              {Math.round(100 - (price.current / price.old) * 100)}% off
            </span>
          </span>
          {currentPath.pathname === "/cart" ? (
            <div className="cart_product_qty_wrapper flex_row flex_align_center flex_gap2">
              <div className="cart_product_qty flex_row flex_align_center flex_gap1">
                <label htmlFor="qty">Qty:</label>
                <select
                  name="qty"
                  id="qty"
                  value={product.cartQuantity}
                  onChange={(e) =>
                    updateProductQuantityInCart(product, Number(e.target.value))
                  }
                >
                  {[
                    ...Array.from(
                      { length: product.quantity > 5 ? 5 : product.quantity },
                      (_, i) => i + 1
                    ),
                  ].map((val) => (
                    <option key={val} value={val}>
                      {val}
                    </option>
                  ))}
                </select>
              </div>
              <button
                className="sui_btn btn_v1 flex_row flex_align_center"
                onClick={() => removeFromCart(product)}
              >
                <MdiTrashCanOutline />
              </button>
            </div>
          ) : (
            <>
              {processingCart !== null &&
              processingCart.productID === product._id ? (
                <button className="sui_btn flex_row flex_justify_center flex_align_center flex_gap1">
                  <AntDesignLoading3QuartersOutlined
                    className="spinning_loader"
                    style={{ width: "2.4rem", height: "2.4rem" }}
                  />
                </button>
              ) : (
                <button
                  className="sui_btn flex_row flex_justify_center flex_align_center flex_gap1"
                  onClick={handleCardEvent}
                >
                  <IcOutlineShoppingCart />
                  {isProductInCart ? "Go to cart" : btnTitle}
                </button>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
