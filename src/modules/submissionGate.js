import ErrorHandler from './errorHandler';

export default class SubmissionGate {
  constructor(submissionButton, validatedElements, errorMessageDisplayer) {
    this.submissionButton = submissionButton;
    this.validatedElements = validatedElements;
    this.messageWhenInvalid = 'Some fields are not filled in or are invalid';
    this.errorHandler = new ErrorHandler(errorMessageDisplayer);

    this.initialiseSubmissionButton();
  }

  initialiseSubmissionButton() {
    this.doValidityChecks = this.doValidityChecks.bind(this);
    this.submissionButton.addEventListener('click', (event) => this.doValidityChecks(event));
  }

  doValidityChecks(event) {
    if (!this.validatedElements.every((element) => element.checkValidity())) {
      this.displayError();
      event.preventDefault();
    }
  }

  displayError() {
    this.errorHandler.errorMessage = this.messageWhenInvalid;
  }

  cancelError() {
    this.errorHandler.errorMessage = '';
  }
}
