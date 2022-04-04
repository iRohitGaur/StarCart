import { createContext, useContext, useState, useEffect } from "react";
import { useAxios } from "../../utils";
import { useAuth } from "../auth-context/auth-context";
import { useToast } from "../toast-context/toast-context";

const CartContext = createContext();

const useCart = () => useContext(CartContext);

function CartProvider({ children }) {
  const [cartProducts, setCartProducts] = useState([]);
  const [processingCart, setProcessingCart] = useState(null);
  const { user, token } = useAuth();
  const { response, operation } = useAxios();
  const { sendToast } = useToast();

  useEffect(() => {
    if (user) {
      setCartProducts(user.cart);
    } else {
      setCartProducts([]);
    }
  }, [user]);

  const calculateCartQuantity = (cartArray) => {
    console.log(cartArray.reduce((acc, val) => acc + val.cartQuantity, 0));
    return cartArray.reduce((acc, val) => acc + val.cartQuantity, 0);
  };

  useEffect(() => {
    if (response !== undefined) {
      if (
        calculateCartQuantity(response.cart) >
        calculateCartQuantity(cartProducts)
      ) {
        sendToast("Product added to cart");
      } else {
        sendToast("Product removed from cart", true);
      }
      setCartProducts(response.cart);
      setProcessingCart(null);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [response]);

  const addToCart = (product) => {
    const findIndex = cartProducts.findIndex((p) => p._id === product._id);
    if (findIndex === -1) {
      operation({
        method: "post",
        url: "/api/user/cart",
        headers: { authorization: token },
        data: { product: product },
      });
      setProcessingCart({ status: true, productID: product._id });
    }
  };

  const updateProductQuantityInCart = (product, qty) => {
    operation({
      method: "post",
      url: `/api/user/cart/${product._id}`,
      headers: { authorization: token },
      data: { quantity: qty },
    });
  };

  const removeFromCart = (product) => {
    operation({
      method: "delete",
      url: `/api/user/cart/${product._id}`,
      headers: { authorization: token },
    });
  };

  return (
    <CartContext.Provider
      value={{
        cartProducts,
        addToCart,
        updateProductQuantityInCart,
        removeFromCart,
        processingCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export { CartProvider, useCart };
