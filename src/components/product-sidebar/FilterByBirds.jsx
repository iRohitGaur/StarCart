import React from "react";

function FilterByBirds({ state, dispatch }) {
  return (
    <ul className="filter_list_section">
      <div className="filter_list_section_title">Filter by Birds</div>
      <li>
        <label>
          <input
            type="checkbox"
            name=""
            checked={state.songbird}
            onChange={() =>
              dispatch({
                type: "FILTER",
                filterType: "bird",
                filter: "songbird",
              })
            }
          />
          Songbird
        </label>
      </li>
      <li>
        <label>
          <input
            type="checkbox"
            name=""
            checked={state.dove}
            onChange={() =>
              dispatch({ type: "FILTER", filterType: "bird", filter: "dove" })
            }
          />
          Dove
        </label>
      </li>
      <li>
        <label>
          <input
            type="checkbox"
            name=""
            checked={state.parrot}
            onChange={() =>
              dispatch({ type: "FILTER", filterType: "bird", filter: "parrot" })
            }
          />
          Parrot
        </label>
      </li>
      <li>
        <label>
          <input
            type="checkbox"
            name=""
            checked={state.lovebird}
            onChange={() =>
              dispatch({
                type: "FILTER",
                filterType: "bird",
                filter: "lovebird",
              })
            }
          />
          Lovebird
        </label>
      </li>
      <li>
        <label>
          <input
            type="checkbox"
            name=""
            checked={state.finch}
            onChange={() =>
              dispatch({ type: "FILTER", filterType: "bird", filter: "finch" })
            }
          />
          Finch
        </label>
      </li>
    </ul>
  );
}

export default FilterByBirds;
