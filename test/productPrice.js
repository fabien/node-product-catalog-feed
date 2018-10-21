const { assert } = require('chai');
const fs = require('fs');

const {
  ProductPrice
} = require('../index');

describe('ProductPrice arguments validation', () => {
  it('valid price and currency accepted in constructor', () => {
    const price = new ProductPrice(10, 'EUR');

    assert.equal(price.price, 10);
    assert.equal(price.currency, 'EUR');
  });
});

