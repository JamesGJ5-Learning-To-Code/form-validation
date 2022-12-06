import GenericValidator from './genericValidator';
import { countryZipCodeMap } from './countryZipCodeMap';

export default class ZipCodeValidator extends GenericValidator {
  // TODO: make a countrySelect (or countryControl) a parameter, so don't have to find the input later
  constructor(control, errorMessageSpan) {
    super(control, errorMessageSpan);
    this.messageWhenInvalid = 'A valid zip code is required';
    this.countryZipCodeMap = countryZipCodeMap;

    this.activateCountryChangeDetector();
  }

  doValidityChecks() {
    const zipCode = this.control.value;
    const country = this.getCountry();
    this.checkPattern(country, zipCode);
    super.doValidityChecks();
  }

  getCountry() {
    const countryControl = this.getCountryControl();
    return countryControl.value;
  }

  getCountryControl() {
    const form = this.control.closest('form');
    return form.querySelector('.country');
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

  activateCountryChangeDetector() {
    const countryControl = this.getCountryControl();
    if (countryControl) {
      this.doValidityChecks = this.doValidityChecks.bind(this);
      countryControl.addEventListener('input', this.doValidityChecks);
    }
  }
}
