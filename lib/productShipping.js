/* eslint-disable no-underscore-dangle */

class ProductShipping {
  constructor(price) {
    this.price = price;
  }

  get country() {
    return this._country;
  }

  set country(value) {
    this._country = value;
  }

  get region() {
    return this._region;
  }

  set region(value) {
    this._region = value;
  }

  get postalCode() {
    return this._postalCode;
  }

  set postalCode(value) {
    this.postalCode = value;
  }

  get locationId() {
    return this._locationId;
  }

  set locationId(value) {
    this._locationId = value;
  }

  get locationGroupName() {
    return this._locationGroupName;
  }

  set locationGroupName(value) {
    this._locationGroupName = value;
  }

  get service() {
    return this._service;
  }

  set service(value) {
    this._service = value;
  }

  get price() {
    return this._price;
  }

  set price(value) {
    this._price = value;
  }
}

module.exports = ProductShipping;
