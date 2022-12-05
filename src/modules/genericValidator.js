import ErrorHandler from './errorHandler';

export default class GenericValidator {
  constructor(input, errorMessageDisplayer) {
    this.input = input;
    this.messageWhenInvalid = 'Invalid';
    this.errorHandler = new ErrorHandler(errorMessageDisplayer);

    this.initialiseInput();
  }

  initialiseInput() {
    this.doValidityChecks = this.doValidityChecks.bind(this);
    this.input.addEventListener('focus', this.doValidityChecks);
    this.input.addEventListener('input', this.doValidityChecks);
  }

  doValidityChecks() {
    if (!this.input.checkValidity()) {
      this.displayError();
    } else {
      this.cancelError();
    }
  }

  displayError() {
    this.errorHandler.errorMessage = this.messageWhenInvalid;
  }

  cancelError() {
    this.errorHandler.errorMessage = '';
  }
}
