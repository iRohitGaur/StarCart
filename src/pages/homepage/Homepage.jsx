import React from "react";
import "./homepage.css";
import { Footer, Nav, Carousel, Card, PopularCategory } from "../../components";
import { productsData, popularCategoriesData } from "../../data";

function Homepage() {
  const handleAddToCart = (product) => {
    console.log("tapped", product);
  };

  const handleCategorySelection = (category) => {
    console.log("selected category: ", category);
  };

  return (
    <>
      <Nav />
      <main>
        <Carousel />
        <div className="home_content flex_column">
          <div className="stc_feat flex_column">
            Featured Products
            <div className="feat_wrapper flex_row flex_gap2">
              {productsData.map((product) => {
                return (
                  <Card
                    key={product.id}
                    product={product}
                    btnTitle="Add to cart"
                    btnAction={() => handleAddToCart(product)}
                  />
                );
              })}
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
      <Footer />
    </>
  );
}

export default Homepage;
