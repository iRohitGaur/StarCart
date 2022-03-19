import React from "react";
import RadioButton from "./RadioButton";

function FilterByRating({ state, dispatch }) {
  return (
    <ul className="filter_list_section">
      <div className="filter_list_section_title">Ratings</div>
      <RadioButton
        name="filterByRating"
        label="1 star and above"
        checked={state.rating === 1}
        dispatch={() =>
          dispatch({ type: "SETVALUE", actionKey: "rating", actionValue: 1 })
        }
      />
      <RadioButton
        name="filterByRating"
        label="2 stars and above"
        checked={state.rating === 2}
        dispatch={() =>
          dispatch({ type: "SETVALUE", actionKey: "rating", actionValue: 2 })
        }
      />
      <RadioButton
        name="filterByRating"
        label="3 stars and above"
        checked={state.rating === 3}
        dispatch={() =>
          dispatch({ type: "SETVALUE", actionKey: "rating", actionValue: 3 })
        }
      />
      <RadioButton
        name="filterByRating"
        label="4 stars and above"
        checked={state.rating === 4}
        dispatch={() =>
          dispatch({ type: "SETVALUE", actionKey: "rating", actionValue: 4 })
        }
      />
    </ul>
  );
}

export default FilterByRating;
