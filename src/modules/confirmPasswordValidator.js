import ErrorHandler from './errorHandler';

export default class ConfirmPasswordValidator {
  constructor(confirmPasswordInput, passwordInput, errorMessageDisplayer) {
    this.confirmPasswordInput = confirmPasswordInput;
    this.passwordInput = passwordInput;
    this.errorHandler = new ErrorHandler(errorMessageDisplayer);
  }
}
