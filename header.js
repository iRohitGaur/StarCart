const headerLogoBtn = document.querySelector("#stc-logo");
const headerWishlistBtn = document.querySelector("#stc-wishlist");
const headerCartBtn = document.querySelector("#stc-cart");
const headerLoginBtn = document.querySelector("#stc-login");
const headerLogoutBtn = document.querySelector("#stc-logout");
const userProfileBtn = document.querySelector("#stc-profile");
const userProfileDropdown = document.querySelector(
  ".user_profile_dropdown_menu"
);

headerLogoBtn.addEventListener("click", () => {
  window.location = "/index.html";
});
headerWishlistBtn.addEventListener("click", () => {
  window.location = "/wishlist/wishlist.html";
});
headerCartBtn.addEventListener("click", () => {
  window.location = "/cart/cart.html";
});
headerLoginBtn?.addEventListener("click", () => {
  window.location = "/auth/auth.html";
});
userProfileBtn?.addEventListener("click", () => {
  userProfileDropdown.classList.contains("show_dropdown")
    ? userProfileDropdown.classList.remove("show_dropdown")
    : userProfileDropdown.classList.add("show_dropdown");
});
headerLogoutBtn?.addEventListener("click", () => {
  window.location = "/auth/auth.html";
});
