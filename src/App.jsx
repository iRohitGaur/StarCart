import { Routes, Route } from "react-router-dom";
import { Footer, Nav } from "./components";
import { WishlistProvider, CartProvider, FilterProvider } from "./context";
import { Home, Wishlist, Page404, Cart, Products } from "./pages";

function App() {
  return (
    <>
      <WishlistProvider>
        <CartProvider>
          <FilterProvider>
            <Nav />
            <Routes>
              <Route path="/" element={<Home />}></Route>
              <Route path="/products" element={<Products />}></Route>
              <Route path="/wishlist" element={<Wishlist />}></Route>
              <Route path="/cart" element={<Cart />}></Route>
              <Route path="*" element={<Page404 />}></Route>
            </Routes>
          </FilterProvider>
        </CartProvider>
      </WishlistProvider>

      <Footer />
    </>
  );
}

export default App;
