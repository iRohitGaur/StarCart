const headerLogoBtn = document.querySelector("#stc-logo");
const headerWishlistBtn = document.querySelector("#stc-wishlist");
const headerCartBtn = document.querySelector("#stc-cart");
const headerLoginBtn = document.querySelector("#stc-login");
const headerLogoutBtn = document.querySelector("#stc-logout");
const userProfileBtn = document.querySelector("#stc-profile");
const userProfileDropdown = document.querySelector(
  ".user_profile_dropdown_menu"
);
const burgerBtn = document.querySelector("#burger");
const mobileNav = document.querySelector(".collapsed_cta");

burgerBtn?.addEventListener("click", () => {
  mobileNav.classList.contains("hide_cta")
    ? mobileNav.classList.remove("hide_cta")
    : mobileNav.classList.add("hide_cta");
});
headerLogoBtn?.addEventListener("click", () => {
  window.location = "/index.html";
});
headerWishlistBtn?.addEventListener("click", () => {
  window.location = "/wishlist/wishlist.html";
});
headerCartBtn?.addEventListener("click", () => {
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

// DARK MODE
const modeBtn = document.querySelector("#mode-btn");

if (localStorage.getItem("stc-mode") === "dark") {
  setLightmode(false);
} else {
  setLightmode(true);
}

document.querySelector("#mode").addEventListener("click", () => {
  if (modeBtn.classList.contains("fa-moon")) {
    setLightmode(true);
    localStorage.setItem("stc-mode", "light");
  } else {
    setLightmode(false);
    localStorage.setItem("stc-mode", "dark");
  }
});

function setLightmode(light) {
  if (light) {
    modeBtn.className = "fas fa-sun";
    document.documentElement.setAttribute("stc-mode", "light");
  } else {
    modeBtn.className = "fas fa-moon";
    document.documentElement.setAttribute("stc-mode", "dark");
  }
}
