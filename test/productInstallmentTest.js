const { assert } = require('chai');
const fs = require('fs');

const {
  ProductPrice,
  ProductInstallment
} = require('../index');

describe('ProductInstallment arguments validation', () => {
  it('valid data accepted in constructor', () => {
    const actual = new ProductInstallment(6, new ProductPrice(30, 'EUR'));

    assert.equal(actual.months, 6);
    assert.instanceOf(actual.amount, ProductPrice);
  });

  it('throws error if price is not provided in constructor', () => {
    assert.throws(() => {
      new ProductInstallment(6, new Object());
    }, Error);
  });
});
