import React from "react";
import RadioButton from "./RadioButton";

function SortByPriceOrRating({ state, dispatch }) {
  return (
    <ul className="filter_list_section">
      <div className="filter_list_section_title">Sort</div>
      <RadioButton
        name="sortByPriceOrRating"
        label="Price: Low to High"
        checked={state.sort === "priceLowToHigh"}
        dispatch={() =>
          dispatch({
            type: "SETVALUE",
            actionKey: "sort",
            actionValue: "priceLowToHigh",
          })
        }
      />
      <RadioButton
        name="sortByPriceOrRating"
        label="Price: High to Low"
        checked={state.sort === "priceHighToLow"}
        dispatch={() =>
          dispatch({
            type: "SETVALUE",
            actionKey: "sort",
            actionValue: "priceHighToLow",
          })
        }
      />
      <RadioButton
        name="sortByPriceOrRating"
        label="Rating: Low to High"
        checked={state.sort === "ratingLowToHigh"}
        dispatch={() =>
          dispatch({
            type: "SETVALUE",
            actionKey: "sort",
            actionValue: "ratingLowToHigh",
          })
        }
      />
      <RadioButton
        name="sortByPriceOrRating"
        label="Rating: High to Low"
        checked={state.sort === "ratingHighToLow"}
        dispatch={() =>
          dispatch({
            type: "SETVALUE",
            actionKey: "sort",
            actionValue: "ratingHighToLow",
          })
        }
      />
    </ul>
  );
}

export default SortByPriceOrRating;
