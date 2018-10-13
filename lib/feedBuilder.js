const xmlbuilder = require('xmlbuilder');

const { Product } = require('./product');

const xmlPropertiesMap = {
  id: 'g:id',
  title: 'title',
  description: 'g:description',
  link: 'link',
  imageLink: 'g:image_link',
  mobileLink: 'g:mobile_link',
  additionalImageLink: 'g:additional_image_link',
  availability: 'g:availability',
  availabilityDate: 'g:availability_date',
  // TODO: Check format
  // TODO: error in spec
  expirationDate: 'g:expiration_date',
  price: 'g:price',
  salePrice: 'g:sale_price',
  salePriceEffectiveDate: 'g:sale_price_effective_date',
  costOfGoodsSold: 'g:cost_of_goods_sold',
  unitPricingMeasure: 'g:unit_pricing_measure',
  unitPricingBaseMeasure: 'g:unit_pricing_base_measure',
  // TODO: error in spec
  installment: 'g:installment',
  loyaltyPoints: 'g:loyalty_points',
  googleProductCategory: 'g:google_product_category',
  productType: 'g:product_type',
  brand: 'g:brand',
  gtin: 'g:gtin',
  mpn: 'g:mpn',
  // TODO: Check format
  identifierExists: 'g:identifier_exists',
  condition: 'g:condition',
  // TODO: Check format
  adult: 'g:adult',
  multipack: 'g:multipack',
  isBundle: 'g:is_bundle',
  energyEfficiencyClass: 'g:energy_efficiency_class',
  // TODO: error in spec
  minEnergyEfficiencyClass: 'g:min_energy_efficiency_class',
  maxEnergyEfficiencyClass: 'g:max_energy_efficiency_class',
  ageGroup: 'g:age_group',
  color: 'g:color',
  gender: 'g:gender',
  material: 'g:material',
  pattern: 'g:pattern',
  size: 'g:size',
  sizeType: 'g:size_type',
  sizeSystem: 'g:size_system',
  itemGroupId: 'g:item_group_id',
  adwordsRedirect: 'g:ads_redirect',
  customLabels: 'g:custom_label_',
  promotionId: 'g:promotion_id',
  // TODO: error in spec
  includedDestination: 'g:included_destination',
  excludedDestination: 'g:excluded_destination',
  shipping: 'g:shipping',
  shippingLabel: 'g:shipping_label',
  // TODO: error in spec. Space?
  shippingWeight: 'g:shipping_weight',
  shippingLength: 'g:shipping_length',
  shippingWidth: 'g:shipping_width',
  shippingHeight: 'g:shipping_height',
  minHandlingTime: 'g:min_handling_time',
  maxHandlingTime: 'g:max_handling_time',
  tax: 'g:tax',
  taxCategory: 'g:tax_category'
};

function formatPrice(price) {
  return `${price.price.toFixed(2)} ${price.currency.toUpperCase()}`;
}

function formatValueUnit(val) {
  return `${val.value} ${val.unit}`;
}

function formatShipping(shipping) {
  const result = {};

  if (shipping.country) {
    result['g:country'] = shipping.country;
  }

  if (shipping.region) {
    result['g:region'] = shipping.region;
  }

  if (shipping.postalCode) {
    result['g:postal_code'] = shipping.postalCode;
  }

  if (shipping.locationId) {
    result['g:location_id'] = shipping.locationId;
  }

  if (shipping.locationGroupName) {
    result['g:location_group_name'] = shipping.locationGroupName;
  }

  if (shipping.service) {
    result['g:service'] = shipping.service;
  }

  if (shipping.price) {
    result['g:price'] = formatPrice(shipping.price);
  }

  return result;
}

function formatTax(tax) {
  const result = {};

  if (tax.country) {
    result['g:country'] = tax.country;
  }

  if (tax.region) {
    result['g:region'] = tax.region;
  }

  if (tax.postalCode) {
    result['g:postal_code'] = tax.postalCode;
  }

  if (tax.locationId) {
    result['g:location_id'] = tax.locationId;
  }

  if (tax.locationGroupName) {
    result['g:location_group_name'] = tax.locationGroupName;
  }

  if (tax.rate) {
    result['g:rate'] = tax.rate.toFixed(2);
  }

  if (tax.taxShip !== undefined) {
    result['g:tax_ship'] = tax.taxShip ? 'yes' : 'no';
  }

  return result;
}

function productToXmlFeedItem(product) {
  const item = {};

  for (const p in xmlPropertiesMap) {
    if (product[p] !== undefined) {
      if (p === 'salePriceEffectiveDate') {
        item[xmlPropertiesMap[p]] = `${product[p].dateFrom.toISOString()}/${product[p].dateTo.toISOString()}`;
        continue;
      }

      if (p.endsWith('Date')) {
        item[xmlPropertiesMap[p]] = product[p].toISOString();
        continue;
      }

      // Price handling
      if (p.endsWith('rice') || p.endsWith('Sold')) {
        // TODO: validate
        item[xmlPropertiesMap[p]] = formatPrice(product[p]);
        continue;
      }

      if (p === 'unitPricingMeasure' || p === 'unitPricingBaseMeasure') {
        item[xmlPropertiesMap[p]] = `${product[p].value}${product[p].unit}`;
        continue;
      }

      if (p === 'installment') {
        item[xmlPropertiesMap[p]] = {
          'g:months': product[p].months,
        };

        if (product[p].amount) {
          item[xmlPropertiesMap[p]]['g:amount'] = formatPrice(product[p].amount);
        }

        continue;
      }

      if (p === 'customLabels') {
        for (let i = 0; i < 5; i++) {
          if (product[p][i] !== undefined) {
            item[xmlPropertiesMap[p] + i] = product[p][i];
          }
        }

        continue;
      }

      if (p === 'loyaltyPoints') {
        const loyaltyPoints = {};

        if (product[p].name) {
          loyaltyPoints['g:name'] = product[p].name;
        }

        if (product[p].pointsValue) {
          loyaltyPoints['g:points_value'] = product[p].pointsValue;
        }

        if (product[p].ratio) {
          loyaltyPoints['g:ratio'] = product[p].ratio.toFixed(1);
        }

        item[xmlPropertiesMap[p]] = loyaltyPoints;
        continue;
      }

      if (p === 'shipping') {
        if (Array.isArray(product[p])) {
          item[xmlPropertiesMap[p]] = product[p].map(s => formatShipping(s));
        } else {
          item[xmlPropertiesMap[p]] = formatShipping(product[p]);
        }

        continue;
      }

      if (p === 'shippingWeight' || p === 'shippingLength' || p === 'shippingWidth'
        || p === 'shippingHeight') {
        item[xmlPropertiesMap[p]] = formatValueUnit(product[p]);
        continue;
      }

      if (p === 'tax') {
        if (Array.isArray(product[p])) {
          item[xmlPropertiesMap[p]] = product[p].map(s => formatTax(s));
        } else {
          item[xmlPropertiesMap[p]] = formatTax(product[p]);
        }
        
        continue;
      }

      item[xmlPropertiesMap[p]] = product[p];
    }
  }

  return item;
}

class FeedBuilder {
  constructor(options) {
    this.options = options || {};
    this.products = [];
  }

  withTitle(title) {
    this.title = title;
    return this;
  }

  withLink(link) {
    this.link = link;
    return this;
  }

  withProduct(product) {
    this.products.push(product);
    return this;
  }

  withDescription(description) {
    this.description = description;
    return this;
  }

  buildXml() {
    const channel = {};

    if (this.title) {
      channel.title = this.title;
    }

    if (this.link) {
      channel.link = this.link;
    }

    if (this.description) {
      channel.description = this.description;
    }

    if (this.products.length > 0) {
      channel.item = this.products.map(p => productToXmlFeedItem(p));
    }

    const feed = {
      rss: {
        '@xmlns:g': 'http://base.google.com/ns/1.0',
        '@version': '2.0',
        channel,
      },
    };

    const xml = xmlbuilder.create(feed, { encoding: 'utf-8' });
    return xml.end({ pretty: true });
  }
}

module.exports = {
  FeedBuilder,
};
