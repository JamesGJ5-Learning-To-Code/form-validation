import GenericValidator from './genericValidator';

export default class ConfirmPasswordValidator extends GenericValidator {
  constructor(confirmPasswordInput, passwordInput, errorMessageSpan) {
    super(confirmPasswordInput, errorMessageSpan);
    this.messageWhenInvalid = 'The passwords do not match';
    this.passwordInput = passwordInput;
  }

  doValidityChecks() {
    if (this.control.value === this.passwordInput.value) {
      this.control.setCustomValidity('');
    } else {
      this.control.setCustomValidity(this.messageWhenInvalid);
    }
    super.doValidityChecks();
  }
}
