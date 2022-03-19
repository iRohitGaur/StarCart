import React from "react";
import { useFilter } from "../../context";
import FilterByBirds from "./FilterByBirds";
import FilterByCategory from "./FilterByCategory";
import FilterByPrice from "./FilterByPrice";
import SortByPrice from "./SortByPriceOrRating";
import SortByRating from "./FilterByRating";

function ProductSidebar({ state, dispatch }) {
  const { collapsed } = useFilter();

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
      <SortByPrice state={state} dispatch={dispatch} />
      <SortByRating state={state} dispatch={dispatch} />
      <FilterByPrice state={state} dispatch={dispatch} />
      <FilterByCategory state={state} dispatch={dispatch} />
      <FilterByBirds state={state} dispatch={dispatch} />
    </div>
  );
}

export default ProductSidebar;
