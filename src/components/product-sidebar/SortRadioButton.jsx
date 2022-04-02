import React from "react";
import { useProduct } from "../../context";

function SortRadioButton({ name, label, currentSort }) {
  const { state, dispatch } = useProduct();

  return (
    <li>
      <label>
        <input
          type="radio"
          name={name}
          checked={state.sort === currentSort}
          onChange={() =>
            dispatch({
              type: "SETVALUE",
              actionKey: "sort",
              actionValue: currentSort,
            })
          }
        />
        {label}
      </label>
    </li>
  );
}

export default SortRadioButton;
