import { Routes, Route } from "react-router-dom";
import { Footer, Nav } from "./components";
import { WishlistProvider, CartProvider } from "./context";
import { Homepage, Wishlist, Page404 } from "./pages";

function App() {
  return (
    <>
      <WishlistProvider>
        <CartProvider>
          <Nav />

          <Routes>
            <Route path="/" element={<Homepage />}></Route>
            <Route path="/wishlist" element={<Wishlist />}></Route>
            <Route path="*" element={<Page404 />}></Route>
          </Routes>
        </CartProvider>
      </WishlistProvider>

      <Footer />
    </>
  );
}

export default App;
