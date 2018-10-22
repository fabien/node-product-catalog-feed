const { assert } = require('chai');
const fs = require('fs');

const {
  Product,
  ProductPrice,
  UnitPricingMeasure,
  ProductInstallment,
  ProductDateRange,
  ProductLoyaltyPoints,
  ProductShipping,
  ShippingWeight,
  ShippingDimension,
  ProductTax
} = require('../index');

describe('Product arguments validation', () => {
  it('price throws when assigned an instance of incompatible object.', () => {
    const actual = new Product();

    assert.throws(() => {
      actual.price = new Object();
    }, Error);
  });

  it('price accepts when assigned an instance of Date.', () => {
    const actual = new Product();
    actual.price = new ProductPrice(10, 'EUR');

    assert.instanceOf(actual.price, ProductPrice);
  });

  it('salePrice throws when assigned an instance of incompatible object.', () => {
    const actual = new Product();

    assert.throws(() => {
      actual.salePrice = new Object();
    }, Error);
  });

  it('salePrice accepts when assigned an instance of Date.', () => {
    const actual = new Product();
    actual.salePrice = new ProductPrice(10, 'EUR');

    assert.instanceOf(actual.salePrice, ProductPrice);
  });

  it('costOfGoodsSold throws when assigned an instance of incompatible object.', () => {
    const actual = new Product();

    assert.throws(() => {
      actual.costOfGoodsSold = new Object();
    }, Error);
  });

  it('costOfGoodsSold accepts when assigned an instance of Date.', () => {
    const actual = new Product();
    actual.costOfGoodsSold = new ProductPrice(10, 'EUR');

    assert.instanceOf(actual.costOfGoodsSold, ProductPrice);
  });

  it('availabilityDate throws when assigned an instance of incompatible object.', () => {
    const actual = new Product();

    assert.throws(() => {
      actual.availabilityDate = new Object();
    }, Error);
  });

  it('availabilityDate accepts when assigned an instance of Date.', () => {
    const actual = new Product();
    actual.availabilityDate = new Date('2016-02-24T13:00-0800');

    assert.instanceOf(actual.availabilityDate, Date);
  });

  it('expirationDate throws when assigned an instance of incompatible object.', () => {
    const actual = new Product();

    assert.throws(() => {
      actual.expirationDate = new Object();
    }, Error);
  });

  it('expirationDate accepts when assigned an instance of Date.', () => {
    const actual = new Product();
    actual.expirationDate = new Date('2016-02-24T13:00-0800');

    assert.instanceOf(actual.expirationDate, Date);
  });

  it('salePriceEffectiveDate throws when assigned an instance of incompatible object.', () => {
    const actual = new Product();

    assert.throws(() => {
      actual.salePriceEffectiveDate = new Object();
    }, Error);
  });

  it('salePriceEffectiveDate accepts when assigned an instance of ProductDateRange.', () => {
    const actual = new Product();
    actual.salePriceEffectiveDate = new ProductDateRange(new Date('2016-02-24T13:00-0800'), new Date('2016-02-29T15:30-0800'));

    assert.instanceOf(actual.salePriceEffectiveDate.dateFrom, Date);
    assert.instanceOf(actual.salePriceEffectiveDate.dateTo, Date);
  });

  it('unitPricingMeasure throws when assigned an instance of incompatible object.', () => {
    const actual = new Product();

    assert.throws(() => {
      actual.unitPricingMeasure = new Object();
    }, Error);
  });

  it('unitPricingMeasure accepts when assigned an instance of UnitPricingMeasure.', () => {
    const actual = new Product();
    actual.unitPricingMeasure = new UnitPricingMeasure(100, 'ml');

    assert.instanceOf(actual.unitPricingMeasure, UnitPricingMeasure);
  });

  it('unitPricingBaseMeasure throws when assigned an instance of incompatible object.', () => {
    const actual = new Product();

    assert.throws(() => {
      actual.unitPricingBaseMeasure = new Object();
    }, Error);
  });

  it('unitPricingBaseMeasure accepts when assigned an instance of UnitPricingMeasure.', () => {
    const actual = new Product();
    actual.unitPricingBaseMeasure = new UnitPricingMeasure(100, 'ml');

    assert.instanceOf(actual.unitPricingBaseMeasure, UnitPricingMeasure);
  });

  it('installment throws when assigned an instance of incompatible object.', () => {
    const actual = new Product();

    assert.throws(() => {
      actual.installment = new Object();
    }, Error);
  });

  it('installment accepts when assigned an instance of ProductInstallment.', () => {
    const actual = new Product();
    actual.installment = new ProductInstallment(6, new ProductPrice(10, 'EUR'));

    assert.instanceOf(actual.installment, ProductInstallment);
  });

  it('loyaltyPoints throws when assigned an instance of incompatible object.', () => {
    const actual = new Product();

    assert.throws(() => {
      actual.loyaltyPoints = new Object();
    }, Error);
  });

  it('loyaltyPoints accepts when assigned an instance of ProductLoyaltyPoints.', () => {
    const actual = new Product();
    actual.loyaltyPoints = new ProductLoyaltyPoints('BTC', 10, .8);

    assert.instanceOf(actual.loyaltyPoints, ProductLoyaltyPoints);
  });

  it('shipping throws when assigned an instance of incompatible object.', () => {
    const actual = new Product();

    assert.throws(() => {
      actual.shipping = new Object();
    }, Error);
  });

  it('shipping accepts when assigned an instance of ProductShipping.', () => {
    const actual = new Product();
    actual.shipping = new ProductShipping(new ProductPrice(10, 'EUR'));

    assert.instanceOf(actual.shipping, ProductShipping);
  });

  it('shippingWeight throws when assigned an instance of incompatible object.', () => {
    const actual = new Product();

    assert.throws(() => {
      actual.shippingWeight = new Object();
    }, Error);
  });

  it('shippingWeight accepts when assigned an instance of ShippingWeight.', () => {
    const actual = new Product();
    actual.shippingWeight = new ShippingWeight(20, 'kg');

    assert.instanceOf(actual.shippingWeight, ShippingWeight);
  });

  it('shippingLength throws when assigned an instance of incompatible object.', () => {
    const actual = new Product();

    assert.throws(() => {
      actual.shippingLength = new Object();
    }, Error);
  });

  it('shippingLength accepts when assigned an instance of ShippingDimension.', () => {
    const actual = new Product();
    actual.shippingLength = new ShippingDimension(250, 'cm');

    assert.instanceOf(actual.shippingLength, ShippingDimension);
  });

  it('shippingWidth throws when assigned an instance of incompatible object.', () => {
    const actual = new Product();

    assert.throws(() => {
      actual.shippingWidth = new Object();
    }, Error);
  });

  it('shippingWidth accepts when assigned an instance of ShippingDimension.', () => {
    const actual = new Product();
    actual.shippingWidth = new ShippingDimension(250, 'cm');

    assert.instanceOf(actual.shippingWidth, ShippingDimension);
  });

  it('shippingHeight throws when assigned an instance of incompatible object.', () => {
    const actual = new Product();

    assert.throws(() => {
      actual.shippingHeight = new Object();
    }, Error);
  });

  it('shippingHeight accepts when assigned an instance of ShippingDimension.', () => {
    const actual = new Product();
    actual.shippingHeight = new ShippingDimension(250, 'cm');

    assert.instanceOf(actual.shippingHeight, ShippingDimension);
  });

  it('tax throws when assigned an instance of incompatible object.', () => {
    const actual = new Product();

    assert.throws(() => {
      actual.tax = new Object();
    }, Error);
  });

  it('tax accepts when assigned an instance of ProductTax.', () => {
    const actual = new Product();
    actual.tax = new ProductTax();

    assert.instanceOf(actual.tax, ProductTax);
  });
});