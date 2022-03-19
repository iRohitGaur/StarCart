import React from "react";
import "./home.css";
import { Carousel, Card, PopularCategory } from "../../components";
import { productsData, popularCategoriesData } from "../../data";
import { useDocumentTitle } from "../../utils";

function Home() {
  useDocumentTitle("StarCart - Home - Rohit Gaur");

  const handleCategorySelection = (category) => {};

  return (
    <main className="homepage">
      <Carousel />
      <div className="home_content flex_column">
        <div className="stc_feat flex_column">
          Featured Products
          <div className="feat_wrapper flex_row flex_gap2">
            {productsData.map((product) => (
              <Card key={product.id} product={product} btnTitle="Add to cart" />
            ))}
          </div>
        </div>
        <div className="stc_feat flex_column">
          Popular Categories
          <div className="pop_wrapper">
            {popularCategoriesData.map((popCat) => (
              <PopularCategory
                key={popCat.id}
                category={popCat}
                btnAction={() => handleCategorySelection(popCat.category)}
              />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}

export default Home;
