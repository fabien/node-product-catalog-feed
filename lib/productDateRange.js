/* eslint-disable no-underscore-dangle */

/**
 * Defines a date range when an offer for an item is valid.
 */
class ProductDateRange {
  /**
   * Creates an instance of ProductDateRange.
   * @param {Date} dateFrom A date when an item becomes valid.
   * @param {Date} dateTo A date after when an item is not valid.
   */
  constructor(dateFrom, dateTo) {
    this.dateFrom = dateFrom;
    this.dateTo = dateTo;
  }

  /**
   * Gets a date when an item becomes valid.
   *
   * @returns {Date}
   */
  get dateFrom() {
    return this._dateFrom;
  }

  /**
   * Sets a date when an item becomes valid.
   *
   * @param {Date} value
   */
  set dateFrom(value) {
    if (!(value instanceof Date)) {
      throw new Error('dateFrom expects instance of Date as argument.');
    }

    this._dateFrom = value;
  }

  /**
   * Gets a date after when an item is not valid.
   *
   * @returns {Date}
   */
  get dateTo() {
    return this._dateTo;
  }

  /**
   * Sets a date after when an item is not valid.
   *
   * @param {Date} value
   */
  set dateTo(value) {
    if (!(value instanceof Date)) {
      throw new Error('dateTo expects instance of Date as argument.');
    }

    this._dateTo = value;
  }
}

module.exports = ProductDateRange;
