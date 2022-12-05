import ErrorHandler from './errorHandler';

export default class CountryValidator {
  constructor(input, errorMessageDisplayer) {
    this.input = input;
    this.errorHandler = new ErrorHandler(errorMessageDisplayer);
  }
}
