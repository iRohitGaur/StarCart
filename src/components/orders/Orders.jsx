import React from "react";
import { useNavigate } from "react-router-dom";
import { useOrders } from "../../context";
import OrderSummaryProductCard from "../../pages/order-summary/OrderSummaryProductCard";
import { useDocumentTitle } from "../../utils";
import "./orders.css";

function Orders() {
  const { orders } = useOrders();

  const sortedOrders = [...orders].reverse();

  const navigate = useNavigate();

  const handleNavigateToProducts = () => {
    navigate("/products");
  };

  useDocumentTitle("StarCart - Orders - Rohit Gaur");
  return (
    <div className="stc_orders_page">
      {sortedOrders.length === 0 ? (
        <div className="no_items_in_orders">
          No orders yet. Check out some
          <button
            className="sui_btn btn_txt cart_products_btn"
            onClick={handleNavigateToProducts}
          >
            products
          </button>
        </div>
      ) : (
        sortedOrders.map((order) => (
          <div className="stc_orders_page_single_order">
            <div className="stc_orders_page_order_details">
              <p>
                <span>Order ID:</span> {order._id}
              </p>
              <p>
                <span>Amount:</span> {order.amount} {order.currency}
              </p>
            </div>
            {order.products.map((product) => (
              <div className="orders_page_products_wrapper">
                <OrderSummaryProductCard key={product._id} product={product} />
              </div>
            ))}
          </div>
        ))
      )}
    </div>
  );
}

export default Orders;
