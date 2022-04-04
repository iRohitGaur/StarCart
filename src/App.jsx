import { Routes, Route } from "react-router-dom";
import {
  Footer,
  Nav,
  PrivateRoute,
  RestrictedRoute,
  ToastStack,
} from "./components";
import {
  Home,
  Wishlist,
  Page404,
  Cart,
  Products,
  Auth,
  ProductDetail,
  Profile,
} from "./pages";

function App() {
  return (
    <>
      <Nav />

      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/products" element={<Products />} />
        <Route path="/products/:productId" element={<ProductDetail />} />

        <Route element={<PrivateRoute />}>
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/cart" element={<Cart />} />
        </Route>
        <Route path="/profile" element={<Profile />} />

        <Route element={<RestrictedRoute />}>
          <Route path="/auth" element={<Auth />} />
        </Route>

        <Route path="*" element={<Page404 />} />
      </Routes>

      <ToastStack />
      <Footer />
    </>
  );
}

export default App;
