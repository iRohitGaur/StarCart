import React, { useState, useEffect } from "react";
import "./home.css";
import { Carousel, Card, PopularCategory } from "../../components";
import { popularCategoriesData } from "../../data";
import { useDocumentTitle } from "../../utils";
import { useLocation, useNavigate } from "react-router-dom";
import { useProduct } from "../../context";

function Home() {
  useDocumentTitle("StarCart - Home - Rohit Gaur");
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const { featuredProducts, loading } = useProduct();
  const [productData, setProductData] = useState([]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    setProductData(featuredProducts);
  }, [featuredProducts]);

  const handleCategorySelection = (category) => {
    navigate(`/products?category=${category}`);
  };

  return (
    <main className="homepage">
      <Carousel />
      <div className="home_content flex_column">
        <div className="stc_feat flex_column">
          Featured Products
          <div className="feat_wrapper flex_row flex_gap2">
            {loading
              ? [..."123456"].map((i) => <Card key={i} />)
              : productData
                  .filter((p) => p.featured)
                  .map((product) => (
                    <Card
                      key={product.id}
                      product={product}
                      btnTitle="Add to cart"
                    />
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
