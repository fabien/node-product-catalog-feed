const { assert } = require('chai');
const fs = require('fs');

const {
  ProductPrice,
  ProductShipping
} = require('../index');

describe('ProductShipping arguments validation', () => {
  it('valid data accepted in constructor', () => {
    const actual = new ProductShipping(new ProductPrice(30, 'EUR'));

    assert.instanceOf(actual.price, ProductPrice);
  });

  it('throws error if price is not provided in constructor', () => {
    assert.throws(() => {
      new ProductShipping(6, new Object());
    }, Error);
  });
});
