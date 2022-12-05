import ErrorHandler from './errorHandler';

export default class ZipCodeValidator {
  constructor(input, errorMessageDisplayer) {
    this.input = input;
    this.errorHandler = new ErrorHandler(errorMessageDisplayer);
  }
}
