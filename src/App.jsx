import { Routes, Route } from "react-router-dom";
import { Footer, Nav } from "./components";
import { Home, Wishlist, Page404, Cart, Products, Auth } from "./pages";

function App() {
  return (
    <>
      <Nav />

      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/products" element={<Products />}></Route>
        <Route path="/wishlist" element={<Wishlist />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
        <Route path="/auth" element={<Auth />}></Route>
        <Route path="*" element={<Page404 />}></Route>
      </Routes>

      <Footer />
    </>
  );
}

export default App;
