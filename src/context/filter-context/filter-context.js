import { createContext, useContext, useState } from "react";

const FilterContext = createContext();

const useFilter = () => useContext(FilterContext);

function FilterProvider({ children }) {
  const [collapsed, setCollapsed] = useState(true);

  const toggleCollapsed = () => {
    setCollapsed((c) => !c);
  };

  return (
    <FilterContext.Provider value={{ collapsed, toggleCollapsed }}>
      {children}
    </FilterContext.Provider>
  );
}

export { FilterProvider, useFilter };
