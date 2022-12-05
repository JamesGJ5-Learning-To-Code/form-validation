import ErrorHandler from "./errorHandler";

export default class CountryValidator {
  constructor(select, errorMessageDisplayer) {
    this.select = select;
    this.errorHandler = new ErrorHandler(errorMessageDisplayer);
  }
}
