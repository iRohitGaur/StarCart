import { createContext, useContext, useEffect, useReducer } from "react";
import { useAxios } from "../../utils";
import filterData from "./filterData";

const ProductContext = createContext();

const useProduct = () => useContext(ProductContext);

function ProductProvider({ children }) {
  const { response, operation, loading } = useAxios();

  const initialState = {
    productData: [],
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
        return {
          ...initialState,
          productData: state.productData,
        };
      default:
        throw new Error(`Unhandled type: ${action.type}`);
    }
  }, initialState);

  const filteredData = filterData(initialState, state);
  
  const featuredProducts = state.productData.filter((p) => p.featured);

  useEffect(() => {
    operation({
      method: "get",
      url: "/api/products",
    });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (response) {
      dispatch({
        type: "SETVALUE",
        actionKey: "productData",
        actionValue: response.products,
      });
    }
  }, [dispatch, response]);

  return (
    <ProductContext.Provider
      value={{ featuredProducts, filteredData, state, dispatch, loading }}
    >
      {children}
    </ProductContext.Provider>
  );
}

export { ProductProvider, useProduct };
