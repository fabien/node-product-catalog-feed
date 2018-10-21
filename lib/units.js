/* eslint-disable no-underscore-dangle */

/**
 * Defines a base class for a value-unit pair.
 */
class ValueUnit {
  /**
   * Creates an instance of a value-unit class.
   * @param {Number} value Numeric value
   * @param {String} unit Unit name. e.g. kg, ml.
   */
  constructor(value, unit) {
    this.value = value;
    this.unit = unit;
  }

  /**
   * Gets a numeric value
   * @returns {Number}
   */
  get value() {
    return this._val;
  }

  /**
   * Sets a numeric value
   * @param {Number} value
   */
  set value(value) {
    this._val = value;
  }

  /**
   * Gets a unit name.
   * @returns {String}
   */
  get unit() {
    return this._unit;
  }

  /**
   * Sets a unit name.
   * @param {String} value
   */
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
  ShippingDimension,
};
