import React, { useState, useEffect } from "react";
import "./products.css";
import { Card, ProductSidebar } from "../../components";
import { useLocation, useSearchParams } from "react-router-dom";
import { useDocumentTitle } from "../../utils";
import { useProduct } from "../../context";
import { Search } from "../../components/nav";

function Products() {
  useDocumentTitle("StarCart - Products - Rohit Gaur");
  const { filteredData, loading } = useProduct();
  const { pathname } = useLocation();
  const [searchText, setSearchText] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [sharedCart, setSharedCart] = useState(null);

  const [searchParams] = useSearchParams();

  useEffect(() => {
    const cart = searchParams.get("cart");
    if (cart) {
      setSharedCart(cart.split(","));
    } else {
      setSharedCart(null);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchParams]);

  const isSearchActive = searchText.trim() !== "";

  const searchedProducts = filteredData.filter((v) =>
    v.title.toLowerCase().includes(searchText.toLowerCase().trim())
  );

  let productsToShow = isSearchActive ? searchedProducts : filteredData;
  // RG: If shared card opened show relevant products
  if (sharedCart) {
    productsToShow = productsToShow.filter((p) => sharedCart.includes(p._id));
  }

  const numberOfPages = Math.ceil(productsToShow.length / 8).toFixed(0);

  const getproductsForPage = (num) => {
    let page = num - 1;
    if (page === 0) {
      return productsToShow.slice(0, 8);
    }
    const startingRange = page * 8;
    const endingRange =
      productsToShow.length < startingRange + 7
        ? productsToShow.length
        : startingRange + 8;
    return productsToShow.slice(startingRange, endingRange);
  };

  const paginatedProducts = getproductsForPage(currentPage);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <main className="productspage">
      <ProductSidebar />
      <div className="products_page_products_container flex_column flex_gap2 flex_justify_between">
        <div className="flex_column flex_gap2">
          <Search value={searchText} setValue={setSearchText} />
          <div className="product_area flex_row flex_gap2 flex_wrap">
            {loading
              ? [..."12345"].map((i) => <Card key={i} />)
              : paginatedProducts.map((product) => (
                  <Card
                    key={product.id}
                    product={product}
                    btnTitle="Add to cart"
                  />
                ))}
          </div>
        </div>
        <div className="products_page_pagination_wrapper">
          {Array.from({ length: numberOfPages }, (_, i) => i + 1).map(
            (pageNumber) => (
              <button
                key={pageNumber}
                className={`sui_btn btn_outline products_page_pagination_btn ${
                  currentPage === pageNumber &&
                  "btn_v2 products_page_pagination_selected_page_btn"
                }`}
                onClick={() => setCurrentPage(pageNumber)}
              >
                {pageNumber}
              </button>
            )
          )}
        </div>
      </div>
    </main>
  );
}

export default Products;
