module.exports.Product = require('./lib/product');
module.exports.ProductPrice = require('./lib/productPrice');
module.exports.ProductInstallment = require('./lib/productInstallment');
module.exports.ProductDateRange = require('./lib/productDateRange');
module.exports.ProductLoyaltyPoints = require('./lib/productLoyaltyPoints');
module.exports.ProductShipping = require('./lib/productShipping');
module.exports.ProductTax = require('./lib/productTax');
module.exports.FeedBuilder = require('./lib/feedBuilder');

Object.assign(module.exports, require('./lib/units'));