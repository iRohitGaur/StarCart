import React from "react";
import "./order-summary-product-card.css";

function OrderSummaryProductCard({ product }) {
  return (
    <div className="order_summary_product_wrapper">
      <img src={product.image} alt={product.title} />
      <div className="product_details">
        <h3 className="product_title">{product.title}</h3>
        <p className="product_seller">Seller: {product.seller}</p>
        <p className="product_qty">Quantity: {product.cartQuantity}</p>
        <p className="product_price">
          Total Price: ${product.price.current * product.cartQuantity}
        </p>
      </div>
    </div>
  );
}

export default OrderSummaryProductCard;
