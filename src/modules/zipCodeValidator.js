import GenericValidator from './genericValidator';

export default class ZipCodeValidator extends GenericValidator {
  constructor(input, errorMessageSpan) {
    super(input, errorMessageSpan);
    this.messageWhenInvalid = 'A valid zip code for the selected country is required';
  }
}
