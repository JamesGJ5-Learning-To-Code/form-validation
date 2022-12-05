import GenericValidator from './genericValidator';

export default class ConfirmPasswordValidator extends GenericValidator {
  constructor(confirmPasswordInput, passwordInput, errorMessageSpan) {
    super(confirmPasswordInput, passwordInput, errorMessageSpan);
    this.messageWhenInvalid = 'The passwords do not match';
  }
}
