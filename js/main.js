import { Home } from "./modules/home.js";
import { generateApi } from "./common/config.js"

// render mark-up dynamicly
let homePage = new Home();
homePage.render();

// api param values
let fromVal = "";
let toVal = "";
let cityVal = "";
let typeVal = "";
let searchVal = "";
let sortVal = "";
let skipVal = 0;
let limitVal = 9;
let newApi;

// console.log(generateApi(fromVal, toVal, cityVal, typeVal, searchVal, sortVal, skipVal, limitVal))
// newApi = `${config.baseUrl}fromParam=${fromVal}&toParam=${toVal}&cityParam=${cityVal}&typeParam=${typeVal}&searchStr=${searchVal}&sortBy=${sortVal}&skip=${skipVal}&limit=${limitVal}`;

function getContent(apiUrl) {
  fetch(apiUrl)
    .then((resp) => resp.json())
    .then((res) => {
      let mainContent = new Home(res.data.items);
      mainContent.renderMain();
    });
}

getContent(generateApi(fromVal, toVal, cityVal, typeVal, searchVal, sortVal, skipVal, limitVal));

// filter section  display
// !! make a function from these !! do not touch yet
let cityHeading = document.getElementById("city-filter-heading-wrapper");
let cityArrow = document.getElementById("city-filter-arrow");
cityHeading.addEventListener("click", () => {
  cityArrow.classList.toggle("arrow-down");
  cityArrow.classList.toggle("arrow-up");
  document.getElementById("city-filter-form-id").classList.toggle("hidden");
  document
    .getElementById("city-filter-heading-id")
    .classList.toggle("city-filter-heading");
});
let priceHeading = document.getElementById("price-filter-heading-wrapper");
let priceArrow = document.getElementById("price-filter-arrow");
priceHeading.addEventListener("click", () => {
  priceArrow.classList.toggle("arrow-down");
  priceArrow.classList.toggle("arrow-up");
  document.getElementById("price-filter-form-id").classList.toggle("hidden");
  document
    .getElementById("price-filter-heading-id")
    .classList.toggle("price-filter-heading");
});
let buildingHeadin = document.getElementById("build-cond-heading-wrapper");
let buildingArrow = document.getElementById("building-filter-arrow");
buildingHeadin.addEventListener("click", () => {
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
  searchVal = getInputValue();
  getContent(generateApi(fromVal, toVal, cityVal, typeVal, searchVal, sortVal, skipVal, limitVal));
});

let sortField = document.getElementById("price-sort");
sortField.addEventListener("change", () => {
  sortVal = sortField.value;
  getContent(generateApi(fromVal, toVal, cityVal, typeVal, searchVal, sortVal, skipVal, limitVal));
});

let cityCheckBox = document.querySelectorAll(".city");
let tempStrArr = [];

cityCheckBox.forEach((item) => {
  item.addEventListener("click", () => {
    if (item.checked) {
      tempStrArr.push(item.value);
      console.log(tempStrArr);
    } else {
      for (let i = 0; i < tempStrArr.length; i++) {
        if (tempStrArr[i] === item.value) {
          tempStrArr.splice(i, 1);
        }
      }
    }
    cityVal = tempStrArr.join("%2C");
    getContent(generateApi(fromVal, toVal, cityVal, typeVal, searchVal, sortVal, skipVal, limitVal));
  });
});

let priceFilter = document.querySelectorAll(".price");
priceFilter.forEach((item) => {
  item.addEventListener("click", () => {
    console.log(item.value.split("-")[0]);
    if(item.value !== 'ფასები') {
        fromVal = item.value.split("-")[0].trim();
        toVal = item.value.split("-")[1].trim();
    }
    getContent(generateApi(fromVal, toVal, cityVal, typeVal, searchVal, sortVal, skipVal, limitVal));
  });
});

//typeParam
let buildingCheck = document.querySelectorAll(".building");
let buildArr = [];

buildingCheck.forEach((item) => {
  item.addEventListener("click", () => {
    if (item.checked) {
      // excess tab in this case
      if (item.value === "თეთრი კარკასი") {
        buildArr.push("თეთრი+კარკასი%09");
      } else {
        buildArr.push(item.value.split(" ").join("+"));
      }
    } else {
      for (let i = 0; i < buildArr.length; i++) {
        if (
          buildArr[i] === item.value.split(" ").join("+") ||
          buildArr[i] === "თეთრი+კარკასი%09"
        ) {
          buildArr.splice(i, 1);
        }
      }
    }
    typeVal = buildArr.join("%2C");
    getContent(generateApi(fromVal, toVal, cityVal, typeVal, searchVal, sortVal, skipVal, limitVal));
  });
});
