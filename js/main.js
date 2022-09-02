import { Home } from "./modules/home.js";
import { myObject } from "./common/config.js";
let homePage = new Home();
homePage.render();

fetch(
  "https://solo.ge/api/developers/items/common/608aaad7ae3b47ff23daa433?skip=0&limit=9"
)
  .then((resp) => resp.json())
  .then((res) => {
    console.log(res.data.items)
    let mainContent = new Home(res.data.items);

    mainContent.renderMain();
  });

  

// let myApi = 'https://mocki.io/v1/be185936-09b7-4a9d-a1d6-cfab28941003'

//'https://mocki.io/v1/a17138de-3164-48ab-b7dc-1468aecf2bd4'
//big = https://mocki.io/v1/be185936-09b7-4a9d-a1d6-cfab28941003

// myApi = JSON.stringify(myApi);

// fetch('https://solo.ge/api/developers/items/common/608aaad7ae3b47ff23daa433?fromParam=2000&toParam=2500&skip=0&limit=9').then(response => response.json())
//   .then(data => console.log(data));

//   fetch('https://mocki.io/v1/a17138de-3164-48ab-b7dc-1468aecf2bd4')
//   .then((resp) => resp.json())
//   .then((res) => {
//     console.log(res.data.items);
//   });
