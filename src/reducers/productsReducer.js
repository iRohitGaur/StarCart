import { useReducer } from "react";
import { productsData } from "../data/product-data";

export default function useProductsReducer() {
  const initialState = {
    productData: productsData,
    price: 50,
    rating: 1,
    sort: null,
    category: [],
    bird: [],
  };

  const [state, dispatch] = useReducer((state, action) => {
    switch (action.type) {
      case "SETVALUE":
        return {
          ...state,
          [action.actionKey]: action.actionValue,
        };
      case "FILTER":
        return {
          ...state,
          [action.filterType]: state[action.filterType].includes(action.filter)
            ? state[action.filterType].filter((type) => type !== action.filter)
            : [...state[action.filterType], action.filter],
        };
      case "RESET_FILTERS":
        return initialState;
      default:
        throw new Error(`Unhandled type: ${action.type}`);
    }
  }, initialState);

  // RG: Filter based on Category
  let filteredData =
    state.category.length !== 0
      ? productsData.filter((p) => state.category.includes(p.category))
      : productsData;

  // RG: Filter based on Birds
  if (state.bird.length !== 0) {
    filteredData = filteredData.filter((p) => state.bird.includes(p.bird));
  }

  // RG: Filter based on Price
  if (state.price !== initialState.price) {
    filteredData = filteredData.filter((p) => p.price.current <= state.price);
  }

  // RG: Filter based on Rating
  if (state.rating !== initialState.rating) {
    filteredData = filteredData.filter((p) => p.rating >= state.rating);
  }

  // RG: Sort based on Price/Rating
  if (state.sort !== null) {
    if (state.sort === "priceLowToHigh") {
      filteredData.sort((a, b) => a.price.current - b.price.current);
    } else if (state.sort === "priceHighToLow") {
      filteredData.sort((a, b) => b.price.current - a.price.current);
    } else if (state.sort === "ratingLowToHigh") {
      filteredData.sort((a, b) => a.rating - b.rating);
    } else if (state.sort === "ratingHighToLow") {
      filteredData.sort((a, b) => b.rating - a.rating);
    }
  }
  return { filteredData, state, dispatch };
}
