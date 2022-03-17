import { createContext, useContext, useState } from "react";

const CartContext = createContext();

const useCart = () => useContext(CartContext);

function CartProvider({ children }) {
  const [cartProducts, setCartProducts] = useState([]);

  const addToCart = (product) => {
    setCartProducts((prd) => {
      const findIndex = prd.findIndex((p) => p.id === product.id);
      return findIndex === -1 ? [...prd, { ...product, cartQuantity: 1 }] : prd;
    });
  };

  const updateProductQuantityInCart = (product, qty) => {
    setCartProducts((prd) =>
      prd.map((p) =>
        p.id === product.id ? { ...product, cartQuantity: qty } : p
      )
    );
  };

  const removeFromCart = (product) => {
    setCartProducts((prd) => prd.filter((p) => p.id !== product.id));
  };

  return (
    <CartContext.Provider value={{ cartProducts, addToCart, updateProductQuantityInCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
}

export { CartProvider, useCart };
