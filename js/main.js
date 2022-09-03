import { Home } from "./modules/home.js";
import { myObject } from "./common/config.js";
let homePage = new Home();

// render mark-up dynamicly
homePage.render();

// set main content
fetch(`${myObject.baseUrl}&skip=0&limit=9`)
  .then((resp) => resp.json())
  .then((res) => {
    let mainContent = new Home(res.data.items);
    mainContent.renderMain();
  });

// filter section  display
// !! make a function from these
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
  fetch(`${myObject.baseUrl}searchStr=${getInputValue()}&skip=0&limit=9`)
    .then((resp) => resp.json())
    .then((res) => {
      let mainContent = new Home(res.data.items);
      //   console.log(res.data.items.length)
      mainContent.renderMain();
    });
});

// sort function
let sortField = document.getElementById("price-sort");
sortField.addEventListener("change", () => {
  console.log(sortField.value);
  fetch(`${myObject.baseUrl}sortBy=${sortField.value}&skip=0&limit=9`)
    .then((resp) => resp.json())
    .then((res) => {
      let mainContent = new Home(res.data.items);
      //   console.log(res.data.items.length)
      mainContent.renderMain();
    });
});

// get checked item
function checkBox(id) {
  console.log(document.getElementById(id));
  document.getElementById(id).setAttribute("checked", "checked"); //.checked = true;
  console.log(document.getElementById(id));
}

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
    console.log(tempStrArr.join(""));
    fetch(`${myObject.baseUrl}cityParam=${tempStrArr.join("%2C")}&skip=0`)
      .then((resp) => resp.json())
      .then((res) => {
        let mainContent = new Home(res.data.items);
        mainContent.renderMain();
      });
  });
});

// fromParam - toParam
let priceFilter = document.querySelectorAll(".price");
console.log(priceFilter);
priceFilter.forEach((item) => {
  item.addEventListener("click", () => {
    console.log(item.value.split("-")[0]);
    fetch(
      `${myObject.baseUrl}fromParam=${item.value
        .split("-")[0]
        .trim()}&toParam=${item.value.split("-")[1].trim()}&skip=0`
    )
      .then((resp) => resp.json())
      .then((res) => {
        let mainContent = new Home(res.data.items);
        mainContent.renderMain();
      });
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
    fetch(`${myObject.baseUrl}typeParam=${buildArr.join("%2C")}&skip=0`)
      .then((resp) => resp.json())
      .then((res) => {
        let mainContent = new Home(res.data.items);
        mainContent.renderMain();
      });
  });
});
