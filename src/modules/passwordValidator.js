import ErrorHandler from './errorHandler';

export default class PasswordValidator {
  constructor(input, errorMessageDisplayer) {
    this.input = input;
    this.errorHandler = new ErrorHandler(errorMessageDisplayer);
  }
}
