/* eslint-disable no-underscore-dangle */

class ProductPrice {
  constructor(price, currency) {
    this.price = price;
    this.currency = currency;
  }

  get price() {
    return this._price;
  }

  set price(value) {
    this._price = value;
  }

  get currency() {
    return this._currency;
  }

  set currency(value) {
    this._currency = value;
  }
}

module.exports = ProductPrice;
