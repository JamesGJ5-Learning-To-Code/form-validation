import GenericValidator from './genericValidator';

export default class EmailValidator extends GenericValidator {
  constructor(control, errorMessageDisplayer) {
    super(control, errorMessageDisplayer);
    this.messageWhenInvalid = 'A valid email address is required';
  }
}
