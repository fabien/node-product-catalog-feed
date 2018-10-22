const { assert } = require('chai');
const fs = require('fs');

const {
  ProductLoyaltyPoints
} = require('../index');

describe('ProductLoyaltyPoints arguments validation', () => {
  it('valid data accepted in constructor', () => {
    const actual = new ProductLoyaltyPoints('BTC', 10, .5);

    assert.equal(actual.name, 'BTC');
    assert.equal(actual.pointsValue, 10);
    assert.equal(actual.ratio, .5);
  });

  it('default ratio is set when not specified in constructor', () => {
    const actual = new ProductLoyaltyPoints('BTC', 10);

    assert.equal(actual.ratio, 1.0);
  });
});
