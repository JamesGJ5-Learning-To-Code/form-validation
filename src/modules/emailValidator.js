import ErrorHandler from './errorHandler';

export default class EmailValidator {
  constructor(input, errorMessageDisplayer) {
    this.input = input;
    this.messageWhenInvalid = 'A valid email address is required';
    this.errorHandler = new ErrorHandler(errorMessageDisplayer);

    this.initialiseInput();
  }

  initialiseInput() {
    this.doValidityChecks = this.doValidityChecks.bind(this);
    this.input.addEventListener('focus', this.doValidityChecks);
    // this.input.addEventListener('input', this.doValidityChecks)
  }

  doValidityChecks() {
    if (!this.input.checkValidity()) {
      this.displayError();
    };
  }

  displayError() {
    this.errorHandler.errorMessage = this.messageWhenInvalid;
  }
}
