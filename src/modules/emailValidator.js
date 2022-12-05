import ErrorHandler from './errorHandler';

export default class EmailValidator {
  constructor(input, errorMessageDisplayer) {
    this.input = input;
    this.errorHandler = new ErrorHandler(errorMessageDisplayer);
  }
}
