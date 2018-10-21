/* eslint-disable no-underscore-dangle */
const ProductDateRange = require('./productDateRange');
const ProductPrice = require('./productPrice');
const {
  UnitPricingMeasure,
  ShippingWeight,
  ShippingDimension,
} = require('./units');

/**
 * Defines a product.
 */
class Product {
  constructor() {
    this._customLabels = new Array(5);
  }

  /**
   * Gets a unique id of each different product.
   *
   * @returns {string}
   */
  get id() {
    return this._id;
  }

  /**
   * Sets a unique id of each different product.
   *
   * @param {string} value
   */
  set id(value) {
    this._id = value;
  }

  /**
   * Gets a title of a product.
   *
   * @returns {string}
   */
  get title() {
    return this._title;
  }

  /**
   * Sets a title of a product.
   *
   * @param {string} value
   */
  set title(value) {
    this._title = value;
  }

  /**
   * Gets a description of a product.
   *
   * @returns {string}
   */
  get description() {
    return this._description;
  }

  /**
   * Sets a description of a product.
   *
   * @param {string} value
   */
  set description(value) {
    this._description = value;
  }

  /**
   * Gets a link to product's landing page.
   * @returns {string}
   */
  get link() {
    return this._link;
  }

  /**
   * Sets a link to product's landing page.
   * @param {string} value
   */
  set link(value) {
    this._link = value;
  }

  /**
   * Gets a link to product's main image.
   * @returns {string}
   */
  get imageLink() {
    return this._imageLink;
  }

  /**
   * Sets a link to product's main image.
   */
  set imageLink(value) {
    this._imageLink = value;
  }

  /**
   * Gets a link to mobile-optimized product's landing page.
   * @returns {string}
   */
  get mobileLink() {
    return this._mobileLink;
  }

  /**
   * Sets a link to mobile-optimized product's landing page.
   * @param {string} value
   */
  set mobileLink(value) {
    this._mobileLink = value;
  }

  /**
   * Gets additional links to product's images.
   * @returns {string|Array}
   */
  get additionalImageLink() {
    return this._additionalImageLink;
  }

  /**
   * Sets additional links to product's images.
   * @param {string|Array} value
   */
  set additionalImageLink(value) {
    this._additionalImageLink = value;
  }

  /**
   * Gets an availability of a product.
   * @returns {string} One of Product.AVAILABILITY
   * @see Product.AVAILABILITY
   */
  get availability() {
    return this._availability;
  }

  /**
   * Sets an availability of a product.
   * @param {string} value One of Product.AVAILABILITY
   * @see Product.AVAILABILITY
   */
  set availability(value) {
    this._availability = value;
  }

  /**
   * Gets a date when a product becomes available.
   * Can be used to tell users when a preordered product will be shipped.
   * @returns {Date}
   */
  get availabilityDate() {
    return this._availabilityDate;
  }

  /**
   * Sets a date when a product becomes available.
   * Can be used to tell users when a preordered product will be shipped.
   * @param {Date} value
   */
  set availabilityDate(value) {
    if (!(value instanceof Date)) {
      throw new Error('availabilityDate expects instance of Date as argument.');
    }
    this._availabilityDate = value;
  }

  /**
   * Gets a date when product data expires.
   *
   * @returns {Date}
   */
  get expirationDate() {
    return this._expirationDate;
  }

  /**
   * Sets a date when product data expires.
   *
   * @param {Date} value
   */
  set expirationDate(value) {
    if (!(value instanceof Date)) {
      throw new Error('expirationDate expects instance of Date as argument.');
    }
    this._expirationDate = value;
  }

  /**
   * Gets a product's price.
   * @returns {ProductPrice}
   */
  get price() {
    return this._price;
  }

  /**
   * Sets a product's price.
   * @param {ProductPrice} value.
   */
  set price(value) {
    if (!(value instanceof ProductPrice)) {
      throw new Error('price expects instance of ProductPrice as argument.');
    }
    this._price = value;
  }

  /**
   * Gets a product's price during sale.
   * @returns {ProductPrice}
   */
  get salePrice() {
    return this._salePrice;
  }

  /**
   * Sets a product's price during sale.
   * @param {ProductPrice} value
   */
  set salePrice(value) {
    if (!(value instanceof ProductPrice)) {
      throw new Error('salePrice expects instance of ProductPrice as argument.');
    }
    this._salePrice = value;
  }

  /**
   * Gets a date range when sale price is effective.
   *
   * @returns {ProductDateRange}
   */
  get salePriceEffectiveDate() {
    return this._salePriceEffectiveDate;
  }

  /**
   * Sets a date range when sale price is effective.
   *
   * @param {ProductDateRange} value
   */
  set salePriceEffectiveDate(value) {
    if (!(value instanceof ProductDateRange)) {
      throw new Error('salePriceEffectiveDate expects instance of ProductDateRange as argument.');
    }

    this._salePriceEffectiveDate = value;
  }

  /**
   * Gets a cost of goods sold (COGS).
   * Can be used to get additional reporting on gross profit.
   * @returns {ProductPrice}
   */
  get costOfGoodsSold() {
    return this._costOfGoodsSold;
  }

  /**
   * Sets a cost of goods sold (COGS).
   * Can be used to get additional reporting on gross profit.
   * @param {ProductPrice} value
   */
  set costOfGoodsSold(value) {
    if (!(value instanceof ProductPrice)) {
      throw new Error('costOfGoodsSold expects instance of ProductPrice as argument.');
    }

    this._costOfGoodsSold = value;
  }

  /**
   * Gets a value defining the measure and dimension of a product.
   * This value allows to understand the exact cost per unit for a product.
   * @returns {UnitPricingMeasure}
   */
  get unitPricingMeasure() {
    return this._unitPricingMeasure;
  }

  /**
   * Sets a value defining the measure and dimension of a product.
   * This value allows to understand the exact cost per unit for a product.
   * @param {UnitPricingMeasure} value
   */
  set unitPricingMeasure(value) {
    if (!(value instanceof UnitPricingMeasure)) {
      throw new Error('unitPricingMeasure expects instance of UnitPricingMeasure as argument.');
    }
    this._unitPricingMeasure = value;
  }

  /**
   * Gets a denominator for your unit price.
   * @returns {UnitPricingMeasure}
   */
  get unitPricingBaseMeasure() {
    return this._unit_pricing_base_measure;
  }

  /**
   * Sets a denominator for your unit price.
   * @param {UnitPricingMeasure} value
   */
  set unitPricingBaseMeasure(value) {
    if (!(value instanceof UnitPricingMeasure)) {
      throw new Error('unitPricingBaseMeasure expects instance of UnitPricingMeasure as argument.');
    }
    this._unit_pricing_base_measure = value;
  }

  get installment() {
    return this._installment;
  }

  set installment(value) {
    this._installment = value;
  }

  get loyaltyPoints() {
    return this._loyaltyPoints;
  }

  set loyaltyPoints(value) {
    this._loyaltyPoints = value;
  }

  get googleProductCategory() {
    return this._googleProductCategory;
  }

  set googleProductCategory(value) {
    this._googleProductCategory = value;
  }

  get productType() {
    return this._productType;
  }

  set productType(value) {
    this._productType = value;
  }

  get brand() {
    return this._brand;
  }

  set brand(value) {
    this._brand = value;
  }

  get gtin() {
    return this._gtin;
  }

  set gtin(value) {
    this._gtin = value;
  }

  get mpn() {
    return this._mpn;
  }

  set mpn(value) {
    this._mpn = value;
  }

  get identifierExists() {
    return this._identifierExists;
  }

  set identifierExists(value) {
    this._identifierExists = value;
  }

  get condition() {
    return this._condition;
  }

  set condition(value) {
    this._condition = value;
  }

  get adult() {
    return this._adult;
  }

  set adult(value) {
    this._adult = value;
  }

  get multipack() {
    return this._multipack;
  }

  set multipack(value) {
    this._multipack = value;
  }

  get isBundle() {
    return this._isBundle;
  }

  set isBundle(value) {
    this._isBundle = value;
  }

  get energyEfficiencyClass() {
    return this._energyEfficiencyClass;
  }

  set energyEfficiencyClass(value) {
    this._energyEfficiencyClass = value;
  }

  get minEnergyEfficiencyClass() {
    return this._minEnergyEfficiencyClass;
  }

  set minEnergyEfficiencyClass(value) {
    this._minEnergyEfficiencyClass = value;
  }

  get maxEnergyEfficiencyClass() {
    return this._maxEnergyEfficiencyClass;
  }

  set maxEnergyEfficiencyClass(value) {
    this._maxEnergyEfficiencyClass = value;
  }

  get ageGroup() {
    return this._ageGroup;
  }

  set ageGroup(value) {
    this._ageGroup = value;
  }

  get color() {
    return this._color;
  }

  set color(value) {
    this._color = value;
  }

  get gender() {
    return this._gender;
  }

  set gender(value) {
    this._gender = value;
  }

  get material() {
    return this._material;
  }

  set material(value) {
    this._material = value;
  }

  get pattern() {
    return this._pattern;
  }

  set pattern(value) {
    this._pattern = value;
  }

  get size() {
    return this._size;
  }

  set size(value) {
    this._size = value;
  }

  get sizeType() {
    return this._sizeType;
  }

  set sizeType(value) {
    this._sizeType = value;
  }

  get sizeSystem() {
    return this._sizeSystem;
  }

  set sizeSystem(value) {
    this._sizeSystem = value;
  }

  get itemGroupId() {
    return this._itemGroupId;
  }

  set itemGroupId(value) {
    this._itemGroupId = value;
  }

  get adwordsRedirect() {
    return this._adwordsRedirect;
  }

  set adwordsRedirect(value) {
    this._adwordsRedirect = value;
  }

  get customLabels() {
    return this._customLabels;
  }

  set customLabels(value) {
    this._customLabels = value;
  }

  get promotionId() {
    return this._promotionId;
  }

  set promotionId(value) {
    this._promotionId = value;
  }

  get includedDestination() {
    return this._includedDestination;
  }

  set includedDestination(value) {
    this._includedDestination = value;
  }

  get excludedDestination() {
    return this._excludedDestination;
  }

  set excludedDestination(value) {
    this._excludedDestination = value;
  }

  get shipping() {
    return this._shipping;
  }

  set shipping(value) {
    this._shipping = value;
  }

  get shippingLabel() {
    return this._shippingLabel;
  }

  set shippingLabel(value) {
    this._shippingLabel = value;
  }

  get shippingWeight() {
    return this._shippingWeight;
  }

  set shippingWeight(value) {
    this._shippingWeight = value;
  }

  get shippingLength() {
    return this._shippingLength;
  }

  set shippingLength(value) {
    this._shippingLength = value;
  }

  get shippingWidth() {
    return this._shippingWidth;
  }

  set shippingWidth(value) {
    this._shippingWidth = value;
  }

  get shippingHeight() {
    return this._shippingHeight;
  }

  set shippingHeight(value) {
    this._shippingHeight = value;
  }

  get minHandlingTime() {
    return this._minHandlingTime;
  }

  set minHandlingTime(value) {
    this._minHandlingTime = value;
  }

  get maxHandlingTime() {
    return this._maxHandlingTime;
  }

  set maxHandlingTime(value) {
    this._maxHandlingTime = value;
  }

  get tax() {
    return this._tax;
  }

  set tax(value) {
    this._tax = value;
  }

  get taxCategory() {
    return this._taxCategory;
  }

  set taxCategory(value) {
    this._taxCategory = value;
  }
}

Product.AVAILABILITY = {
  IN_STOCK: 'in stock',
  OUT_OF_STOCK: 'out of stock',
  PREORDER: 'preorder',
};

Product.CONDITION = {
  NEW: 'new',
  REFURBISHED: 'refurbished',
  USED: 'used',
};

Product.AGE_GROUP = {
  NEWBORN: 'newborn',
  INFANT: 'infant',
  TODDLER: 'toddler',
  KIDS: 'kids',
  ADULT: 'adult',
};

Product.GENDER = {
  MALE: 'male',
  FEMALE: 'female',
  UNISEX: 'unisex',
};

Product.SIZE_TYPE = {
  REGULAR: 'regular',
  PETITE: 'petite',
  PLUS: 'plus',
  BIG: 'big',
  TALL: 'tall',
  MATERNITY: 'maternity',
};

Product.SIZE_SYSTEM = {
  AU: 'AU',
  BR: 'BR',
  CN: 'CN',
  DE: 'DE',
  EU: 'EU',
  FR: 'FR',
  IT: 'IT',
  JP: 'JP',
  MEX: 'MEX',
  UK: 'UK',
  US: 'US',
};

Product.ADS_DESTINATION = {
  SHOPPING: 'Shopping',
  SHOPPING_ACTIONS: 'ShoppingActions',
  DISPLAY_ADS: 'DisplayAds',
};

module.exports = Product;
