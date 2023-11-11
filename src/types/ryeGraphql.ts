/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export enum OfferErrorCode {
  NOT_FOUND = "NOT_FOUND",
  UNKNOWN_OFFER_ERROR = "UNKNOWN_OFFER_ERROR",
  PRODUCTS_EMPTY = "PRODUCTS_EMPTY",
  BUYER_IDENTITY_MISSING = "BUYER_IDENTITY_MISSING",
  PROVINCE_REQUIRED_FOR_PROVIDED_COUNTRY = "PROVINCE_REQUIRED_FOR_PROVIDED_COUNTRY",
  SELECTED_SHIPPING_OPTION_NOT_FOUND = "SELECTED_SHIPPING_OPTION_NOT_FOUND",
  INVALID_BUYER_IDENTITY_INFORMATION = "INVALID_BUYER_IDENTITY_INFORMATION",
}

export enum SubmitStoreStatus {
  COMPLETED = "COMPLETED",
  PAYMENT_FAILED = "PAYMENT_FAILED",
  FAILED = "FAILED",
}

export enum CartErrorCode {
  PRODUCT_NOT_FOUND = "PRODUCT_NOT_FOUND",
  STORE_NOT_FOUND = "STORE_NOT_FOUND",
  STORE_OPERATION_FAILED = "STORE_OPERATION_FAILED",
  BUYER_IDENTITY_INVALID_FIRST_NAME = "BUYER_IDENTITY_INVALID_FIRST_NAME",
  BUYER_IDENTITY_INVALID_LAST_NAME = "BUYER_IDENTITY_INVALID_LAST_NAME",
  BUYER_IDENTITY_INVALID_ADDRESS = "BUYER_IDENTITY_INVALID_ADDRESS",
  BUYER_IDENTITY_INVALID_CITY = "BUYER_IDENTITY_INVALID_CITY",
  BUYER_IDENTITY_INVALID_PROVINCE = "BUYER_IDENTITY_INVALID_PROVINCE",
  BUYER_IDENTITY_INVALID_COUNTRY = "BUYER_IDENTITY_INVALID_COUNTRY",
  BUYER_IDENTITY_INVALID_POSTAL_CODE = "BUYER_IDENTITY_INVALID_POSTAL_CODE",
  BUYER_IDENTITY_INVALID_PHONE = "BUYER_IDENTITY_INVALID_PHONE",
  BUYER_IDENTITY_INVALID_EMAIL = "BUYER_IDENTITY_INVALID_EMAIL",
  BUYER_IDENTITY_ADDRESS_AMBIGUOUS = "BUYER_IDENTITY_ADDRESS_AMBIGUOUS",
  CART_MODIFICATION_FORBIDDEN = "CART_MODIFICATION_FORBIDDEN",
}

export enum StoreErrorCode {
  QUANTITY_EXCEEDED = "QUANTITY_EXCEEDED",
  PRODUCT_NOT_AVAILABLE = "PRODUCT_NOT_AVAILABLE",
  ADD_PRODUCTS_FAILED = "ADD_PRODUCTS_FAILED",
  UPDATE_PRODUCTS_FAILED = "UPDATE_PRODUCTS_FAILED",
  REMOVE_PRODUCTS_FAILED = "REMOVE_PRODUCTS_FAILED",
  CHECKOUT_DISALLOWED = "CHECKOUT_DISALLOWED",
  STORE_MODIFICATION_FORBIDDEN = "STORE_MODIFICATION_FORBIDDEN",
}

export enum SubmitStoreResultErrorCode {
  SUBMIT_STORE_FAILED = "SUBMIT_STORE_FAILED",
  PAYMENT_FAILED = "PAYMENT_FAILED",
  ALREADY_SUBMITTED = "ALREADY_SUBMITTED",
}

export enum SubmitCartResultErrorCode {
  SUBMIT_CART_FAILED = "SUBMIT_CART_FAILED",
  BUYER_IDENTITY_MISSING = "BUYER_IDENTITY_MISSING",
  BUYER_IDENTITY_INVALID_FIRST_NAME = "BUYER_IDENTITY_INVALID_FIRST_NAME",
  BUYER_IDENTITY_INVALID_LAST_NAME = "BUYER_IDENTITY_INVALID_LAST_NAME",
  BUYER_IDENTITY_INVALID_ADDRESS = "BUYER_IDENTITY_INVALID_ADDRESS",
  BUYER_IDENTITY_INVALID_CITY = "BUYER_IDENTITY_INVALID_CITY",
  BUYER_IDENTITY_INVALID_PROVINCE = "BUYER_IDENTITY_INVALID_PROVINCE",
  BUYER_IDENTITY_INVALID_COUNTRY = "BUYER_IDENTITY_INVALID_COUNTRY",
  BUYER_IDENTITY_INVALID_POSTAL_CODE = "BUYER_IDENTITY_INVALID_POSTAL_CODE",
  BUYER_IDENTITY_INVALID_PHONE = "BUYER_IDENTITY_INVALID_PHONE",
  BUYER_IDENTITY_INVALID_EMAIL = "BUYER_IDENTITY_INVALID_EMAIL",
  BUYER_IDENTITY_ADDRESS_AMBIGUOUS = "BUYER_IDENTITY_ADDRESS_AMBIGUOUS",
  BILLING_ADDRESS_INVALID_FIRST_NAME = "BILLING_ADDRESS_INVALID_FIRST_NAME",
  BILLING_ADDRESS_INVALID_LAST_NAME = "BILLING_ADDRESS_INVALID_LAST_NAME",
  BILLING_ADDRESS_INVALID_ADDRESS = "BILLING_ADDRESS_INVALID_ADDRESS",
  BILLING_ADDRESS_INVALID_CITY = "BILLING_ADDRESS_INVALID_CITY",
  BILLING_ADDRESS_INVALID_PROVINCE = "BILLING_ADDRESS_INVALID_PROVINCE",
  BILLING_ADDRESS_INVALID_COUNTRY = "BILLING_ADDRESS_INVALID_COUNTRY",
  BILLING_ADDRESS_INVALID_PHONE = "BILLING_ADDRESS_INVALID_PHONE",
  BILLING_ADDRESS_INVALID_POSTAL_CODE = "BILLING_ADDRESS_INVALID_POSTAL_CODE",
  BILLING_ADDRESS_AMBIGUOUS = "BILLING_ADDRESS_AMBIGUOUS",
  ALREADY_SUBMITTED = "ALREADY_SUBMITTED",
  CREATE_SPREEDLY_ENVIRONMENT_FAILED = "CREATE_SPREEDLY_ENVIRONMENT_FAILED",
  CART_IS_EMPTY = "CART_IS_EMPTY",
}

export enum ProductCollectionSortKeys {
  BEST_SELLING = "BEST_SELLING",
  COLLECTION_DEFAULT = "COLLECTION_DEFAULT",
  CREATED = "CREATED",
  ID = "ID",
  MANUAL = "MANUAL",
  PRICE = "PRICE",
  RELEVANCE = "RELEVANCE",
  TITLE = "TITLE",
}

export enum Currency {
  CYP = "CYP",
  EEK = "EEK",
  GHC = "GHC",
  MRO = "MRO",
  MTL = "MTL",
  TMM = "TMM",
  VEB = "VEB",
  VEF = "VEF",
  ZWD = "ZWD",
  ZWL = "ZWL",
  ZWN = "ZWN",
  ZWR = "ZWR",
  JEP = "JEP",
  KID = "KID",
  GGP = "GGP",
  IMP = "IMP",
  XFU = "XFU",
  GBX = "GBX",
  AED = "AED",
  AFN = "AFN",
  ALL = "ALL",
  AMD = "AMD",
  ANG = "ANG",
  AOA = "AOA",
  ARS = "ARS",
  AUD = "AUD",
  AWG = "AWG",
  AZN = "AZN",
  BAM = "BAM",
  BBD = "BBD",
  BDT = "BDT",
  BGN = "BGN",
  BHD = "BHD",
  BIF = "BIF",
  BMD = "BMD",
  BND = "BND",
  BOB = "BOB",
  BRL = "BRL",
  BSD = "BSD",
  BTN = "BTN",
  BWP = "BWP",
  BYN = "BYN",
  BYR = "BYR",
  BZD = "BZD",
  CAD = "CAD",
  CDF = "CDF",
  CHF = "CHF",
  CLF = "CLF",
  CLP = "CLP",
  CNY = "CNY",
  COP = "COP",
  CRC = "CRC",
  CUC = "CUC",
  CUP = "CUP",
  CVE = "CVE",
  CZK = "CZK",
  DJF = "DJF",
  DKK = "DKK",
  DOP = "DOP",
  DZD = "DZD",
  EGP = "EGP",
  ERN = "ERN",
  ETB = "ETB",
  EUR = "EUR",
  FJD = "FJD",
  FKP = "FKP",
  GBP = "GBP",
  GEL = "GEL",
  GHS = "GHS",
  GIP = "GIP",
  GMD = "GMD",
  GNF = "GNF",
  GTQ = "GTQ",
  GYD = "GYD",
  HKD = "HKD",
  HNL = "HNL",
  HRK = "HRK",
  HTG = "HTG",
  HUF = "HUF",
  IDR = "IDR",
  ILS = "ILS",
  INR = "INR",
  IQD = "IQD",
  IRR = "IRR",
  ISK = "ISK",
  JMD = "JMD",
  JOD = "JOD",
  JPY = "JPY",
  KES = "KES",
  KGS = "KGS",
  KHR = "KHR",
  KMF = "KMF",
  KPW = "KPW",
  KRW = "KRW",
  KWD = "KWD",
  KYD = "KYD",
  KZT = "KZT",
  LAK = "LAK",
  LBP = "LBP",
  LKR = "LKR",
  LRD = "LRD",
  LSL = "LSL",
  LTL = "LTL",
  LVL = "LVL",
  LYD = "LYD",
  MAD = "MAD",
  MDL = "MDL",
  MGA = "MGA",
  MKD = "MKD",
  MMK = "MMK",
  MNT = "MNT",
  MOP = "MOP",
  MRU = "MRU",
  MUR = "MUR",
  MVR = "MVR",
  MWK = "MWK",
  MXN = "MXN",
  MYR = "MYR",
  MZN = "MZN",
  NAD = "NAD",
  NGN = "NGN",
  NIO = "NIO",
  NOK = "NOK",
  NPR = "NPR",
  NZD = "NZD",
  OMR = "OMR",
  PAB = "PAB",
  PEN = "PEN",
  PGK = "PGK",
  PHP = "PHP",
  PKR = "PKR",
  PLN = "PLN",
  PYG = "PYG",
  QAR = "QAR",
  RON = "RON",
  RSD = "RSD",
  RUB = "RUB",
  RWF = "RWF",
  SAR = "SAR",
  SBD = "SBD",
  SCR = "SCR",
  SDG = "SDG",
  SEK = "SEK",
  SGD = "SGD",
  SHP = "SHP",
  SKK = "SKK",
  SLL = "SLL",
  SOS = "SOS",
  SRD = "SRD",
  SSP = "SSP",
  STD = "STD",
  SVC = "SVC",
  SYP = "SYP",
  SZL = "SZL",
  THB = "THB",
  TJS = "TJS",
  TMT = "TMT",
  TND = "TND",
  TOP = "TOP",
  TRY = "TRY",
  TTD = "TTD",
  TWD = "TWD",
  TZS = "TZS",
  UAH = "UAH",
  UGX = "UGX",
  USD = "USD",
  UYU = "UYU",
  UZS = "UZS",
  VES = "VES",
  VND = "VND",
  VUV = "VUV",
  WST = "WST",
  XAF = "XAF",
  XAG = "XAG",
  XAU = "XAU",
  XBA = "XBA",
  XBB = "XBB",
  XBC = "XBC",
  XBD = "XBD",
  XCD = "XCD",
  XDR = "XDR",
  XOF = "XOF",
  XPD = "XPD",
  XPF = "XPF",
  XPT = "XPT",
  XTS = "XTS",
  YER = "YER",
  ZAR = "ZAR",
  ZMK = "ZMK",
  ZMW = "ZMW",
}

export enum Country {
  AD = "AD",
  AE = "AE",
  AF = "AF",
  AG = "AG",
  AI = "AI",
  AL = "AL",
  AM = "AM",
  AN = "AN",
  AO = "AO",
  AQ = "AQ",
  AR = "AR",
  AS = "AS",
  AT = "AT",
  AU = "AU",
  AW = "AW",
  AX = "AX",
  AZ = "AZ",
  BA = "BA",
  BB = "BB",
  BD = "BD",
  BE = "BE",
  BF = "BF",
  BG = "BG",
  BH = "BH",
  BI = "BI",
  BJ = "BJ",
  BL = "BL",
  BM = "BM",
  BN = "BN",
  BO = "BO",
  BQ = "BQ",
  BR = "BR",
  BS = "BS",
  BT = "BT",
  BV = "BV",
  BW = "BW",
  BY = "BY",
  BZ = "BZ",
  CA = "CA",
  CC = "CC",
  CD = "CD",
  CF = "CF",
  CG = "CG",
  CH = "CH",
  CI = "CI",
  CK = "CK",
  CL = "CL",
  CM = "CM",
  CN = "CN",
  CO = "CO",
  CR = "CR",
  CU = "CU",
  CV = "CV",
  CW = "CW",
  CX = "CX",
  CY = "CY",
  CZ = "CZ",
  DE = "DE",
  DJ = "DJ",
  DK = "DK",
  DM = "DM",
  DO = "DO",
  DZ = "DZ",
  EC = "EC",
  EE = "EE",
  EG = "EG",
  EH = "EH",
  ER = "ER",
  ES = "ES",
  ET = "ET",
  FI = "FI",
  FJ = "FJ",
  FK = "FK",
  FM = "FM",
  FO = "FO",
  FR = "FR",
  GA = "GA",
  GB = "GB",
  GD = "GD",
  GE = "GE",
  GF = "GF",
  GG = "GG",
  GH = "GH",
  GI = "GI",
  GL = "GL",
  GM = "GM",
  GN = "GN",
  GP = "GP",
  GQ = "GQ",
  GR = "GR",
  GS = "GS",
  GT = "GT",
  GU = "GU",
  GW = "GW",
  GY = "GY",
  HK = "HK",
  HM = "HM",
  HN = "HN",
  HR = "HR",
  HT = "HT",
  HU = "HU",
  ID = "ID",
  IE = "IE",
  IL = "IL",
  IM = "IM",
  IN = "IN",
  IO = "IO",
  IQ = "IQ",
  IR = "IR",
  IS = "IS",
  IT = "IT",
  JE = "JE",
  JM = "JM",
  JO = "JO",
  JP = "JP",
  KE = "KE",
  KG = "KG",
  KH = "KH",
  KI = "KI",
  KM = "KM",
  KN = "KN",
  KP = "KP",
  KR = "KR",
  KW = "KW",
  KY = "KY",
  KZ = "KZ",
  LA = "LA",
  LB = "LB",
  LC = "LC",
  LI = "LI",
  LK = "LK",
  LR = "LR",
  LS = "LS",
  LT = "LT",
  LU = "LU",
  LV = "LV",
  LY = "LY",
  MA = "MA",
  MC = "MC",
  MD = "MD",
  ME = "ME",
  MF = "MF",
  MG = "MG",
  MH = "MH",
  MK = "MK",
  ML = "ML",
  MM = "MM",
  MN = "MN",
  MO = "MO",
  MP = "MP",
  MQ = "MQ",
  MR = "MR",
  MS = "MS",
  MT = "MT",
  MU = "MU",
  MV = "MV",
  MW = "MW",
  MX = "MX",
  MY = "MY",
  MZ = "MZ",
  NA = "NA",
  NC = "NC",
  NE = "NE",
  NF = "NF",
  NG = "NG",
  NI = "NI",
  NL = "NL",
  NO = "NO",
  NP = "NP",
  NR = "NR",
  NU = "NU",
  NZ = "NZ",
  OM = "OM",
  PA = "PA",
  PE = "PE",
  PF = "PF",
  PG = "PG",
  PH = "PH",
  PK = "PK",
  PL = "PL",
  PM = "PM",
  PN = "PN",
  PR = "PR",
  PS = "PS",
  PT = "PT",
  PW = "PW",
  PY = "PY",
  QA = "QA",
  RE = "RE",
  RO = "RO",
  RS = "RS",
  RU = "RU",
  RW = "RW",
  SA = "SA",
  SB = "SB",
  SC = "SC",
  SD = "SD",
  SE = "SE",
  SG = "SG",
  SH = "SH",
  SI = "SI",
  SJ = "SJ",
  SK = "SK",
  SL = "SL",
  SM = "SM",
  SN = "SN",
  SO = "SO",
  SR = "SR",
  SS = "SS",
  ST = "ST",
  SV = "SV",
  SX = "SX",
  SY = "SY",
  SZ = "SZ",
  TC = "TC",
  TD = "TD",
  TF = "TF",
  TG = "TG",
  TH = "TH",
  TJ = "TJ",
  TK = "TK",
  TL = "TL",
  TM = "TM",
  TN = "TN",
  TO = "TO",
  TR = "TR",
  TT = "TT",
  TV = "TV",
  TW = "TW",
  TZ = "TZ",
  UA = "UA",
  UG = "UG",
  UM = "UM",
  US = "US",
  UY = "UY",
  UZ = "UZ",
  VA = "VA",
  VC = "VC",
  VE = "VE",
  VG = "VG",
  VI = "VI",
  VN = "VN",
  VU = "VU",
  WF = "WF",
  WS = "WS",
  YE = "YE",
  YT = "YT",
  ZA = "ZA",
  ZM = "ZM",
  ZW = "ZW",
  XK = "XK",
  AC = "AC",
  TA = "TA",
  ZZ = "ZZ",
}

export enum Marketplace {
  AMAZON = "AMAZON",
  SHOPIFY = "SHOPIFY",
}

export enum CancelOrderStatus {
  CANCELLED = "CANCELLED",
  CANCEL_FAILED = "CANCEL_FAILED",
  CANCEL_PROCESSING = "CANCEL_PROCESSING",
}

export enum CancelOrderErrorCode {
  ORDER_ALREADY_SHIPPED = "ORDER_ALREADY_SHIPPED",
  ORDER_SHIPPING_IN_PROGRESS = "ORDER_SHIPPING_IN_PROGRESS",
  CANCEL_WINDOW_EXPIRED = "CANCEL_WINDOW_EXPIRED",
  REQUEST_MANUAL_CANCELLATION = "REQUEST_MANUAL_CANCELLATION",
  NOT_SUPPORTED = "NOT_SUPPORTED",
  ORDER_NOT_FOUND = "ORDER_NOT_FOUND",
  ORDER_ALREADY_CANCELLED = "ORDER_ALREADY_CANCELLED",
  CANCELLATION_IN_PROGRESS = "CANCELLATION_IN_PROGRESS",
}

export enum OrderStatus {
  PENDING = "PENDING",
  PROCESSING = "PROCESSING",
  SUCCEEDED = "SUCCEEDED",
  FAILED = "FAILED",
  ACTION_REQUIRED = "ACTION_REQUIRED",
  CANCELLED = "CANCELLED",
  CANCELLATION_IN_PROGRESS = "CANCELLATION_IN_PROGRESS",
  CANCELLATION_REQUESTED = "CANCELLATION_REQUESTED",
  PARTIALLY_CANCELLED = "PARTIALLY_CANCELLED",
}

export enum OrderStateEnum {
  PAYMENT_SUCCEEDED = "PAYMENT_SUCCEEDED",
  PAYMENT_FAILED = "PAYMENT_FAILED",
  PAYMENT_REFUNDED = "PAYMENT_REFUNDED",
  ORDER_SUBMISSION_STARTED = "ORDER_SUBMISSION_STARTED",
  ORDER_SUBMISSION_SUCCEEDED = "ORDER_SUBMISSION_SUCCEEDED",
  ORDER_PLACED = "ORDER_PLACED",
  ORDER_FAILED = "ORDER_FAILED",
  TRACKING_OBTAINED = "TRACKING_OBTAINED",
  ORDER_CANCEL_SUCCEEDED = "ORDER_CANCEL_SUCCEEDED",
  ORDER_CANCEL_FAILED = "ORDER_CANCEL_FAILED",
  ORDER_CANCEL_STARTED = "ORDER_CANCEL_STARTED",
}

export enum CheckoutStatus {
  PENDING = "PENDING",
  PROCESSING = "PROCESSING",
  SUCCEEDED = "SUCCEEDED",
  PARTIALLY_SUCCEEDED = "PARTIALLY_SUCCEEDED",
  FAILED = "FAILED",
  ACTION_REQUIRED = "ACTION_REQUIRED",
  CANCELLED = "CANCELLED",
  CANCELLATION_IN_PROGRESS = "CANCELLATION_IN_PROGRESS",
  CANCELLATION_REQUESTED = "CANCELLATION_REQUESTED",
  MIXED = "MIXED",
}

export interface CartItemsInput {
  amazonCartItemsInput?: Nullable<AmazonCartItemsInput[]>
  shopifyCartItemsInput?: Nullable<ShopifyCartItemsInput[]>
}

export interface AmazonCartItemsInput {
  quantity: number
  productId: string
}

export interface ShopifyCartItemsInput {
  quantity: number
  variantId: string
}

export interface BuyerIdentityInput {
  firstName?: Nullable<string>
  lastName?: Nullable<string>
  phone?: Nullable<string>
  email?: Nullable<string>
  address1?: Nullable<string>
  address2?: Nullable<string>
  city?: Nullable<string>
  provinceCode?: Nullable<string>
  countryCode: Country
  postalCode?: Nullable<string>
}

export interface BillingAddressInput {
  firstName: string
  lastName: string
  phone?: Nullable<string>
  address1: string
  address2?: Nullable<string>
  city: string
  provinceCode?: Nullable<string>
  countryCode: Country
  postalCode: string
}

export interface CartCreateInput {
  items: CartItemsInput
  buyerIdentity?: Nullable<BuyerIdentityInput>
  isEmailMarketingAllowed?: Nullable<boolean>
}

export interface CartSubmitInput {
  id: string
  token?: Nullable<string>
  billingAddress?: Nullable<BillingAddressInput>
  selectedShippingOptions?: Nullable<SelectedShippingOption[]>
  experimentalPromoCodes?: Nullable<StorePromoCodesInput[]>
}

export interface StorePromoCodesInput {
  store: string
  promoCodes: string[]
}

export interface UpdateCartSelectedShippingOptionsInput {
  id: string
  shippingOptions: SelectedShippingOption[]
}

export interface SelectedShippingOption {
  store: string
  shippingId: string
}

export interface CartDeleteInput {
  id: string
}

export interface CartBuyerIdentityUpdateInput {
  id: string
  buyerIdentity: BuyerIdentityInput
  isEmailMarketingAllowed?: Nullable<boolean>
}

export interface CartItemsUpdateInput {
  id: string
  items: CartItemsInput
}

export interface CartItemsAddInput {
  id: string
  items: CartItemsInput
}

export interface ShopifyVariantIDInput {
  variantId: string
}

export interface AmazonProductIDInput {
  productId: string
}

export interface DeleteCartLinesInput {
  shopifyProducts?: Nullable<ShopifyVariantIDInput[]>
  amazonProducts?: Nullable<AmazonProductIDInput[]>
}

export interface CartItemsDeleteInput {
  id: string
  items: DeleteCartLinesInput
}

export interface ProposeShopifyMerchantCommissionInput {
  canonicalDomain: string
  ratePercent: number
}

export interface OffsetPaginationInput {
  limit: number
  offset: number
}

export interface OrderInput {
  paymentIntentID: string
}

export interface CancelOrderInput {
  orderId: string
}

export interface ProductByIDInput {
  id: string
  marketplace: Marketplace
}

export interface productsByDomainInput {
  domain: string
}

export interface RequestProductByURLInput {
  url: URL
  marketplace: Marketplace
}

export interface RequestStoreByURLInput {
  url: URL
}

export interface Variant {
  title: string
  image: Image
}

export interface Product {
  id: string
  marketplace: Marketplace
  title: string
  description: string
  vendor: string
  url: URL
  isAvailable: boolean
  tags: string[]
  images: Image[]
  variants: Variant[]
  price?: Nullable<Price>
}

export interface Image {
  url: URL
}

export interface OrderEvent {
  id: string
  createdAt: Time
}

export interface AmazonProtectionPlan {
  id: string
  title: string
  price: Price
}

export interface AmazonVariant extends Variant {
  id: string
  title: string
  image: Image
  url: URL
  dimensions: AmazonVariantDimension[]
}

export interface AmazonVariantDimension {
  name: string
  value: string
}

export interface AmazonCategory {
  name: string
  url: URL
  categoryID: string
}

export interface AmazonSubtitle {
  text: string
  url: URL
}

export interface AmazonVideo {
  durationSeconds: number
  width: number
  height: number
  url: URL
  thumbnailURL: URL
  title: string
}

export interface AmazonSpecification {
  name: string
  value: string
}

export interface AmazonImage extends Image {
  url: URL
  position?: Nullable<number>
  width?: Nullable<number>
  height?: Nullable<number>
}

export interface AmazonProduct extends Product {
  id: string
  marketplace: Marketplace
  title: string
  description: string
  vendor: string
  url: URL
  price?: Nullable<Price>
  isAvailable: boolean
  tags: string[]
  images: Image[]
  variants: Variant[]
  ASIN: string
  titleExcludingVariantName: string
  featureBullets: string[]
  parentID?: Nullable<string>
  protectionPlans: AmazonProtectionPlan[]
  categories: AmazonCategory[]
  ratingsTotal: number
  reviewsTotal: number
  subtitle?: Nullable<AmazonSubtitle>
  videos: AmazonVideo[]
  specifications: AmazonSpecification[]
  color?: Nullable<string>
  manufacturer?: Nullable<string>
  weight?: Nullable<string>
  firstAvailable?: Nullable<Time>
  dimensions?: Nullable<string>
  modelNumber?: Nullable<string>
}

export interface CartResponse {
  cart: Cart
  errors: CartError[]
}

export interface Cart {
  id: string
  stores: Store[]
  buyerIdentity?: Nullable<BuyerIdentity>
  cost?: Nullable<CartCost>
  isShippingRequired?: Nullable<boolean>
}

export interface CartCost {
  subtotal: Price
  tax?: Nullable<Price>
  margin: Price
  shipping?: Nullable<Price>
  total?: Nullable<Price>
  isEstimated: boolean
}

export interface CartError {
  message: string
  code: CartErrorCode
  details?: Nullable<CartErrorDetails>
}

export interface DeletedCart {
  deletedId: string
}

export interface AmazonStoreError {
  message: string
  code: StoreErrorCode
  details?: Nullable<AmazonStoreErrorDetails>
}

export interface AmazonStoreErrorDetails {
  productIds?: Nullable<string[]>
}

export interface ShopifyStoreError {
  message: string
  code: StoreErrorCode
  details?: Nullable<ShopifyStoreErrorDetails>
}

export interface ShopifyStoreErrorDetails {
  variantIds?: Nullable<Nullable<string>[]>
}

export interface AmazonStore {
  store: string
  cartLines: AmazonCartLine[]
  offer?: Nullable<AmazonOffer>
  errors: AmazonStoreError[]
  requestId: string
  isSubmitted: boolean
  shipsToCountries?: Nullable<Country[]>
  isShippingRequired: boolean
}

export interface ShopifyStore {
  store: string
  cartLines: ShopifyCartLine[]
  offer?: Nullable<ShopifyOffer>
  errors: ShopifyStoreError[]
  requestId: string
  isSubmitted: boolean
  shipsToCountries?: Nullable<Country[]>
  isShippingRequired: boolean
}

export interface AmazonCartLine {
  quantity: number
  product: AmazonProduct
}

export interface ShopifyCartLine {
  quantity: number
  variant: ShopifyVariant
}

export interface BuyerIdentity {
  firstName?: Nullable<string>
  lastName?: Nullable<string>
  email?: Nullable<string>
  phone?: Nullable<string>
  address1?: Nullable<string>
  address2?: Nullable<string>
  city?: Nullable<string>
  provinceCode?: Nullable<string>
  countryCode: Country
  postalCode?: Nullable<string>
}

export interface AmazonOffer {
  subtotal?: Nullable<Price>
  margin?: Nullable<Price>
  notAvailableIds: string[]
  shippingMethods: ShippingMethod[]
  selectedShippingMethod?: Nullable<ShippingMethod>
  errors: AmazonOfferError[]
}

export interface ShopifyOffer {
  subtotal?: Nullable<Price>
  margin?: Nullable<Price>
  notAvailableIds: string[]
  shippingMethods: ShippingMethod[]
  selectedShippingMethod?: Nullable<ShippingMethod>
  errors: ShopifyOfferError[]
}

export interface AmazonOfferError {
  code: OfferErrorCode
  message: string
  details?: Nullable<AmazonOfferErrorDetails>
}

export interface ShopifyOfferError {
  code: OfferErrorCode
  message: string
  details?: Nullable<ShopifyOfferErrorDetails>
}

export interface ShopifyOfferErrorDetails {
  variantIds?: Nullable<string[]>
}

export interface AmazonOfferErrorDetails {
  productIds?: Nullable<string[]>
}

export interface ShippingMethod {
  id: string
  label: string
  price?: Nullable<Price>
  taxes?: Nullable<Price>
  total?: Nullable<Price>
}

export interface Price {
  value: number
  currency: Currency
  displayValue: string
}

export interface SubmitCartData {
  id: string
  stores: SubmitStoreResult[]
}

export interface SubmitCartResult {
  cart: SubmitCartData
  errors: SubmitCartResultError[]
}

export interface SubmitStoreResult {
  store: Store
  status?: Nullable<SubmitStoreStatus>
  requestId: string
  isSubmitted: boolean
  errors: SubmitStoreResultError[]
}

export interface SubmitStoreResultError {
  message: string
  code: SubmitStoreResultErrorCode
}

export interface SubmitCartResultError {
  message: string
  code: SubmitCartResultErrorCode
  details?: Nullable<CartErrorDetails>
}

export interface AddressValidationErrorDetails {
  suggestedValue: string
}

export interface ShopifyCollectionsConnection {
  edges: ShopifyCollectionEdge[]
  pageInfo: PageInfo
}

export interface ShopifyCollectionEdge {
  cursor: string
  node: ShopifyCollection
}

export interface ShopifyCollection {
  id: string
  title: string
  description: string
  productsConnection: ShopifyProductsConnection
}

export interface ShopifyMerchantCommissionProposal {
  ratePercent: number
  createdAt: Time
}

export interface ShopifyMerchantCommission {
  currentRatePercent: number
  commissionProposal?: Nullable<ShopifyMerchantCommissionProposal>
}

export interface PageInfo {
  endCursor?: Nullable<string>
  hasNextPage: boolean
  hasPreviousPage: boolean
  startCursor?: Nullable<string>
}

export interface CancelAmazonOrderItem {
  amazonOrderId: string
  status: CancelOrderStatus
  failReason?: Nullable<string>
}

export interface CancelAmazonOrderResult {
  items: CancelAmazonOrderItem[]
}

export interface CancelShopifyOrderResult {
  status: CancelOrderStatus
}

export interface CancelOrderError {
  message: string
  code: CancelOrderErrorCode
}

export interface CancelOrderResponse {
  error?: Nullable<CancelOrderError>
  result?: Nullable<CancelOrderResult>
}

export interface OrderResponse {
  id: string
  states: OrderState[]
}

export interface Order {
  id: string
  status: OrderStatus
  requiredActions: OrderRequiredAction[]
  events: OrderEvent[]
}

export interface CompletePaymentChallenge {
  redirectURL: URL
}

export interface PaymentSucceededOrderEvent extends OrderEvent {
  id: string
  createdAt: Time
}

export interface PaymentFailedOrderEvent extends OrderEvent {
  id: string
  createdAt: Time
}

export interface PaymentRefundedOrderEvent extends OrderEvent {
  id: string
  createdAt: Time
}

export interface OrderSubmissionStartedOrderEvent extends OrderEvent {
  id: string
  createdAt: Time
}

export interface OrderSubmissionSucceededOrderEvent extends OrderEvent {
  id: string
  createdAt: Time
}

export interface OrderPlacedOrderEvent extends OrderEvent {
  id: string
  createdAt: Time
}

export interface OrderFailedOrderEvent extends OrderEvent {
  id: string
  createdAt: Time
  reason: string
}

export interface TrackingObtainedOrderEvent extends OrderEvent {
  id: string
  createdAt: Time
}

export interface OrderCancelSucceededOrderEvent extends OrderEvent {
  id: string
  createdAt: Time
}

export interface OrderCancelStartedOrderEvent extends OrderEvent {
  id: string
  createdAt: Time
}

export interface OrderCancelFailedOrderEvent extends OrderEvent {
  id: string
  createdAt: Time
  reason: string
}

export interface OrderState {
  id: string
  createdAt: Time
  state: OrderStateEnum
}

export interface Checkout {
  cart: Cart
  status: CheckoutStatus
  orders: Order[]
}

export interface ProductOption {
  name: string
  position: number
  values?: Nullable<string[]>
}

export interface ShopifyProductsConnection {
  edges: ShopifyProductEdge[]
  pageInfo: PageInfo
}

export interface ShopifyProductEdge {
  cursor: string
  node: ShopifyProduct
}

export interface RequestProductResponse {
  productID: string
}

export interface RequestStoreResponse {
  requestID: string
}

export interface IQuery {
  getCart(id: string): CartResponse | Promise<CartResponse>
  integratedShopifyStore(
    canonicalDomain: string
  ):
    | Nullable<IntegratedShopifyStore>
    | Promise<Nullable<IntegratedShopifyStore>>
  shopifyCollection(
    id: string
  ): Nullable<ShopifyCollection> | Promise<Nullable<ShopifyCollection>>
  order(input: OrderInput): OrderResponse | Promise<OrderResponse>
  orderByID(id: string): Nullable<Order> | Promise<Nullable<Order>>
  checkoutByCartID(
    cartID: string
  ): Nullable<Checkout> | Promise<Nullable<Checkout>>
  shopifyApp(): ShopifyApp | Promise<ShopifyApp>
  environmentToken():
    | EnvironmentTokenResponse
    | Promise<EnvironmentTokenResponse>
  productByID(
    input: ProductByIDInput
  ): Nullable<Product> | Promise<Nullable<Product>>
  productsByDomainV2(
    input: productsByDomainInput,
    pagination: OffsetPaginationInput
  ): Product[] | Promise<Product[]>
}

export interface IMutation {
  createCart(input: CartCreateInput): CartResponse | Promise<CartResponse>
  submitCart(
    input: CartSubmitInput
  ): SubmitCartResult | Promise<SubmitCartResult>
  removeCart(input: CartDeleteInput): DeletedCart | Promise<DeletedCart>
  updateCartBuyerIdentity(
    input: CartBuyerIdentityUpdateInput
  ): CartResponse | Promise<CartResponse>
  updateCartItems(
    input: CartItemsUpdateInput
  ): CartResponse | Promise<CartResponse>
  addCartItems(input: CartItemsAddInput): CartResponse | Promise<CartResponse>
  deleteCartItems(
    input: CartItemsDeleteInput
  ): CartResponse | Promise<CartResponse>
  updateCartSelectedShippingOptions(
    input: UpdateCartSelectedShippingOptionsInput
  ): CartResponse | Promise<CartResponse>
  proposeShopifyMerchantCommission(
    input: ProposeShopifyMerchantCommissionInput
  ): ShopifyMerchantCommission | Promise<ShopifyMerchantCommission>
  requestProductByURL(
    input: RequestProductByURLInput
  ): RequestProductResponse | Promise<RequestProductResponse>
  requestStoreByURL(
    input: RequestStoreByURLInput
  ): RequestStoreResponse | Promise<RequestStoreResponse>
  cancelOrder(
    input: CancelOrderInput
  ): CancelOrderResponse | Promise<CancelOrderResponse>
}

export interface ShopifyImage extends Image {
  url: URL
  position: number
  width: number
  height: number
  id: string
  variantIDs: string[]
  createdAt: Time
  updatedAt: Time
}

export interface ShopifyVariant extends Variant {
  title: string
  name: string
  image: Image
  id: string
  isAvailable: boolean
  compareAtPrice: string
  price: string
  isShippingRequired: boolean
  SKU: string
  isTaxable: boolean
  weight: number
  option1?: Nullable<string>
  option2?: Nullable<string>
  option3?: Nullable<string>
}

export interface ShopifyProduct extends Product {
  id: string
  marketplace: Marketplace
  title: string
  description: string
  vendor: string
  url: URL
  price?: Nullable<Price>
  isAvailable: boolean
  tags: string[]
  images: Image[]
  variants: Variant[]
  descriptionHTML: string
  collectionHandle: string
  handle: string
  maxPrice: number
  minPrice: number
  productType: string
  createdAt: Time
  publishedAt: Time
  storeCanonicalURL: URL
  storeDomain: string
  options?: Nullable<ProductOption[]>
  reviewsConnection?: Nullable<ShopifyProductReviewsConnection>
}

export interface ShopifyProductReviewsConnection {
  edges: ShopifyProductReviewEdge[]
  pageInfo: PageInfo
}

export interface ShopifyProductReviewEdge {
  cursor: string
  node: ShopifyProductReview
}

export interface ShopifyProductReview {
  id: string
  body?: Nullable<string>
  helpfulnessCount: number
  rating: number
  submittedAt: Time
  reviewerDisplayName?: Nullable<string>
  merchantReply?: Nullable<string>
}

export interface ShopifyApp {
  installationLink: ShopifyAppInstallationLink
}

export interface ShopifyAppInstallationLink {
  url: URL
}

export interface EnvironmentTokenResponse {
  token: string
}

export interface IntegratedShopifyStore {
  canonicalDomain: string
  productsByIDs: Nullable<ShopifyProduct>[]
  collectionsConnection: ShopifyCollectionsConnection
  commission: ShopifyMerchantCommission
}

export type Time = any
export type URL = any
export type Store = AmazonStore | ShopifyStore
export type CartLine = ShopifyCartLine | AmazonCartLine
export type CartErrorDetails = AddressValidationErrorDetails
export type CancelOrderResult =
  | CancelShopifyOrderResult
  | CancelAmazonOrderResult
export type OrderRequiredAction = CompletePaymentChallenge
type Nullable<T> = T | null
