const filterBtn = document.querySelector("#filter");
const filterArea = document.querySelector(".filter_area");

filterBtn.addEventListener("click", () => {
  filterArea.classList.contains("collapsed")
    ? filterArea.classList.remove("collapsed")
    : filterArea.classList.add("collapsed");
});
