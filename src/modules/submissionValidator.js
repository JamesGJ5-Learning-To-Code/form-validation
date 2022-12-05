import ErrorHandler from './errorHandler';

export default class SubmissionValidator {
  constructor(submissionButton, errorMessageSpan, validatorList) {
    this.submissionButton = submissionButton;
    this.errorMessageSpan = errorMessageSpan;
    this.validatorList = validatorList;
  }
}
