import ErrorHandler from './errorHandler';

export default class GenericValidator {
  constructor(control, errorMessageDisplayer) {
    this.control = control;
    this.messageWhenInvalid = 'Invalid';
    this.errorHandler = new ErrorHandler(errorMessageDisplayer);

    this.initialiseControl();
  }

  initialiseControl() {
    this.doValidityChecks = this.doValidityChecks.bind(this);
    this.control.addEventListener('focus', this.doValidityChecks);
    this.control.addEventListener('control', this.doValidityChecks);
  }

  doValidityChecks() {
    if (!this.control.checkValidity()) {
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
