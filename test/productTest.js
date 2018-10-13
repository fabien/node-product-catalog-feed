var assert = require('assert');
var { Product } = require('../lib/product');

describe('Product', function () {
  describe('getters', function () {
    it('gets/sets id', function () {
      const product = new Product();
      product.id = 100;

      assert.equal(product.id, 100);
    });
  });
});
