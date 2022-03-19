import React from "react";
import "./wishlist.css";
import { useDocumentTitle } from "../../utils";
import { Card } from "../../components";
import { useWishlist } from "../../context";

function Wishlist() {
  useDocumentTitle("StarCart - Wishlist - Rohit Gaur");

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
