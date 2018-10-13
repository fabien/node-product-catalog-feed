# node-product-catalog-feed
A framework to generate product catalog feed according to Google Merchant Product Data Deed specification and Facebook Business Product Data Catalog Feed.

### Install
```
npm install node-product-catalog-feed
```

### Usage

```
var product1 = new Product();
product1.id = 'tddy123uk';
product1.title = 'Google Organic Cotton Men\'s T-Shirt - Blue - M';
product1.description = 'These pens feature a generous grip for comfortable writing and a retractable ballpoint.';
product1.link = 'http://www.example.com/writing/google-pens';
product1.imageLink = 'http://www.example.com/image1.jpg';
product1.mobileLink = 'http://www.m.example.com/writing/fiji-pens';
product1.additionalImageLink = 'http://www.example.com/image2.jpg';
product1.availability = Product.AVAILABILITY.IN_STOCK;
product1.availabilityDate = new Date('2016-11-25T13:00-0800');
product1.expirationDate = new Date('2016-02-24');
product1.price = new ProductPrice(15, 'USD');
product1.salePrice = new ProductPrice(10, 'USD');
product1.salePriceEffectiveDate = new ProductDateRange(new Date('2016-02-24T13:00-0800'), new Date('2016-02-29T15:30-0800'));
product1.costOfGoodsSold = new ProductPrice(10.01, 'USD');
product1.unitPricingMeasure = new UnitPricingMeasure(750, 'ml');
product1.unitPricingBaseMeasure = new UnitPricingMeasure(100, 'oz');
product1.installment = new ProductInstallment(6, new ProductPrice(50, 'BRL'));
product1.loyaltyPoints = new ProductLoyaltyPoints('Program A', 100, 1.0);
product1.googleProductCategory = '2271';
product1.productType = 'Home > Dresses > Maxi Dresses';
product1.brand = 'Google';
product1.gtin = 3234567890126;
product1.mpn = 'GO12345OOGLE';
product1.identifierExists = false;
product1.condition = Product.CONDITION.USED;
product1.adult = true;
product1.multipack = 6;
product1.isBundle = true;
product1.energyEfficiencyClass = 'A+';
product1.minEnergyEfficiencyClass = 'A';
product1.maxEnergyEfficiencyClass = 'D';
product1.ageGroup = Product.AGE_GROUP.ADULT;
product1.color = 'Orange Mango Explosion';
product1.gender = Product.GENDER.MALE;
product1.material = 'Leather';
product1.pattern = 'Striped';
product1.size = 'XL';
product1.sizeType = Product.SIZE_TYPE.PETITE;
product1.sizeSystem = Product.SIZE_SYSTEM.US;
product1.itemGroupId = 'AB12345';
product1.adwordsRedirect = 'http://tracking.example.com?product=ballpoint-pens';
product1.customLabels[0] = 'summer';
product1.customLabels[2] = 'spring';
product1.customLabels[4] = 'winter';
product1.promotionId = 'tbby123_us';
product1.includedDestination = Product.ADS_DESTINATION.DISPLAY_ADS;
product1.excludedDestination = [Product.ADS_DESTINATION.SHOPPING, Product.ADS_DESTINATION.DISPLAY_ADS];

const product1Shipping1 = new ProductShipping(new ProductPrice(6.49, 'USD'));
product1Shipping1.country = 'US';
product1Shipping1.region = 'MA';
product1Shipping1.service = 'Ground';

const product1Shipping2 = new ProductShipping(new ProductPrice(15.99, 'USD'));
product1Shipping2.country = 'US';
product1Shipping2.region = 'MA';
product1Shipping2.service = 'Express';

product1.shipping = [product1Shipping1, product1Shipping2];
product1.shippingLabel = 'oversized';
product1.shippingWeight = new ShippingWeight(3, 'kg');
product1.shippingLength = new ShippingDimension(20, 'in');
product1.shippingWidth = new ShippingDimension(40, 'in');
product1.shippingHeight = new ShippingDimension(10, 'in');
product1.minHandlingTime = 1;
product1.maxHandlingTime = 3;

const product1Tax1 = new ProductTax();
product1Tax1.country = 'US';
product1Tax1.region = 'MA';
product1Tax1.rate = 5.00;
product1Tax1.taxShip = true;

const product1Tax2 = new ProductTax();
product1Tax2.country = 'US';
product1Tax2.region = 'WA';
product1Tax2.rate = 4;
product1Tax2.taxShip = false;

product1.tax = [product1Tax1, product1Tax2];
product1.taxCategory = 'apparel';

const xml = new FeedBuilder()
  .withTitle('Test title')
  .withLink('https://www.example.com')
  .withDescription('Sample description')
  .withProduct(product1)
  .buildXml();
```

### Generated feed example
```
<?xml version="1.0" encoding="utf-8"?>
<rss xmlns:g="http://base.google.com/ns/1.0" version="2.0">
  <channel>
    <title>Test title</title>
    <link>https://www.example.com</link>
    <description>Sample description</description>
    <item>
      <g:id>tddy123uk</g:id>
      <title>Google Organic Cotton Men's T-Shirt - Blue - M</title>
      <g:description>These pens feature a generous grip for comfortable writing and a retractable ballpoint.</g:description>
      <link>http://www.example.com/writing/google-pens</link>
      <g:image_link>http://www.example.com/image1.jpg</g:image_link>
      <g:mobile_link>http://www.m.example.com/writing/fiji-pens</g:mobile_link>
      <g:additional_image_link>http://www.example.com/image2.jpg</g:additional_image_link>
      <g:availability>in stock</g:availability>
      <g:availability_date>2016-11-25T21:00:00.000Z</g:availability_date>
      <g:expiration_date>2016-02-24T00:00:00.000Z</g:expiration_date>
      <g:price>15.00 USD</g:price>
      <g:sale_price>10.00 USD</g:sale_price>
      <g:sale_price_effective_date>2016-02-24T21:00:00.000Z/2016-02-29T23:30:00.000Z</g:sale_price_effective_date>
      <g:cost_of_goods_sold>10.01 USD</g:cost_of_goods_sold>
      <g:unit_pricing_measure>750ml</g:unit_pricing_measure>
      <g:unit_pricing_base_measure>100oz</g:unit_pricing_base_measure>
      <g:installment>
        <g:months>6</g:months>
        <g:amount>50.00 BRL</g:amount>
      </g:installment>
      <g:loyalty_points>
        <g:name>Program A</g:name>
        <g:points_value>100</g:points_value>
        <g:ratio>1.0</g:ratio>
      </g:loyalty_points>
      <g:google_product_category>2271</g:google_product_category>
      <g:product_type>Home &gt; Dresses &gt; Maxi Dresses</g:product_type>
      <g:brand>Google</g:brand>
      <g:gtin>3234567890126</g:gtin>
      <g:mpn>GO12345OOGLE</g:mpn>
      <g:identifier_exists>false</g:identifier_exists>
      <g:condition>used</g:condition>
      <g:adult>true</g:adult>
      <g:multipack>6</g:multipack>
      <g:is_bundle>true</g:is_bundle>
      <g:energy_efficiency_class>A+</g:energy_efficiency_class>
      <g:min_energy_efficiency_class>A</g:min_energy_efficiency_class>
      <g:max_energy_efficiency_class>D</g:max_energy_efficiency_class>
      <g:age_group>adult</g:age_group>
      <g:color>Orange Mango Explosion</g:color>
      <g:gender>male</g:gender>
      <g:material>Leather</g:material>
      <g:pattern>Striped</g:pattern>
      <g:size>XL</g:size>
      <g:size_type>petite</g:size_type>
      <g:size_system>US</g:size_system>
      <g:item_group_id>AB12345</g:item_group_id>
      <g:ads_redirect>http://tracking.example.com?product=ballpoint-pens</g:ads_redirect>
      <g:custom_label_0>summer</g:custom_label_0>
      <g:custom_label_2>spring</g:custom_label_2>
      <g:custom_label_4>winter</g:custom_label_4>
      <g:promotion_id>tbby123_us</g:promotion_id>
      <g:included_destination>DisplayAds</g:included_destination>
      <g:excluded_destination>Shopping</g:excluded_destination>
      <g:excluded_destination>DisplayAds</g:excluded_destination>
      <g:shipping>
        <g:country>US</g:country>
        <g:region>MA</g:region>
        <g:service>Ground</g:service>
        <g:price>6.49 USD</g:price>
      </g:shipping>
      <g:shipping>
        <g:country>US</g:country>
        <g:region>MA</g:region>
        <g:service>Express</g:service>
        <g:price>15.99 USD</g:price>
      </g:shipping>
      <g:shipping_label>oversized</g:shipping_label>
      <g:shipping_weight>3 kg</g:shipping_weight>
      <g:shipping_length>20 in</g:shipping_length>
      <g:shipping_width>40 in</g:shipping_width>
      <g:shipping_height>10 in</g:shipping_height>
      <g:min_handling_time>1</g:min_handling_time>
      <g:max_handling_time>3</g:max_handling_time>
      <g:tax>
        <g:country>US</g:country>
        <g:region>MA</g:region>
        <g:rate>5.00</g:rate>
        <g:tax_ship>yes</g:tax_ship>
      </g:tax>
      <g:tax>
        <g:country>US</g:country>
        <g:region>WA</g:region>
        <g:rate>4.00</g:rate>
        <g:tax_ship>no</g:tax_ship>
      </g:tax>
      <g:tax_category>apparel</g:tax_category>
    </item>
  </channel>
</rss>
```