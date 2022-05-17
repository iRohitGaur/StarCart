import React from "react";
import { MdiFilterOutline } from "../../../assets/Icons";
import { useFilter } from "../../../context";

function FilterButton() {
  const { toggleCollapsed } = useFilter();

  return (
    <button className="filter_button btn_icon_fa" onClick={toggleCollapsed}>
      <MdiFilterOutline />
    </button>
  );
}

export default FilterButton;
