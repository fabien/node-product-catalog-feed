const { assert } = require('chai');
const fs = require('fs');

const {
  ProductDateRange
} = require('../index');

describe('ProductDateRange arguments validation', () => {
  it('dateFrom throws when assigned an instance of incompatible object.', () => {
    assert.throws(() => {
      new ProductDateRange({}, new Date('2016-02-29T15:30-0800'));
    }, Error);
  });

  it('dateFrom accepts when assigned an instance of a Date object.', () => {
    const actual = new ProductDateRange(new Date('2016-02-24T13:00-0800'), new Date('2016-02-29T15:30-0800'));

    assert.equal(actual.dateFrom.toISOString(), '2016-02-24T21:00:00.000Z');
  });

  it('dateTo throws when assigned an instance of incompatible object.', () => {
    assert.throws(() => {
      new ProductDateRange(new Date('2016-02-24T13:00-0800'), {});
    }, Error);
  });

  it('dateTo accepts when assigned an instance of a Date object.', () => {
    const actual = new ProductDateRange(new Date('2016-02-24T13:00-0800'), new Date('2016-02-29T15:30-0800'));

    assert.equal(actual.dateTo.toISOString(), '2016-02-29T23:30:00.000Z');
  });
});