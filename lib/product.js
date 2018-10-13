class ProductPrice {
  constructor(price, currency) {
    this.price = price;
    this.currency = currency;
  }

  get price() {
    return this._price;
  }

  set price(value) {
    this._price = value;
  }

  get currency() {
    return this._currency;
  }

  set currency(value) {
    this._currency = value;
  }
}

class UnitPricingMeasure {
  constructor(value, unit) {
    this.value = value;
    this.unit = unit;
  }

  get value() {
    return this._val;
  }

  set value(value) {
    this._val = value;
  }

  get unit() {
    return this._unit;
  }

  set unit(value) {
    this._unit = value;
  }
}

class ProductInstallment {
  constructor(months, amount) {
    this.months = months;
    this.amount = amount;
  }

  get months() {
    return this._months;
  }

  set months(value) {
    this._months = value;
  }

  get amount() {
    return this._amount;
  }

  set amount(value) {
    this._amount = value;
  }
}

class ProductDateRange {
  constructor(dateFrom, dateTo) {
    this.dateFrom = dateFrom;
    this.dateTo = dateTo;
  }

  get dateFrom() {
    return this._dateFrom;
  }

  set dateFrom(value) {
    this._dateFrom = value;
  }

  get dateTo() {
    return this._dateTo;
  }

  set dateTo(value) {
    this._dateTo = value;
  }
}

class ProductLoyaltyPoints {
  constructor(name, pointsValue, ratio) {
    this.name = name;
    this.pointsValue = pointsValue;
    this.ratio = ratio;
  }

  get name() {
    return this._name;
  }

  set name(value) {
    this._name = value;
  }

  get pointsValue() {
    return this._pointsValue;
  }

  set pointsValue(value) {
    this._pointsValue = value;
  }

  get ratio() {
    return this._ratio;
  }

  set ratio(value) {
    this._ratio = value;
  }
}

class ProductShipping {
  constructor(price) {
    this.price = price;
  }

  get country() {
    return this._country;
  }

  set country(value) {
    this._country = value;
  }

  get region() {
    return this._region;
  }

  set region(value) {
    this._region = value;
  }
  
  get postalCode() {
    return this._postalCode;
  }

  set postalCode(value) {
    this.postalCode = value;
  }

  get locationId() {
    return this._locationId;
  }

  set locationId(value) {
    this._locationId = value;
  }

  get locationGroupName() {
    return this._locationGroupName;
  }

  set locationGroupName(value) {
    this._locationGroupName = value;
  }

  get service() {
    return this._service;
  }

  set service(value) {
    this._service = value;
  }

  get price() {
    return this._price;
  }

  set price(value) {
    this._price = value;
  }
}

class ShippingWeight {
  constructor(value, unit) {
    this.value = value;
    this.unit = unit;
  }

  get value() {
    return this._value;
  }

  set value(val) {
    this._value = val;
  }

  get unit() {
    return this._unit;
  }

  set unit(value) {
    this._unit = value;
  }
}

class ShippingDimension {
  constructor(value, unit) {
    this.value = value;
    this.unit = unit;
  }

  get value() {
    return this._value;
  }

  set value(val) {
    this._value = val;
  }

  get unit() {
    return this._unit;
  }

  set unit(value) {
    this._unit = value;
  }
}

class ProductTax {
  get rate() {
    return this._rate;
  }

  set rate(value) {
    this._rate = value;
  }

  get country() {
    return this._country;
  }

  set country(value) {
    this._country = value;
  }

  get taxShip() {
    return this._taxShip;
  }

  set taxShip(value) {
    this._taxShip = value; 
  }

  get region() {
    return this._region;
  }

  set region(value) {
    this._region = value;
  }
  
  get postalCode() {
    return this._postalCode;
  }

  set postalCode(value) {
    this.postalCode = value;
  }

  get locationId() {
    return this._locationId;
  }

  set locationId(value) {
    this._locationId = value;
  }

  get locationGroupName() {
    return this._locationGroupName;
  }

  set locationGroupName(value) {
    this._locationGroupName = value;
  }
}

class Product {
  constructor() {
    this._customLabels = new Array(5);
  }

  get id() {
    return this._id;
  }

  set id(value) {
    this._id = value;
  }

  get title() {
    return this._title;
  }

  set title(value) {
    this._title = value;
  }

  get description() {
    return this._description;
  }

  set description(value) {
    this._description = value;
  }

  get link() {
    return this._link;
  }

  set link(value) {
    this._link = value;
  }

  get imageLink() {
    return this._imageLink;
  }

  set imageLink(value) {
    this._imageLink = value;
  }

  get mobileLink() {
    return this._mobileLink;
  }

  set mobileLink(value) {
    this._mobileLink = value;
  }

  get additionalImageLink() {
    return this._additionalImageLink;
  }

  set additionalImageLink(value) {
    this._additionalImageLink = value;
  }

  get availability() {
    return this._availability;
  }

  set availability(value) {
    this._availability = value;
  }

  get availabilityDate() {
    return this._availabilityDate;
  }

  set availabilityDate(value) {
    this._availabilityDate = value;
  }

  get expirationDate() {
    return this._expirationDate;
  }

  set expirationDate(value) {
    this._expirationDate = value;
  }

  get price() {
    return this._price;
  }

  set price(value) {
    this._price = value;
  }

  get salePrice() {
    return this._salePrice;
  }

  set salePrice(value) {
    this._salePrice = value;
  }

  get salePriceEffectiveDate() {
    return this._salePriceEffectiveDate;
  }

  set salePriceEffectiveDate(value) {
    this._salePriceEffectiveDate = value;
  }

  get costOfGoodsSold() {
    return this._costOfGoodsSold;
  }

  set costOfGoodsSold(value) {
    this._costOfGoodsSold = value;
  }

  get unitPricingMeasure() {
    return this._unitPricingMeasure;
  }

  set unitPricingMeasure(value) {
    this._unitPricingMeasure = value;
  }

  get unitPricingBaseMeasure() {
    return this._unit_pricing_base_measure;
  }

  set unitPricingBaseMeasure(value) {
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
  MATERNITY: 'maternity'
}

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
  US: 'US'
}

Product.ADS_DESTINATION = {
  SHOPPING: 'Shopping',
  SHOPPING_ACTIONS: 'ShoppingActions',
  DISPLAY_ADS: 'DisplayAds'
}

module.exports = {
  ProductPrice,
  UnitPricingMeasure,
  ProductInstallment,
  ProductDateRange,
  ProductLoyaltyPoints,
  ProductShipping,
  ShippingWeight,
  ShippingDimension,
  ProductTax,
  Product,
};
