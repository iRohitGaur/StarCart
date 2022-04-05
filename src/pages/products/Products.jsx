import React, { useState, useEffect } from "react";
import "./products.css";
import { Card, ProductSidebar } from "../../components";
import { useLocation } from "react-router-dom";
import { useDocumentTitle } from "../../utils";
import { useProduct } from "../../context";
import { Search } from "../../components/nav";

function Products() {
  useDocumentTitle("StarCart - Products - Rohit Gaur");
  const { filteredData, loading } = useProduct();
  const { pathname } = useLocation();
  const [searchText, setSearchText] = useState("");

  const isSearchActive = searchText.trim() !== "";

  const searchedProducts = filteredData.filter((v) =>
    v.title.toLowerCase().includes(searchText.toLowerCase().trim())
  );

  const productsToShow = isSearchActive ? searchedProducts : filteredData;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <main className="productspage">
      <ProductSidebar />
      <div className="flex_column flex_gap2">
        <Search value={searchText} setValue={setSearchText} />
        <div className="product_area flex_row flex_gap2 flex_wrap">
          {loading
            ? [..."12345"].map((i) => <Card key={i} />)
            : productsToShow.map((product) => (
                <Card
                  key={product.id}
                  product={product}
                  btnTitle="Add to cart"
                />
              ))}
        </div>
      </div>
    </main>
  );
}

export default Products;
