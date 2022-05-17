import React from "react";
import { useProduct } from "../../context";

function FilterByPrice() {
  const { state, dispatch } = useProduct();

  return (
    <ul className="filter_list_section flex_column">
      <div className="filter_list_section_title">Price: ${state.price}</div>
      <input
        className="sort_slider"
        type="range"
        min="5"
        max="50"
        value={state.price}
        step="5"
        onChange={(e) =>
          dispatch({
            type: "SETVALUE",
            actionKey: "price",
            actionValue: Number(e.target.value),
          })
        }
      />
      <label className="sort_slider_label flex_row" htmlFor="">
        <span>$5</span>
        <span>$50</span>
      </label>
    </ul>
  );
}

export default FilterByPrice;
