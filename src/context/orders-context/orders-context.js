import { createContext, useContext, useState, useEffect } from "react";
import { useAxios } from "../../utils";
import { useAuth } from "../auth-context/auth-context";
import { useCart } from "../cart-context/cart-context";
import { useToast } from "../toast-context/toast-context";

const OrdersContext = createContext();

const useOrders = () => useContext(OrdersContext);

function OrdersProvider({ children }) {
  const [orders, setOrders] = useState([]);
  const [processingOrders, setProcessingOrders] = useState(null);
  const { user, token } = useAuth();
  const { response, operation } = useAxios();
  const { sendToast } = useToast();
  const { clearCart } = useCart();

  useEffect(() => {
    if (user && user.orders) {
      setOrders(user.orders);
    } else {
      setOrders([]);
    }
  }, [user]);

  useEffect(() => {
    if (response && response.orders) {
      if (response.orders.length > orders.length) {
        sendToast("order placed successfully");
      }
      setOrders(response.orders);
      clearCart();
      setProcessingOrders(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [response]);

  const placeOrder = (order) => {
    operation({
      method: "post",
      url: "/api/user/order",
      headers: { authorization: token },
      data: { ...order },
    });
  };

  return (
    <OrdersContext.Provider value={{ orders, processingOrders, placeOrder }}>
      {children}
    </OrdersContext.Provider>
  );
}

export { OrdersProvider, useOrders };
