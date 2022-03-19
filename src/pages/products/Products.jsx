import React from "react";
import "./products.css";
import { Card, ProductSidebar } from "../../components";
import { useProductsReducer } from "../../reducers";

function Products() {
  const { filteredData, state, dispatch } = useProductsReducer();

  return (
    <main className="productspage">
      <ProductSidebar state={state} dispatch={dispatch} />
      <div className="product_area flex_row flex_gap2 flex_wrap">
        {filteredData.map((product) => (
          <Card key={product.id} product={product} btnTitle="Add to cart" />
        ))}
      </div>
    </main>
  );
}

export default Products;
