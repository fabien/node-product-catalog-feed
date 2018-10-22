/* eslint-disable no-underscore-dangle */

/**
 * Defines how many and what type of loyalty points a user receives when buying a product.
 */
class ProductLoyaltyPoints {
  /**
   * Creates an instance of ProductLoyaltyPoints.
   * @param {String} name Name of a loyalty points program
   * @param {Number} pointsValue Number of loyalty points a user receives when purchasing a product
   * @param {Number} ratio A ratio of a point when converted to currency
   */
  constructor(name, pointsValue, ratio) {
    this.name = name;
    this.pointsValue = pointsValue;
    this.ratio = ratio !== undefined ? ratio : 1.0;
  }

  /**
   * Gets a name of a loyalty points program
   * @returns {String}
   */
  get name() {
    return this._name;
  }

  /**
   * Sets a name of a loyalty points program
   * @param {String} value
   */
  set name(value) {
    this._name = value;
  }

  /**
   * Gets a number of loyalty points a user receives when purchasing a product
   * @returns {Number}
   */
  get pointsValue() {
    return this._pointsValue;
  }

  /**
   * Sets a number of loyalty points a user receives when purchasing a product.
   * @param {Number} value
   */
  set pointsValue(value) {
    this._pointsValue = value;
  }

  /**
   * Gets a ratio of a point when converted to currency
   * @returns {Number}
   */
  get ratio() {
    return this._ratio;
  }

  /**
   * Sets a ratio of a point when converted to currency
   * @param {Number} value
   */
  set ratio(value) {
    this._ratio = value;
  }
}

module.exports = ProductLoyaltyPoints;
