import { createContext, useContext, useState, useEffect } from "react";
import { useAxios } from "../../utils";
import { useAuth } from "../auth-context/auth-context";
import { useToast } from "../toast-context/toast-context";

const WishlistContext = createContext();

const useWishlist = () => useContext(WishlistContext);

function WishlistProvider({ children }) {
  const [wishlistProducts, setWishlistProducts] = useState([]);
  const [processingWishlist, setProcessingWishlist] = useState(null);
  const { user, token } = useAuth();
  const { response, operation } = useAxios();
  const { sendToast } = useToast();

  useEffect(() => {
    if (user) {
      setWishlistProducts(user.wishlist);
    } else {
      setWishlistProducts([]);
    }
  }, [user]);

  useEffect(() => {
    if (response !== undefined) {
      if (response.wishlist.length > wishlistProducts.length) {
        sendToast("Product added to wishlist");
      } else {
        sendToast("Product removed from wishlist", true);
      }
      setWishlistProducts(response.wishlist);
      setProcessingWishlist(null);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [response]);

  const toggleWishlist = (product) => {
    operation({
      method: "post",
      url: "/api/user/wishlist",
      headers: { authorization: token },
      data: { product: product },
    });
    setProcessingWishlist({ status: true, productID: product._id });
  };

  return (
    <WishlistContext.Provider
      value={{ wishlistProducts, toggleWishlist, processingWishlist }}
    >
      {children}
    </WishlistContext.Provider>
  );
}

export { WishlistProvider, useWishlist };
