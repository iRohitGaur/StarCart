import React from "react";
import { useEffect, useState } from "react";
import { carouselData } from "../../data/carousel-data";

function Carousel() {
  const [{ image, transition }, setState] = useState({
    count: 0,
    image: carouselData[0],
    transition: "",
  });

  const startTransition = () => {
    const timeout = setTimeout(() => {
      setState((dt) => ({ ...dt, transition: "parallax_slider" }));
    }, 2600);
    return timeout;
  };

  useEffect(() => {
    let timeout = startTransition();
    const timer = setInterval(() => {
      timeout = startTransition();
      setState((data) => {
        return data.count === 3
          ? {
              count: 0,
              image: carouselData[0],
              transition: "transitioning_src",
            }
          : {
              count: data.count + 1,
              image: carouselData[data.count + 1],
              transition: "transitioning_src",
            };
      });
    }, 3000);
    return () => {
      clearInterval(timer);
      clearTimeout(timeout);
    };
  }, []);

  return (
    <div className="carousel">
      <img className={transition} src={image.left} alt="classic tee men" />
      <img
        className={transition}
        src={image.center}
        alt="classic tee two_models"
      />
      <img className={transition} src={image.right} alt="classic tee women" />
      <button className="carousel_btn sui_btn" id="shop-now-btn">
        Shop Now
      </button>
    </div>
  );
}

export default Carousel;
