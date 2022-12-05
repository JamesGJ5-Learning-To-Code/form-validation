export class EmailValidator {
  constructor(input, errorMessageDisplayer) {
    this.input = input;
    this.errorHandler = new ErrorHandler(errorMessageDisplayer);
  }
}

export class CountryValidator {
  constructor(input, errorMessageDisplayer) {
    this.input = input;
    this.errorHandler = new ErrorHandler(errorMessageDisplayer);
  }
}
