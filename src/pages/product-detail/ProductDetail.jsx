import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  AntDesignLoading3QuartersOutlined,
  IcOutlineShoppingCart,
  MdiCardsHeart,
  MdiCardsHeartOutline,
} from "../../assets/Icons";
import { Card } from "../../components";
import { useCart, useProduct, useWishlist } from "../../context";
import "./productdetail.css";

function ProductDetail() {
  const [productData, setProductData] = useState([]);

  const { productId } = useParams();
  const { state, featuredProducts, loading } = useProduct();
  const product = state.productData.filter((p) => p._id === productId)[0];

  const { wishlistProducts, toggleWishlist, processingWishlist } =
    useWishlist();
  const { cartProducts, addToCart, processingCart } = useCart();
  const navigate = useNavigate();

  const { image, imageAlt, title, seller, sellerUrl, description, price } =
    product;

  const isProductInWishlist =
    wishlistProducts.findIndex((p) => p.id === product.id) === -1
      ? false
      : true;

  const isProductInCart =
    cartProducts.findIndex((p) => p.id === product.id) === -1 ? false : true;

  const handleCardEvent = () => {
    isProductInCart ? navigate("/cart") : addToCart(product);
  };

  useEffect(() => {
    setProductData(featuredProducts);
  }, [featuredProducts]);

  return (
    <main className="product_detail_wrapper">
      <div className="product_detail_image_wrapper">
        <img className="product_detail_image" src={image} alt={imageAlt} />
        {processingWishlist !== null &&
        processingWishlist.productID === product._id ? (
          <button className="sui_btn_float float_top_right stc_red_icon">
            <AntDesignLoading3QuartersOutlined
              className="spinning_loader"
              style={{ width: "3rem", height: "3rem" }}
            />
          </button>
        ) : (
          <button
            className="sui_btn_float float_top_right stc_red_icon"
            onClick={() => toggleWishlist(product)}
          >
            {isProductInWishlist ? (
              <MdiCardsHeart style={{ width: "3rem", height: "3rem" }} />
            ) : (
              <MdiCardsHeartOutline style={{ width: "3rem", height: "3rem" }} />
            )}
          </button>
        )}
      </div>
      <div className="product_detail_desc">
        <div className="flex_column flex_gap2">
          <div>
            <h3>{title}</h3>
            <h4 className="card_content_seller flex_row flex_gap1">
              by
              <a href={sellerUrl} className="btn_txt seller_url_detail_page">
                {seller}
              </a>
            </h4>
          </div>
          <div className="flex_column flex_gap2">
            {description.split(".").map((desc, index) => (
              <p key={index} className="stc_desc_detail">
                - {desc}
              </p>
            ))}
          </div>
        </div>
        <div className="flex_column flex_gap1">
          <div className="card_cta">
            <span className="card_price">
              ${price.current}
              <span className="card_price_old">${price.old}</span>
              <span className="card_price_off">
                {Math.round(100 - (price.current / price.old) * 100)}% off
              </span>
            </span>
          </div>
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
              {isProductInCart ? "Go to cart" : "Add to cart"}
            </button>
          )}
        </div>
      </div>
      <div className="stc_suggestion flex_column">
        <p>Related Products</p>
        <div className="feat_wrapper flex_row flex_gap2">
          {loading
            ? [..."12345"].map((i) => <Card key={i} />)
            : productData
                .filter((p) => p.featured)
                .map((product) => (
                  <Card
                    key={product.id}
                    product={product}
                    btnTitle="Add to cart"
                  />
                ))
                .slice(0, 5)}
        </div>
      </div>
    </main>
  );
}

export default ProductDetail;
