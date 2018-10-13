class ProductTax {
  get rate() {
    return this._rate;
  }

  set rate(value) {
    this._rate = value;
  }

  get country() {
    return this._country;
  }

  set country(value) {
    this._country = value;
  }

  get taxShip() {
    return this._taxShip;
  }

  set taxShip(value) {
    this._taxShip = value; 
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
}

module.exports = ProductTax;