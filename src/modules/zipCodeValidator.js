import GenericValidator from './genericValidator';
import { countryZipCodeMap } from './countryZipCodeMap';

export default class ZipCodeValidator extends GenericValidator {
  constructor(control, errorMessageSpan) {
    super(control, errorMessageSpan);
    this.messageWhenInvalid = 'A valid zip code for the selected country is required';
    this.countryZipCodeMap = countryZipCodeMap;
  }

  doValidityChecks() {
    const zipCode = this.control.value;
    const country = this.getCountry();
    this.checkPattern(country, zipCode);
    super.doValidityChecks();
  }

  getCountry() {
    const form = this.control.closest('form');
    const countryControl = form.querySelector('.country');
    return countryControl.value;
  }

  checkPattern(country, zipCode) {
    if (country in this.countryZipCodeMap) {
      const constraint = new RegExp(this.countryZipCodeMap[country]);
      if (constraint.test(zipCode)) {
        this.control.setCustomValidity('');
      } else {
        this.control.setCustomValidity(this.messageWhenInvalid);
      }
    }
  }
}
