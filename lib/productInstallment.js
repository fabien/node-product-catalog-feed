class ProductInstallment {
  constructor(months, amount) {
    this.months = months;
    this.amount = amount;
  }

  get months() {
    return this._months;
  }

  set months(value) {
    this._months = value;
  }

  get amount() {
    return this._amount;
  }

  set amount(value) {
    this._amount = value;
  }
}

module.exports = ProductInstallment;