import GenericValidator from './genericValidator';

export default class CountryValidator extends GenericValidator {
  constructor(select, errorMessageDisplayer) {
    super(select, errorMessageDisplayer);
    this.messageWhenInvalid = 'A country selection is required';
  }
}
