import React from "react";

function Search({mobile}) {
  return (
    <div className={`sui_search${mobile ? "_mobile" : ""}`}>
      <div className="sui_input input_icon">
        <div className="input_desc">
          <span className="sui_input_lbl">search</span>
          <span className="sui_input_info"></span>
        </div>
        <input type="text" />
        <i className="fas fa-search"></i>
      </div>
    </div>
  );
}

export default Search;
