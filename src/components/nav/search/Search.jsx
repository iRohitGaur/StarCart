import React from "react";
import { IcRoundSearch } from "../../../assets/Icons";

function Search({ value, setValue }) {
  return (
    <div className="sui_search">
      <div className="sui_input input_icon">
        <div className="input_desc">
          <span className="sui_input_lbl">search</span>
          <span className="sui_input_info"></span>
        </div>
        <input
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <IcRoundSearch />
      </div>
    </div>
  );
}

export default Search;
