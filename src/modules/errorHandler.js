export default class ErrorHandler {
  constructor(errorMessageDisplayer) {
    this.errorMessageDisplayer = errorMessageDisplayer;
  }

  set errorMessage(value) {
    this.displayErrorMessage(value);
    if (value) {
      this.activate();
    } else {
      this.deactivate();
    }
  }

  displayErrorMessage(message) {
    this.errorMessageDisplayer.textContent = message;
  };

  activate() {
    // console.log(this);
    // console.log(this.errorMessageDisplayer);
    this.errorMessageDisplayer.classList.add('active');
  }

  deactivate() {
    this.errorMessageDisplayer.classList.remove('active');
  }
}
