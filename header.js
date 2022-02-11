const headerLogoBtn = document.querySelector("#stc-logo");
const headerWishlistBtn = document.querySelector("#stc-wishlist");
const headerCartBtn = document.querySelector("#stc-cart");
const headerLoginBtn = document.querySelector("#stc-login");

headerLogoBtn.addEventListener("click", () => {
  window.location = "/index.html";
});
headerWishlistBtn.addEventListener("click", () => {
  window.location = "/wishlist/wishlist.html";
});
headerCartBtn.addEventListener("click", () => {
  window.location = "/cart/cart.html";
});
headerLoginBtn.addEventListener("click", () => {
  window.location = "/auth/auth.html";
});
