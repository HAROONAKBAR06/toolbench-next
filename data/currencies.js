// Reference currency data for the currency converter pair pages.
//
// Shape matches the unit entries in data/units.js on purpose: { label, short,
// slug, factor }. `factor` is the approximate value of 1 unit of that
// currency expressed in US dollars, so the same base/factor math used for
// physical units works for currency too:
//
//   convertValue("currency", from, to, amount) === amount * from.factor / to.factor
//
// IMPORTANT: these factors are a static reference snapshot, NOT a live feed.
// They exist so every currency page can render a conversion table and worked
// examples at build time (and so the converter still works if the live rate
// request fails). The actual on-page calculator (CurrencyConverter.jsx)
// fetches a live rate client-side and only falls back to this table if that
// request fails. Update SNAPSHOT_DATE and the factors below periodically —
// once every few weeks is plenty, since they're a fallback, not the primary
// source of truth.
export const SNAPSHOT_DATE = "2026-09-01";

export const CURRENCIES = {
  usd: { code: "USD", label: "US Dollar",         short: "$",    slug: "usd", factor: 1 },
  eur: { code: "EUR", label: "Euro",               short: "€",    slug: "eur", factor: 1.08 },
  gbp: { code: "GBP", label: "British Pound",      short: "£",    slug: "gbp", factor: 1.27 },
  jpy: { code: "JPY", label: "Japanese Yen",       short: "¥",    slug: "jpy", factor: 0.0067 },
  aud: { code: "AUD", label: "Australian Dollar",  short: "A$",   slug: "aud", factor: 0.66 },
  cad: { code: "CAD", label: "Canadian Dollar",    short: "C$",   slug: "cad", factor: 0.74 },
  chf: { code: "CHF", label: "Swiss Franc",        short: "Fr",   slug: "chf", factor: 1.13 },
  cny: { code: "CNY", label: "Chinese Yuan",       short: "¥",    slug: "cny", factor: 0.14 },
  hkd: { code: "HKD", label: "Hong Kong Dollar",   short: "HK$",  slug: "hkd", factor: 0.128 },
  nzd: { code: "NZD", label: "New Zealand Dollar", short: "NZ$",  slug: "nzd", factor: 0.61 },
  sek: { code: "SEK", label: "Swedish Krona",      short: "kr",   slug: "sek", factor: 0.096 },
  krw: { code: "KRW", label: "South Korean Won",   short: "₩",    slug: "krw", factor: 0.00073 },
  sgd: { code: "SGD", label: "Singapore Dollar",   short: "S$",   slug: "sgd", factor: 0.75 },
  nok: { code: "NOK", label: "Norwegian Krone",    short: "kr",   slug: "nok", factor: 0.094 },
  mxn: { code: "MXN", label: "Mexican Peso",       short: "$",    slug: "mxn", factor: 0.058 },
  inr: { code: "INR", label: "Indian Rupee",       short: "₹",    slug: "inr", factor: 0.012 },
  rub: { code: "RUB", label: "Russian Ruble",      short: "₽",    slug: "rub", factor: 0.0105 },
  zar: { code: "ZAR", label: "South African Rand", short: "R",    slug: "zar", factor: 0.055 },
  try: { code: "TRY", label: "Turkish Lira",       short: "₺",    slug: "try", factor: 0.030 },
  brl: { code: "BRL", label: "Brazilian Real",     short: "R$",   slug: "brl", factor: 0.20 },
  twd: { code: "TWD", label: "Taiwan Dollar",      short: "NT$",  slug: "twd", factor: 0.031 },
  dkk: { code: "DKK", label: "Danish Krone",       short: "kr",   slug: "dkk", factor: 0.145 },
  pln: { code: "PLN", label: "Polish Zloty",       short: "zł",   slug: "pln", factor: 0.25 },
  thb: { code: "THB", label: "Thai Baht",          short: "฿",    slug: "thb", factor: 0.028 },
  idr: { code: "IDR", label: "Indonesian Rupiah",  short: "Rp",   slug: "idr", factor: 0.000063 },
  huf: { code: "HUF", label: "Hungarian Forint",   short: "Ft",   slug: "huf", factor: 0.0028 },
  czk: { code: "CZK", label: "Czech Koruna",       short: "Kč",   slug: "czk", factor: 0.043 },
  ils: { code: "ILS", label: "Israeli Shekel",     short: "₪",    slug: "ils", factor: 0.27 },
  clp: { code: "CLP", label: "Chilean Peso",       short: "$",    slug: "clp", factor: 0.00105 },
  php: { code: "PHP", label: "Philippine Peso",    short: "₱",    slug: "php", factor: 0.0177 },
  aed: { code: "AED", label: "UAE Dirham",         short: "د.إ",  slug: "aed", factor: 0.2723 },
  sar: { code: "SAR", label: "Saudi Riyal",        short: "﷼",   slug: "sar", factor: 0.2666 },
  myr: { code: "MYR", label: "Malaysian Ringgit",  short: "RM",   slug: "myr", factor: 0.21 },
  ron: { code: "RON", label: "Romanian Leu",       short: "lei",  slug: "ron", factor: 0.217 },
  cop: { code: "COP", label: "Colombian Peso",     short: "$",    slug: "cop", factor: 0.00025 },
  pkr: { code: "PKR", label: "Pakistani Rupee",    short: "₨",    slug: "pkr", factor: 0.0036 },
  bdt: { code: "BDT", label: "Bangladeshi Taka",   short: "৳",    slug: "bdt", factor: 0.0091 },
  vnd: { code: "VND", label: "Vietnamese Dong",    short: "₫",    slug: "vnd", factor: 0.00004 },
  egp: { code: "EGP", label: "Egyptian Pound",     short: "£",    slug: "egp", factor: 0.0204 },
  ngn: { code: "NGN", label: "Nigerian Naira",     short: "₦",    slug: "ngn", factor: 0.00067 },
  ars: { code: "ARS", label: "Argentine Peso",     short: "$",    slug: "ars", factor: 0.00102 },
  uah: { code: "UAH", label: "Ukrainian Hryvnia",  short: "₴",    slug: "uah", factor: 0.024 },
  kzt: { code: "KZT", label: "Kazakhstani Tenge",  short: "₸",    slug: "kzt", factor: 0.0021 },
  qar: { code: "QAR", label: "Qatari Riyal",       short: "﷼",   slug: "qar", factor: 0.2747 },
  kwd: { code: "KWD", label: "Kuwaiti Dinar",      short: "د.ك",  slug: "kwd", factor: 3.25 },
  bhd: { code: "BHD", label: "Bahraini Dinar",     short: ".د.ب", slug: "bhd", factor: 2.65 },
  omr: { code: "OMR", label: "Omani Rial",         short: "﷼",   slug: "omr", factor: 2.60 },
  jod: { code: "JOD", label: "Jordanian Dinar",    short: "د.ا",  slug: "jod", factor: 1.41 },
  lkr: { code: "LKR", label: "Sri Lankan Rupee",   short: "Rs",   slug: "lkr", factor: 0.0031 },
  mad: { code: "MAD", label: "Moroccan Dirham",    short: "د.م.", slug: "mad", factor: 0.099 },
  dzd: { code: "DZD", label: "Algerian Dinar",     short: "د.ج",  slug: "dzd", factor: 0.0074 },
  tnd: { code: "TND", label: "Tunisian Dinar",     short: "د.ت",  slug: "tnd", factor: 0.32 },
  ghs: { code: "GHS", label: "Ghanaian Cedi",      short: "₵",    slug: "ghs", factor: 0.068 },
  kes: { code: "KES", label: "Kenyan Shilling",    short: "KSh",  slug: "kes", factor: 0.0067 },
  tzs: { code: "TZS", label: "Tanzanian Shilling", short: "TSh",  slug: "tzs", factor: 0.0004 },
  ugx: { code: "UGX", label: "Ugandan Shilling",   short: "USh",  slug: "ugx", factor: 0.00027 },
  xof: { code: "XOF", label: "West African CFA Franc", short: "CFA", slug: "xof", factor: 0.00165 },
  xaf: { code: "XAF", label: "Central African CFA Franc", short: "FCFA", slug: "xaf", factor: 0.00165 },
  isk: { code: "ISK", label: "Icelandic Krona",    short: "kr",   slug: "isk", factor: 0.0072 },
  bgn: { code: "BGN", label: "Bulgarian Lev",      short: "лв",   slug: "bgn", factor: 0.554 },
  rsd: { code: "RSD", label: "Serbian Dinar",      short: "дин.", slug: "rsd", factor: 0.0092 },
  etb: { code: "ETB", label: "Ethiopian Birr",     short: "Br",   slug: "etb", factor: 0.0077 },
  iqd: { code: "IQD", label: "Iraqi Dinar",        short: "ع.د",  slug: "iqd", factor: 0.000763 },
  lbp: { code: "LBP", label: "Lebanese Pound",     short: "ل.ل",  slug: "lbp", factor: 0.0000112 },
  jmd: { code: "JMD", label: "Jamaican Dollar",    short: "J$",   slug: "jmd", factor: 0.0064 },
  ttd: { code: "TTD", label: "Trinidad & Tobago Dollar", short: "TT$", slug: "ttd", factor: 0.147 },
  bob: { code: "BOB", label: "Bolivian Boliviano", short: "Bs",   slug: "bob", factor: 0.144 },
  pen: { code: "PEN", label: "Peruvian Sol",       short: "S/",   slug: "pen", factor: 0.27 },
};

// value*from.factor gives USD, /to.factor gives the target currency.
export function convertCurrency(fromKey, toKey, value) {
  const from = CURRENCIES[fromKey];
  const to = CURRENCIES[toKey];
  if (!from || !to || Number.isNaN(value)) return null;
  const usd = value * from.factor;
  return usd / to.factor;
}
