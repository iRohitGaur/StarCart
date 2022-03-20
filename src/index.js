import React from "react";
import "./index.css";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { WishlistProvider, CartProvider, FilterProvider } from "./context";
import App from "./App";
import { makeServer } from "./server";

makeServer();

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <WishlistProvider>
        <CartProvider>
          <FilterProvider>
            <App />
          </FilterProvider>
        </CartProvider>
      </WishlistProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
