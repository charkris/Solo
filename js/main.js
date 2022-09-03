import { Home } from "./modules/home.js";
import { myObject } from "./common/config.js";
let homePage = new Home();

// render mark-up dynamicly
homePage.render();

// set main content
fetch(myObject.baseUrl)
  .then((resp) => resp.json())
  .then((res) => {
    let mainContent = new Home(res.data.items);
    mainContent.renderMain();
  });

// filter section  display
// !! make a function from these
let cityArrow = document.getElementById("city-filter-arrow");
cityArrow.addEventListener("click", () => {
  cityArrow.classList.toggle("arrow-down");
  cityArrow.classList.toggle("arrow-up");
  document.getElementById("city-filter-form-id").classList.toggle("hidden");
  document
    .getElementById("city-filter-heading-id")
    .classList.toggle("city-filter-heading");
});

let priceArrow = document.getElementById("price-filter-arrow");
priceArrow.addEventListener("click", () => {
  priceArrow.classList.toggle("arrow-down");
  priceArrow.classList.toggle("arrow-up");
  document.getElementById("price-filter-form-id").classList.toggle("hidden");
  document
    .getElementById("price-filter-heading-id")
    .classList.toggle("price-filter-heading");
});

let buildingArrow = document.getElementById("building-filter-arrow");
buildingArrow.addEventListener("click", () => {
  buildingArrow.classList.toggle("arrow-down");
  buildingArrow.classList.toggle("arrow-up");
  document.getElementById("building-filter-form-id").classList.toggle("hidden");
  document
    .getElementById("building-cond-heading-id")
    .classList.toggle("building-cond-heading");
});
// make a function

// search field
function getInputValue() {
  return document.querySelector(".search-input").value;
}

document.querySelector(".search-input").addEventListener("keydown", () => {
  fetch(`${myObject.baseUrl}searchStr=${getInputValue()}`)
    .then((resp) => resp.json())
    .then((res) => {
      let mainContent = new Home(res.data.items);
      mainContent.renderMain();
    });
});
