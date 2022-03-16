import { createContext, useContext, useState } from "react";

const WishlistContext = createContext();

const useWishlist = () => useContext(WishlistContext);

function WishlistProvider({ children }) {
  const [wishlistProducts, setWishlistProducts] = useState([]);

  const toggleWishlist = (product) => {
    setWishlistProducts((prd) => {
      const findIndex = prd.findIndex((p) => p.id === product.id);
      if (findIndex === -1) {
        return [...prd, product];
      } else {
        return prd.filter((p) => p.id !== product.id);
      }
    });
  };

  return (
    <WishlistContext.Provider value={{ wishlistProducts, toggleWishlist }}>
      {children}
    </WishlistContext.Provider>
  );
}

export { WishlistProvider, useWishlist };
