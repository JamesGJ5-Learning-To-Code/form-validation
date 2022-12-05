const countryZipCodeMap = {
  ch: '^(CH-)?\\d{4}$',
  fr: '^(F-)?\\d{5}$',
  de: '^(D-)?\\d{5}$',
  nl: '^(NL-)?\\d{4}\\s*([A-RT-Z][A-Z]|S[BCE-RT-Z])$',
};

module.exports = {
  countryZipCodeMap,
};
