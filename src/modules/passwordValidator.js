import GenericValidator from './genericValidator';

export default class PasswordValidator extends GenericValidator {
  constructor(passwordInput, errorMessageSpan) {
    super(passwordInput, errorMessageSpan);
    // TODO: clarify what the special characters are
    this.messageWhenInvalid =
      'An 8-16 character password is required with at least one of each of: a digit, a lowercase letter, an uppercase letter and a special character.';
  }
}
