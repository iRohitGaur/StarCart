import React from "react";

function FilterByCategory({ state, dispatch }) {
  return (
    <ul className="filter_list_section">
      <div className="filter_list_section_title">Categories</div>
      <li>
        <label>
          <input
            type="checkbox"
            name=""
            checked={state.category.includes("tshirt")}
            onChange={() =>
              dispatch({
                type: "FILTER",
                filterType: "category",
                filter: "tshirt",
              })
            }
          />
          T-Shirts
        </label>
      </li>
      <li>
        <label>
          <input
            type="checkbox"
            name=""
            checked={state.category.includes("hoodie")}
            onChange={() =>
              dispatch({
                type: "FILTER",
                filterType: "category",
                filter: "hoodie",
              })
            }
          />
          Hoodies
        </label>
      </li>
      <li>
        <label>
          <input
            type="checkbox"
            name=""
            checked={state.category.includes("sticker")}
            onChange={() =>
              dispatch({
                type: "FILTER",
                filterType: "category",
                filter: "sticker",
              })
            }
          />
          Stickers
        </label>
      </li>
    </ul>
  );
}

export default FilterByCategory;
