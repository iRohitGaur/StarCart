import React from "react";
import SortRadioButton from "./SortRadioButton";

function SortByPriceOrRating() {
  return (
    <ul className="filter_list_section">
      <div className="filter_list_section_title">Sort</div>
      <SortRadioButton
        name="sortByPrice"
        label="Price: Low to High"
        currentSort="priceLowToHigh"
      />
      <SortRadioButton
        name="sortByPrice"
        label="Price: High to Low"
        currentSort="priceHighToLow"
      />
      <SortRadioButton
        name="sortByRating"
        label="Rating: Low to High"
        currentSort="ratingLowToHigh"
      />
      <SortRadioButton
        name="sortByRating"
        label="Rating: High to Low"
        currentSort="ratingHighToLow"
      />
    </ul>
  );
}

export default SortByPriceOrRating;
