import { Routes, Route } from "react-router-dom";
import { Footer, Nav } from "./components";
import { WishlistProvider, CartProvider } from "./context";
import { Home, Wishlist, Page404, Cart } from "./pages";

function App() {
  return (
    <>
      <WishlistProvider>
        <CartProvider>
          <Nav />

          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/wishlist" element={<Wishlist />}></Route>
            <Route path="/cart" element={<Cart />}></Route>
            <Route path="*" element={<Page404 />}></Route>
          </Routes>
        </CartProvider>
      </WishlistProvider>

      <Footer />
    </>
  );
}

export default App;
