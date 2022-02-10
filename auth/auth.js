const loginArea = document.querySelector("#stc-login");
const signupArea = document.querySelector("#stc-signup");
const loginBtn = document.querySelector("#stc-login-btn");
const signupBtn = document.querySelector("#stc-signup-btn");
const homePageLoginBtn = document.querySelector("#stc-home");

loginBtn.addEventListener("click", () => {
  loginArea.style.transform = "translateY(0)";
  signupArea.style.transform = "translateY(0)";
});
signupBtn.addEventListener("click", () => {
  loginArea.style.transform = "translateY(-39rem)";
  signupArea.style.transform = "translateY(-39rem)";
});
homePageLoginBtn.addEventListener("click", () => {
  window.location = "/index.html";
});
