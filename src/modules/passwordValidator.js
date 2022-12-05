import GenericValidator from './genericValidator';

export default class PasswordValidator extends GenericValidator {
  constructor(passwordInput, errorMessageSpan) {
    super(passwordInput, errorMessageSpan);
    this.messageWhenInvalid =
      'A password with at least one digit, at least one lowercase letter, at \
        least one uppercase letter and a special character is required';
  }
}
