import { Home } from "./modules/home.js";
import { generateApi } from "./common/config.js";

// api param default values
let fromVal = "";
let toVal = "";
let cityVal = "";
let typeVal = "";
let searchVal = "";
let sortVal = "";

let searchField = document.querySelector(".search-input");
let sortField = document.getElementById("price-sort");
let cityCheckArr = [];
let buildArr = [];

// display filter
function changeFilterDisplay(clickId, arrow, formId, headingId, heading) {
  document.getElementById(clickId).addEventListener("click", () => {
    document.getElementById(arrow).classList.toggle("arrow-down");
    document.getElementById(arrow).classList.toggle("arrow-up");
    document.getElementById(formId).classList.toggle("hidden");
    document.getElementById(headingId).classList.toggle(heading);
  });
}

// render main content
function getContent(apiUrl) {
  fetch(apiUrl)
    .then((resp) => resp.json())
    .then((res) => {
      let mainContent = new Home(res.data.items);
      mainContent.renderMain();
    });
}

// render mark-up dynamicly
let homePage = new Home();
homePage.render();

// set main content
getContent(generateApi(fromVal, toVal, cityVal, typeVal, searchVal, sortVal));

// city filter display
changeFilterDisplay(
  "city-filter-heading-wrapper",
  "city-filter-arrow",
  "city-filter-form-id",
  "city-filter-heading-id",
  "city-filter-heading"
);

// price filter display
changeFilterDisplay(
  "price-filter-heading-wrapper",
  "price-filter-arrow",
  "price-filter-form-id",
  "price-filter-heading-id",
  "price-filter-heading"
);

// building type filter display
changeFilterDisplay(
  "build-cond-heading-wrapper",
  "building-filter-arrow",
  "building-filter-form-id",
  "building-cond-heading-id",
  "building-cond-heading"
);

// search
searchField.addEventListener("keyup", () => {
  searchVal = searchField.value;
  getContent(generateApi(fromVal, toVal, cityVal, typeVal, searchVal, sortVal));
});

// sort asc/desc
sortField.addEventListener("change", () => {
  sortVal = sortField.value;
  getContent(generateApi(fromVal, toVal, cityVal, typeVal, searchVal, sortVal));
});

// filter by city
document.querySelectorAll(".city").forEach((item) => {
  item.addEventListener("click", () => {
    if (item.checked) {
      cityCheckArr.push(item.value);
    } else {
      for (let i = 0; i < cityCheckArr.length; i++) {
        if (cityCheckArr[i] === item.value) {
          cityCheckArr.splice(i, 1);
        }
      }
    }
    cityVal = cityCheckArr.join("%2C");
    console;
    getContent(
      generateApi(fromVal, toVal, cityVal, typeVal, searchVal, sortVal)
    );
  });
});

// filter by price
document.querySelectorAll(".price").forEach((item) => {
  item.addEventListener("click", () => {
    if (item.value !== "ფასები") {
      fromVal = item.value.split("-")[0].trim();
      toVal = item.value.split("-")[1].trim();
    } else {
      fromVal = "";
      toVal = "";
    }
    getContent(
      generateApi(fromVal, toVal, cityVal, typeVal, searchVal, sortVal)
    );
  });
});

// filter by building condition
document.querySelectorAll(".building").forEach((item) => {
  item.addEventListener("click", () => {
    if (item.checked) {
      //  excess tab in api for this value
      item.value === "თეთრი კარკასი"
        ? buildArr.push("თეთრი+კარკასი%09")
        : buildArr.push(item.value.split(" ").join("+"));
    } else {
      for (let i = 0; i < buildArr.length; i++) {
        if (
          buildArr[i] === item.value.split(" ").join("+") ||
          buildArr[i] === "თეთრი+კარკასი%09"
        )
          buildArr.splice(i, 1);
      }
    }
    typeVal = buildArr.join("%2C");
    getContent(
      generateApi(fromVal, toVal, cityVal, typeVal, searchVal, sortVal)
    );
  });
});
