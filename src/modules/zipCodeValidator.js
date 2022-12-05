import GenericValidator from './genericValidator';

export default class ZipCodeValidator extends GenericValidator {
  constructor(control, errorMessageSpan) {
    super(control, errorMessageSpan);
    this.messageWhenInvalid = 'A valid zip code for the selected country is required';
  }
}
