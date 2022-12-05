import GenericValidator from './genericValidator';

export default class CountryValidator extends GenericValidator {
  constructor(control, errorMessageDisplayer) {
    super(control, errorMessageDisplayer);
    this.messageWhenInvalid = 'A country selection is required';
  }
}
