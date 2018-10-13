# node-product-catalog-feed

A framework to generate product catalog feed according to Google Merchant Product Data Deed specification and Facebook Business Product Data Catalog Feed.

[![Build Status](https://travis-ci.org/alx17/node-product-catalog-feed.svg?branch=master)](https://travis-ci.org/alx17/node-product-catalog-feed)

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Installing
```
npm install node-product-catalog-feed
```

### Using

Here is an example of how a product feed can be generated.

```JavaScript
const { Product, ProductPrice, FeedBuilder } = require('node-product-catalog-feed');

const modelX = new Product();
modelX.id = 'id-model-x';
modelX.title = 'Model X';
modelX.brand = 'Tesla';
modelX.condition = Product.CONDITION.NEW;
modelX.availability = Product.AVAILABILITY.PREORDER;
modelX.price = new ProductPrice(71300, 'USD');

const modelS = new Product();
modelS.id = 'id-model-s';
modelS.title = 'Model S';
modelS.brand = 'Tesla';
modelS.condition = Product.CONDITION.NEW;
modelS.availability = Product.AVAILABILITY.IN_STOCK;
modelS.price = new ProductPrice(65200, 'USD');

const xml = new FeedBuilder()
  .withTitle('Cars')
  .withLink('https://www.example.com')
  .withDescription('My cars')
  .withProduct(modelX)
  .withProduct(modelS)
  .buildXml();
```

### Generated feed example
```XML
<?xml version="1.0" encoding="utf-8"?>
<rss xmlns:g="http://base.google.com/ns/1.0" version="2.0">
  <channel>
    <title>Cars</title>
    <link>https://www.example.com</link>
    <description>My cars</description>
    <item>
      <g:id>id-model-x</g:id>
      <title>Model X</title>
      <g:availability>preorder</g:availability>
      <g:price>71300.00 USD</g:price>
      <g:brand>Tesla</g:brand>
      <g:condition>new</g:condition>
    </item>
    <item>
      <g:id>id-model-s</g:id>
      <title>Model S</title>
      <g:availability>in stock</g:availability>
      <g:price>65200.00 USD</g:price>
      <g:brand>Tesla</g:brand>
      <g:condition>new</g:condition>
    </item>
  </channel>
</rss>
```

## Running the tests
```
npm test
```

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.