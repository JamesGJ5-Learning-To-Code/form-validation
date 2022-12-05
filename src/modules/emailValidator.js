import GenericValidator from './genericValidator';

export default class EmailValidator extends GenericValidator {
  constructor(input, errorMessageDisplayer) {
    super(input, errorMessageDisplayer);
    this.messageWhenInvalid = 'A valid email address is required';
  }
}
