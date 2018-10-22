const { assert } = require('chai');
const fs = require('fs');

const {
  ProductTax
} = require('../index');

describe('ProductTax arguments validation', () => {
  it('valid data accepted', () => {
    const actual = new ProductTax();
    actual.country = 'US';
    actual.region = 'MA';
    actual.rate = 5.00;
    actual.taxShip = true;

    assert.equal(actual.country, 'US');
    assert.equal(actual.region, 'MA');
    assert.equal(actual.rate, 5.00);
    assert.equal(actual.taxShip, true);
  });
});
