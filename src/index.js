import React from "react";
import "./index.css";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import {
  WishlistProvider,
  CartProvider,
  FilterProvider,
  AuthProvider,
  ProductProvider,
  ToastProvider,
  AddressProvider,
} from "./context";
import App from "./App";
import { makeServer } from "./server";

makeServer();

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <ToastProvider>
        <AuthProvider>
          <AddressProvider>
            <WishlistProvider>
              <CartProvider>
                <FilterProvider>
                  <ProductProvider>
                    <App />
                  </ProductProvider>
                </FilterProvider>
              </CartProvider>
            </WishlistProvider>
          </AddressProvider>
        </AuthProvider>
      </ToastProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
