class ProductLoyaltyPoints {
  constructor(name, pointsValue, ratio) {
    this.name = name;
    this.pointsValue = pointsValue;
    this.ratio = ratio;
  }

  get name() {
    return this._name;
  }

  set name(value) {
    this._name = value;
  }

  get pointsValue() {
    return this._pointsValue;
  }

  set pointsValue(value) {
    this._pointsValue = value;
  }

  get ratio() {
    return this._ratio;
  }

  set ratio(value) {
    this._ratio = value;
  }
}

module.exports = ProductLoyaltyPoints;