/* eslint-disable no-underscore-dangle */
const ProductPrice = require('./productPrice');

/**
 * Defines product shipping information.
 */
class ProductShipping {
  /**
   * Creates an instance of ProductShipping class.
   * @param {ProductPrice} price Shipping cost
   */
  constructor(price) {
    this.price = price;
  }

  /**
   * Gets a country that an item can be delivered to.
   * Must be an ISO 3166-1 country code (e.g., CH).
   * @returns {String}
   */
  get country() {
    return this._country;
  }

  /**
   * Sets a country that an item can be delivered to.
   * Must be an ISO 3166-1 country code (e.g., CH).
   * @param {String} value Country code
   */
  set country(value) {
    this._country = value;
  }

  /**
   * Gets a state, territory, or prefecture.
   * Must be an ISO 3166-1 country code without country prefix (e.g., CA, NSW, 03)
   * @returns {String}
   */
  get region() {
    return this._region;
  }

  /**
   * Sets a state, territory, or prefecture.
   * Must be an ISO 3166-1 country code without country prefix (e.g., CA, NSW, 03)
   * @param {String} value Country code without country prefix
   */
  set region(value) {
    this._region = value;
  }

  /**
   * Gets a postal code or postal code range.
   * @returns {String}
   */
  get postalCode() {
    return this._postalCode;
  }

  /**
   * Sets a postal code or postal code range.
   * @param {String} value
   */
  set postalCode(value) {
    this.postalCode = value;
  }

  /**
   * Gets a numeric criteria ID of a location defined by Google Ads API.
   * @returns {String}
   */
  get locationId() {
    return this._locationId;
  }

  /**
   * Sets a numeric criteria ID of a location defined by Google Ads API.
   * @param {String} value
   */
  set locationId(value) {
    this._locationId = value;
  }

  /**
   * Gets a location group that can be set up hrough Merchant Center settings.
   * @returns {String}
   */
  get locationGroupName() {
    return this._locationGroupName;
  }

  /**
   * Sets a location group that can be set up hrough Merchant Center settings.
   * @returns {String}
   */
  set locationGroupName(value) {
    this._locationGroupName = value;
  }

  /**
   * Gets a service class or shipping speed.
   * @returns {String}
   */
  get service() {
    return this._service;
  }

  /**
   * Sets a service class or shipping speed.
   * @param {String} value
   */
  set service(value) {
    this._service = value;
  }

  /**
   * Gets a shipping cost.
   * @returns {ProductPrice}
   */
  get price() {
    return this._price;
  }

  /**
   * Sets a shipping cost.
   * @param {ProductPrice} value
   */
  set price(value) {
    if (!(value instanceof ProductPrice)) {
      throw new Error('price expects instance of ProductPrice as argument.');
    }
    this._price = value;
  }
}

module.exports = ProductShipping;
