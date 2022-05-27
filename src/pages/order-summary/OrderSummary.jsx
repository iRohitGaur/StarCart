import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { v4 as uuid } from "uuid";
import logo from "../../assets/logo.png";
import {
  UiwShoppingCart,
  IcOutlineLocationOn,
  IcOutlineDiscount,
  IcRoundClose,
} from "../../assets/Icons";
import { AddressListOrderSummary } from "../../components";
import {
  useAddress,
  useAuth,
  useCart,
  useOrders,
  useToast,
} from "../../context";
import "./order-summary.css";
import OrderSummaryProductCard from "./OrderSummaryProductCard";

function OrderSummary() {
  const initialAddress = { _id: "", fullname: "", mobile: "" };
  const initialCoupon = { input: "", discount: 0, chip: "" };
  const { cartProducts, cartSummary, deliveryAmount } = useCart();
  const { address, updateOrSaveAddress } = useAddress();
  const [selectedAddress, setSelectedAddress] = useState(initialAddress);
  const [coupon, setCoupon] = useState(initialCoupon);
  const { user } = useAuth();
  const { sendToast } = useToast();
  const { processingOrders, placeOrder } = useOrders();
  const navigate = useNavigate();

  useEffect(() => {
    if (cartProducts.length === 0) {
      navigate(-1);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    setSelectedAddress(address.length !== 0 ? address[0] : initialAddress);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [address]);

  useEffect(() => {
    if (processingOrders === false) {
      navigateToOrders();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [processingOrders]);

  const handleAddNewAddress = () => {
    navigate("/profile?section=address");
  };

  const handleAddDummyAddress = () => {
    const dummyAddress = {
      _id: uuid(),
      fullname: "Guest User",
      mobile: "9999999999",
      pincode: "562123",
      address: "10th Mile, Tumkur Road, Madavara Post, Dasanapura Hobli",
      city: "Bangalore",
      state: "Karnataka",
    };
    updateOrSaveAddress(null, dummyAddress);
  };

  const navigateToOrders = () => {
    navigate("/profile?section=orders");
  };

  const handleCoupon = () => {
    if (coupon.input.toLowerCase() === "bird") {
      sendToast("coupon applied successfully");
      setCoupon({
        input: "",
        discount: (cartSummary.discountedPrice * 0.2).toFixed(2),
        chip: "bird",
      });
    } else {
      sendToast("invalid coupon", true);
      setCoupon(initialCoupon);
    }
  };

  const handleRemoveCoupon = () => {
    sendToast("coupon removed", true);
    setCoupon(initialCoupon);
  };

  const finalPrice = (
    cartSummary.discountedPrice +
    deliveryAmount -
    coupon.discount
  ).toFixed(2);

  const initializeRazorpay = () => {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = "https://checkout.razorpay.com/v1/checkout.js";

      script.onload = () => {
        resolve(true);
      };
      script.onerror = () => {
        resolve(false);
      };

      document.body.appendChild(script);
    });
  };

  const makePayment = async () => {
    const res = await initializeRazorpay();

    if (!res) {
      alert("Razorpay SDK Failed to load");
      return;
    }

    const options = {
      key: process.env.REACT_APP_RAZORPAY_KEY_ID,
      image: logo,
      name: "StarCart",
      description: "little bird-tee store",
      currency: "INR",
      amount: (finalPrice * 80).toFixed(0) * 100,
      handler: function (response) {
        if (response && response.razorpay_payment_id) {
          // Place order
          const order = {
            razorpay_payment_id: response.razorpay_payment_id,
            products: [...cartProducts],
            amount: (finalPrice * 80).toFixed(0),
            currency: "INR",
          };
          placeOrder(order);
        }
      },
      prefill: {
        name: selectedAddress.fullname,
        email: user.email,
        contact: selectedAddress.mobile,
        method: "netbanking",
      },
    };

    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  };

  return (
    <div className="order_summary_page_wrapper">
      <div className="order_products_address_wrapper">
        <div className="order_summary_wrapper">
          <div className="order_summary_icon_title">
            <div className="order_summary_icon">
              <UiwShoppingCart />
            </div>
            Order Summary
          </div>
          <div className="order_summary_products_wrapper">
            {cartProducts.map((product) => (
              <OrderSummaryProductCard key={product._id} product={product} />
            ))}
          </div>
        </div>
        <div className="order_address_wrapper">
          <div className="order_summary_icon_title">
            <div className="order_summary_icon">
              <IcOutlineLocationOn />
            </div>
            Delivery address
          </div>
          <div className="order_summary_address_wrapper">
            {address.map((add) => (
              <AddressListOrderSummary
                key={add._id}
                id={add._id}
                address={add}
                selected={selectedAddress._id === add._id}
                setSelectedAddress={setSelectedAddress}
              />
            ))}
            <button
              className="sui_btn add_new_address_btn"
              onClick={handleAddNewAddress}
            >
              Add New Address
            </button>
            <button
              className="sui_btn btn_outline add_new_address_btn"
              onClick={handleAddDummyAddress}
            >
              Add Dummy Address
            </button>
          </div>
        </div>
      </div>
      <div className="order_summary_details_wrapper">
        <div>Order Details</div>
        <hr />
        <div className="flex_row flex_justify_between">
          <p>Price:</p>
          <p className="stc_orange_icon">${cartSummary.discountedPrice}</p>
        </div>
        <div className="flex_row flex_justify_between">
          <p>Delivery:</p>
          <p>${deliveryAmount}</p>
        </div>
        <hr />
        {coupon.chip === "" ? (
          <div className="flex_column flex_gap1">
            <p className="flex_row flex_align_center flex_gap1">
              Gift card / Discount code
              <IcOutlineDiscount />
            </p>
            <div className="flex_row flex_justify_between flex_gap1">
              <input
                type="text"
                value={coupon.input}
                onChange={(e) =>
                  setCoupon((c) => ({ ...c, input: e.target.value }))
                }
              />
              <button className="sui_btn btn_outline" onClick={handleCoupon}>
                Apply
              </button>
            </div>
            <p className="coupon_detail">use BIRD for a flat 20% discount</p>
          </div>
        ) : (
          <div className="flex_row">
            <button
              className="coupon_chip sui_btn btn_outline btn_v1 flex_row flex_align_center"
              onClick={handleRemoveCoupon}
            >
              <IcRoundClose className="coupon_remove" />
              <IcOutlineDiscount /> {coupon.chip.toUpperCase()}
            </button>
          </div>
        )}
        <hr />
        <div className="flex_row flex_justify_between">
          <p>Coupon Discount:</p>
          <p className="stc_yellow_icon">-${coupon.discount}</p>
        </div>
        <div className="flex_row flex_justify_between">
          <p>Total Amount:</p>
          <p className="stc_green_icon">${finalPrice}</p>
        </div>
        <hr />
        <button
          className={`sui_btn ${address.length === 0 && "btn_disabled"}`}
          onClick={makePayment}
        >
          Proceed to payment
        </button>
      </div>
    </div>
  );
}

export default OrderSummary;
