import React from "react";
import { useProduct } from "../../context";

function FilterByBirds() {
  const { state, dispatch } = useProduct();

  return (
    <ul className="filter_list_section">
      <div className="filter_list_section_title">Filter by Birds</div>
      <li>
        <label>
          <input
            type="checkbox"
            name=""
            checked={state.bird.includes("songbird")}
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
            checked={state.bird.includes("dove")}
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
            checked={state.bird.includes("parrot")}
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
            checked={state.bird.includes("lovebird")}
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
            checked={state.bird.includes("finch")}
            onChange={() =>
              dispatch({ type: "FILTER", filterType: "bird", filter: "finch" })
            }
          />
          Finch
        </label>
      </li>
      <li>
        <label>
          <input
            type="checkbox"
            name=""
            checked={state.bird.includes("fairywren")}
            onChange={() =>
              dispatch({
                type: "FILTER",
                filterType: "bird",
                filter: "fairywren",
              })
            }
          />
          Fairywren
        </label>
      </li>
    </ul>
  );
}

export default FilterByBirds;
