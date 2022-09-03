import { Base } from "../common/base.js";
import { myObject } from "../common/config.js";

export class Home extends Base {
  constructor(appJSON) {
    super();
    this.appJSON = appJSON;
  }

  _getUpperNavBar(arr) {
    let navContent = `<li><a id="solo-nav-tab" href="">SOLO</a></li>`;
    navContent += arr
      .map((item) => {
        return `<li><a href="">${item}</a></li>`;
      })
      .join(" ");
    return navContent;
  }

  _getLowerNavBar(arr) {
    return arr
      .map((item) => {
        return `<li><a href="">${item}</a></li>`;
      })
      .join(" ");
  }

  _getCityFilter(arr) {
    return arr
      .map((item, index) => {
        return `
      <div class="city-filter-checkbox">
          <input
            type="checkbox"
            id="city${index}"
            name="city${index}"
            value="${item}"
            class="mark"
          />
          <label for="city${index}" class="city-label">${item}</label>
        </div>
      `;
      })
      .join(" ");
  }

  _getPriceFilter(arr) {
    return arr
      .map((item, index) => {
        return `
        <div class="price-filter-radio">
          <input type="radio" id="price${index}" name="price" value="${item[0]}-${item[1]}" class="mark"/>
          <label for="price${index}" class="price-label">${item[0]} - ${item[1]}</label>
        </div>
        `;
      })
      .join(" ");
  }

  _getBuildingFilter(arr) {
    return arr
      .map((item, index) => {
        return `
        <div class="building-cond-checkbox">
          <input
            type="checkbox"
            id="city${index}"
            name="city${index}"
            value="${item}"
            class="mark"
          />
          <label for="city${index}" class="building-cond-label">
          ${item}</label
          >
        </div>
      `;
      })
      .join(" ");
  }

  _getMainContent() {
    return this.appJSON.map((obj, index) => {
      return `
        <div class="result-item-wrapper">
          <div
          class="result-img"
          style="background-image: url(https://ramad.bog.ge/s3/solo/${obj.image.url}); "
          >
          </div>
          <div class="result-lower-wrap">
            <h4 class="offer-heading">${obj.developer}</h4>
            <p class="offer-description">
              ${obj.priceLabel}
            </p>
            <div class="offer-location">${obj.address}</div>
            <div class="result-learn-more">
              <a href="">გაიგეთ მეტი</a>
            </div>
          </div>
        </div>
      `;
    }).join(' ');
  }

  render() {
    this.setContent("upper-nav-id", this._getUpperNavBar(myObject.upperNavArr));
    this.setContent("lower-nav-id", this._getLowerNavBar(myObject.lowerNavArr));
    this.setContent(
      "city-filter-form-id",
      this._getCityFilter(myObject.filterCityArr)
    );
    this.setContent(
      "price-filter-form-id",
      this._getPriceFilter(myObject.filterPriceArr)
    );
    this.setContent(
      "building-filter-form-id",
      this._getBuildingFilter(myObject.filterBuildingArr)
    );
  }

  renderMain() {
    this.setContent('main-content-id', this._getMainContent())
  }
}
