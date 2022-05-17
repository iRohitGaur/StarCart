import React, { useEffect } from "react";
import "./wishlist.css";
import { useDocumentTitle } from "../../utils";
import { Card } from "../../components";
import { useWishlist } from "../../context";
import { useLocation } from "react-router-dom";

function Wishlist() {
  useDocumentTitle("StarCart - Wishlist - Rohit Gaur");
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  const { wishlistProducts } = useWishlist();

  return (
    <main className="wishlistpage">
      <div className="wishlist_title">Your Wishlist</div>
      <div className="wishlist_area flex_row flex_gap2 flex_wrap">
        {wishlistProducts.map((product) => {
          return (
            <Card key={product.id} product={product} btnTitle="Move to cart" />
          );
        })}
      </div>
    </main>
  );
}

export default Wishlist;
