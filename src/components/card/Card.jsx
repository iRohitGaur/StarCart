import React from "react";
import "./card.css";

import PlaceholderCard from "./PlaceholderCard";
import ProductCard from "./ProductCard";

function Card({ product, btnTitle }) {
  return product === undefined && btnTitle === undefined ? (
    <PlaceholderCard />
  ) : (
    <ProductCard product={product} btnTitle={btnTitle} />
  );
}

export default Card;
