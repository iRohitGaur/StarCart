import React, { useState, useEffect } from "react";
import "./products.css";
import { Card, ProductSidebar } from "../../components";
import { useLocation } from "react-router-dom";
import { useDocumentTitle } from "../../utils";
import { useProduct } from "../../context";

function Products() {
  useDocumentTitle("StarCart - Products - Rohit Gaur");
  const { filteredData, loading } = useProduct();
  const { pathname } = useLocation();
  const [productData, setProductData] = useState([]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    setProductData(filteredData);
  }, [filteredData]);

  return (
    <main className="productspage">
      <ProductSidebar />
      <div className="product_area flex_row flex_gap2 flex_wrap">
        {loading
          ? [..."12345"].map((i) => <Card key={i} />)
          : productData.map((product) => (
              <Card key={product.id} product={product} btnTitle="Add to cart" />
            ))}
      </div>
    </main>
  );
}

export default Products;
