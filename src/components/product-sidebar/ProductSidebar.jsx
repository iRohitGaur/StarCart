import React from "react";
import { useFilter, useProduct } from "../../context";
import FilterByBirds from "./FilterByBirds";
import FilterByCategory from "./FilterByCategory";
import FilterByPrice from "./FilterByPrice";
import SortByPriceOrRating from "./SortByPriceOrRating";
import FilterByRating from "./FilterByRating";

function ProductSidebar() {
  const { collapsed } = useFilter();
  const { dispatch } = useProduct();

  return (
    <div className={`${collapsed ? "collapsed" : ""} filter_area flex_column`}>
      <div className="filter_title_section flex_row flex_align_center">
        <span>FILTERS</span>
        <button
          className="sui_btn btn_txt"
          onClick={() => dispatch({ type: "RESET_FILTERS" })}
        >
          CLEAR
        </button>
      </div>
      <SortByPriceOrRating />
      <FilterByRating />
      <FilterByPrice />
      <FilterByCategory />
      <FilterByBirds />
    </div>
  );
}

export default ProductSidebar;
