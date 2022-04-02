import React, { useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useProduct } from "../../context";

function FilterByCategory() {
  const { state, dispatch } = useProduct();
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  useEffect(() => {
    const cat = searchParams.get("category");
    if (cat) {
      dispatch({
        type: "FILTER",
        filterType: "category",
        filter: cat,
      });
      navigate("/products");
    }
  }, [dispatch, navigate, searchParams]);

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
