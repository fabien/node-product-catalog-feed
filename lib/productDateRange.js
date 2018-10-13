/* eslint-disable no-underscore-dangle */

class ProductDateRange {
  constructor(dateFrom, dateTo) {
    this.dateFrom = dateFrom;
    this.dateTo = dateTo;
  }

  get dateFrom() {
    return this._dateFrom;
  }

  set dateFrom(value) {
    this._dateFrom = value;
  }

  get dateTo() {
    return this._dateTo;
  }

  set dateTo(value) {
    this._dateTo = value;
  }
}

module.exports = ProductDateRange;
