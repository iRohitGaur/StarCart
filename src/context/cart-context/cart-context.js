import { createContext, useContext, useState } from "react";

const CartContext = createContext();

const useCart = () => useContext(CartContext);

function CartProvider({ children }) {
  const [cartProducts, setCartProducts] = useState([]);

  const addToCart = (product) => {
    setCartProducts((prd) => {
      const findIndex = prd.findIndex((p) => p.id === product.id);
      if (findIndex === -1) {
        return [...prd, product];
      } else {
        return prd.map((p) => {
          if (p.id === product.id) {
            return p.quantity === product.quantity
              ? p
              : { ...p, quantity: p.quantity + 1 };
          }
          return p;
        });
      }
    });
  };

  const removeFromCart = (product) => {
    setCartProducts((prd) => prd.filter((p) => p.id !== product.id));
  };

  return (
    <CartContext.Provider value={{ cartProducts, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
}

export { CartProvider, useCart };
