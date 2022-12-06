// import ErrorHandler from './errorHandler';
// import GenericValidator from './genericValidator';

// export default class SubmissionValidator extends GenericValidator {
//   constructor(submissionButton, errorMessageSpan, validatorList) {
//     // this.submissionButton = submissionButton;
//     // this.errorMessageSpan = errorMessageSpan;
//     super(submissionButton, errorMessageSpan);
//     this.messageWhenInvalid = 'There are some missing/invalid inputs...';
//     this.validatorList = validatorList;

//     this.initialiseControl();
//   }

//   initialiseControl() {
//     this.doValidityChecks = this.doValidityChecks.bind(this);
//     console.log("Hello");
//     this.control.addEventListener('click', (e) => this.doValidityChecks(e));
//   }

//   doValidityChecks(event) {
//     // console.log("Hello")
//     event.preventDefault();
//     const controlIsValid = (validator) => validator.control.checkValidity();
//     if (!this.validatorList.every(controlIsValid)) {
//       this.displayError();
//       event.preventDefault();
//     }
//   }
// }

// console.log("Hello")

import ErrorHandler from './errorHandler';

export default class SubmissionGate {
  constructor(submissionButton, validatedElements, errorMessageDisplayer) {
    this.submissionButton = submissionButton;
    this.validatedElements = validatedElements;
    this.errorHandler = new ErrorHandler(errorMessageDisplayer);
  }
}
