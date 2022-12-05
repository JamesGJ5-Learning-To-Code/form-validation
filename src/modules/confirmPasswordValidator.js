import GenericValidator from './genericValidator';

export default class ConfirmPasswordValidator extends GenericValidator {
  constructor(confirmPasswordInput, passwordInput, errorMessageSpan) {
    super(confirmPasswordInput, errorMessageSpan);
    this.messageWhenInvalid = 'The passwords do not match';
    this.passwordInput = passwordInput;
  }
}
