import React, { useState, useEffect } from "react";
import "./home.css";
import { Carousel, Card, PopularCategory } from "../../components";
import { useAxios, useDocumentTitle } from "../../utils";
import { useLocation, useNavigate } from "react-router-dom";
import { useProduct } from "../../context";

function Home() {
  useDocumentTitle("StarCart - Home - Rohit Gaur");
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const { featuredProducts, loading } = useProduct();
  const [categories, setCategories] = useState([]);
  const { response, operation } = useAxios();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    operation({
      method: "get",
      url: "/api/categories",
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    response && response.categories && setCategories(response.categories);
  }, [response]);

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
              ? [..."12345"].map((i) => <Card key={i} />)
              : featuredProducts
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
            {categories.map((popCat) => (
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
