const xmlbuilder = require('xmlbuilder');

function xmlPriceFormatter(price) {
  return price && !Number.isNaN(price.price) && `${price.price.toFixed(2)} ${price.currency && price.currency.toUpperCase()}`;
}

function xmlDateFormatter(date) {
  return date && date.toISOString();
}

function xmlDateRangeFormatter(range) {
  return range && `${xmlDateFormatter(range.dateFrom)}/${xmlDateFormatter(range.dateTo)}`;
}

function xmlValueUnitFormatter(val) {
  return val && `${val.value} ${val.unit}`;
}

function xmlValueUnitNoSpaceFormatter(val) {
  return val && `${val.value}${val.unit}`;
}

function xmlYesNoFormatter(val) {
  return val ? 'yes' : 'no';
}

function xmlFixedNumberFormatBuilder(precision) {
  return number => !Number.isNaN(number) && number.toFixed(precision);
}

function xmlCustomLabelsFormatter(item, map, root) {
  for (let i = 0; i < 5; i += 1) {
    if (item[i] !== undefined) {
      // eslint-disable-next-line no-param-reassign
      root[`g:custom_label_${i}`] = item[i];
    }
  }
}

function xmlSingleItemProcessor(prop, map, root) {
  if (map.xmlFormatter) {
    return map.xmlFormatter(prop, map.items, root);
  }

  return prop;
}

function xmlObjectFormatter(product, map) {
  const item = {};

  Object.keys(map).forEach((p) => {
    if (product[p] !== undefined) {
      let result;
      if (Array.isArray(product[p]) && map[p].allowRepeat) {
        result = product[p].map(s => xmlSingleItemProcessor(s, map[p], item));
      } else {
        result = xmlSingleItemProcessor(product[p], map[p], item);
      }

      if (map[p].xmlName && result !== undefined) {
        item[map[p].xmlName] = result;
      }
    }
  });

  return item;
}

const xmlPropertiesMap = {
  id: { xmlName: 'g:id' },
  title: { xmlName: 'title' },
  description: { xmlName: 'g:description' },
  link: { xmlName: 'link' },
  imageLink: { xmlName: 'g:image_link' },
  mobileLink: { xmlName: 'g:mobile_link' },
  additionalImageLink: { xmlName: 'g:additional_image_link', allowRepeat: true },
  availability: { xmlName: 'g:availability' },
  availabilityDate: { xmlName: 'g:availability_date', xmlFormatter: xmlDateFormatter },
  // TODO: Check format
  // TODO: error in spec
  expirationDate: { xmlName: 'g:expiration_date', xmlFormatter: xmlDateFormatter },
  price: { xmlName: 'g:price', xmlFormatter: xmlPriceFormatter },
  salePrice: { xmlName: 'g:sale_price', xmlFormatter: xmlPriceFormatter },
  salePriceEffectiveDate: { xmlName: 'g:sale_price_effective_date', xmlFormatter: xmlDateRangeFormatter },
  costOfGoodsSold: { xmlName: 'g:cost_of_goods_sold', xmlFormatter: xmlPriceFormatter },
  unitPricingMeasure: { xmlName: 'g:unit_pricing_measure', xmlFormatter: xmlValueUnitNoSpaceFormatter },
  unitPricingBaseMeasure: { xmlName: 'g:unit_pricing_base_measure', xmlFormatter: xmlValueUnitNoSpaceFormatter },
  // TODO: error in spec
  installment: {
    xmlName: 'g:installment',
    xmlFormatter: xmlObjectFormatter,
    items: {
      months: { xmlName: 'g:months' },
      amount: { xmlName: 'g:amount', xmlFormatter: xmlPriceFormatter },
    },
  },
  loyaltyPoints: {
    xmlName: 'g:loyalty_points',
    xmlFormatter: xmlObjectFormatter,
    items: {
      name: { xmlName: 'g:name' },
      pointsValue: { xmlName: 'g:points_value' },
      ratio: { xmlName: 'g:ratio', xmlFormatter: xmlFixedNumberFormatBuilder(1) },
    },
  },
  googleProductCategory: { xmlName: 'g:google_product_category' },
  productType: { xmlName: 'g:product_type', allowRepeat: true },
  brand: { xmlName: 'g:brand' },
  gtin: { xmlName: 'g:gtin', allowRepeat: true },
  mpn: { xmlName: 'g:mpn' },
  // TODO: Check format
  identifierExists: { xmlName: 'g:identifier_exists' },
  condition: { xmlName: 'g:condition' },
  // TODO: Check format
  adult: { xmlName: 'g:adult' },
  multipack: { xmlName: 'g:multipack' },
  isBundle: { xmlName: 'g:is_bundle' },
  energyEfficiencyClass: { xmlName: 'g:energy_efficiency_class' },
  // TODO: error in spec
  minEnergyEfficiencyClass: { xmlName: 'g:min_energy_efficiency_class' },
  maxEnergyEfficiencyClass: { xmlName: 'g:max_energy_efficiency_class' },
  ageGroup: { xmlName: 'g:age_group' },
  color: { xmlName: 'g:color' },
  gender: { xmlName: 'g:gender' },
  material: { xmlName: 'g:material' },
  pattern: { xmlName: 'g:pattern' },
  size: { xmlName: 'g:size' },
  sizeType: { xmlName: 'g:size_type' },
  sizeSystem: { xmlName: 'g:size_system' },
  itemGroupId: { xmlName: 'g:item_group_id' },
  adwordsRedirect: { xmlName: 'g:ads_redirect' },
  customLabels: { xmlFormatter: xmlCustomLabelsFormatter },
  promotionId: { xmlName: 'g:promotion_id', allowRepeat: true },
  // TODO: error in spec
  includedDestination: { xmlName: 'g:included_destination', allowRepeat: true },
  excludedDestination: { xmlName: 'g:excluded_destination', allowRepeat: true },
  shipping: {
    xmlName: 'g:shipping',
    xmlFormatter: xmlObjectFormatter,
    allowRepeat: true,
    items: {
      country: { xmlName: 'g:country' },
      region: { xmlName: 'g:region' },
      postalCode: { xmlName: 'g:postal_code' },
      locationId: { xmlName: 'g:location_id' },
      locationGroupName: { xmlName: 'g:location_group_name' },
      service: { xmlName: 'g:service' },
      price: { xmlName: 'g:price', xmlFormatter: xmlPriceFormatter },
    },
  },
  shippingLabel: { xmlName: 'g:shipping_label' },
  // TODO: error in spec. Space?
  shippingWeight: { xmlName: 'g:shipping_weight', xmlFormatter: xmlValueUnitFormatter },
  shippingLength: { xmlName: 'g:shipping_length', xmlFormatter: xmlValueUnitFormatter },
  shippingWidth: { xmlName: 'g:shipping_width', xmlFormatter: xmlValueUnitFormatter },
  shippingHeight: { xmlName: 'g:shipping_height', xmlFormatter: xmlValueUnitFormatter },
  minHandlingTime: { xmlName: 'g:min_handling_time' },
  maxHandlingTime: { xmlName: 'g:max_handling_time' },
  tax: {
    xmlName: 'g:tax',
    xmlFormatter: xmlObjectFormatter,
    allowRepeat: true,
    items: {
      country: { xmlName: 'g:country' },
      region: { xmlName: 'g:region' },
      postalCode: { xmlName: 'g:postal_code' },
      locationId: { xmlName: 'g:location_id' },
      locationGroupName: { xmlName: 'g:location_group_name' },
      rate: { xmlName: 'g:rate', xmlFormatter: xmlFixedNumberFormatBuilder(2) },
      taxShip: { xmlName: 'g:tax_ship', xmlFormatter: xmlYesNoFormatter },
    },
  },
  taxCategory: { xmlName: 'g:tax_category' },
};

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
      channel.item = this.products.map(p => xmlObjectFormatter(p, xmlPropertiesMap));
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

module.exports = FeedBuilder;
