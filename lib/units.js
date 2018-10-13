class ValueUnit {
  constructor(value, unit) {
    this.value = value;
    this.unit = unit;
  }

  get value() {
    return this._val;
  }

  set value(value) {
    this._val = value;
  }

  get unit() {
    return this._unit;
  }

  set unit(value) {
    this._unit = value;
  }
}

class UnitPricingMeasure extends ValueUnit { }

class ShippingWeight extends ValueUnit { }

class ShippingDimension extends ValueUnit {}

module.exports = {
  ValueUnit,
  UnitPricingMeasure,
  ShippingWeight,
  ShippingDimension
};