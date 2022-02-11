const loginArea = document.querySelector("#stc-login-area");
const signupArea = document.querySelector("#stc-signup-area");
const loginBtn = document.querySelector("#stc-login-btn");
const signupBtn = document.querySelector("#stc-signup-btn");

loginBtn.addEventListener("click", () => {
  loginArea.style.transform = "translateY(0)";
  signupArea.style.transform = "translateY(0)";
});
signupBtn.addEventListener("click", () => {
  loginArea.style.transform = "translateY(-39rem)";
  signupArea.style.transform = "translateY(-39rem)";
});
