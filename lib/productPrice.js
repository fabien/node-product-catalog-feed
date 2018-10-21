/* eslint-disable no-underscore-dangle */

/**
 * Defines a price with currency.
 */
class ProductPrice {
  /**
   * Creates an instance of ProductPrice
   * @param {Number} price Numeric price
   * @param {String} currency Currency in ISO 4217 format (e.g. EUR, USD).
   */
  constructor(price, currency) {
    this.price = price;
    this.currency = currency;
  }

  /**
   * Gets a price.
   * @returns {Number}
   */
  get price() {
    return this._price;
  }

  /**
   * Sets a price.
   * @param {Number} value
   */
  set price(value) {
    this._price = value;
  }

  /**
   * Gets a currency.
   * @returns {String}
   */
  get currency() {
    return this._currency;
  }

  /**
   * Sets a currency.
   * @param {String} value Currency in ISO 4217 format (e.g. EUR, USD).
   */
  set currency(value) {
    this._currency = value;
  }
}

module.exports = ProductPrice;
