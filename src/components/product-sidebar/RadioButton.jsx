import React from "react";

function RadioButton({ name, label, checked, dispatch }) {
  return (
    <li>
      <label>
        <input type="radio" name={name} checked={checked} onChange={dispatch} />
        {label}
      </label>
    </li>
  );
}

export default RadioButton;
