import EmailValidator from './emailValidator';
import CountryValidator from './countryValidator';
import ZipCodeValidator from './zipCodeValidator';
import PasswordValidator from './passwordValidator';
import ConfirmPasswordValidator from './confirmPasswordValidator';
import SubmissionGate from './submissionGate';

export default class UI {
  static validatedElements = [];

  static loadTools() {
    UI.processElement('email');
    UI.processElement('country');
    UI.processElement('zip-code');
    UI.processElement('password');
    UI.processElement('confirm-password');
    UI.processElement('submit');
  }

  static processElement(elementID) {
    const elementProcessed = document.getElementById(elementID);
    const errorMessageSpan = document.getElementById(`${elementID}-error-message`);
    switch (elementID) {
      case 'email':
        UI.validatedElements.push(elementProcessed);
        UI.loadEmailValidator(elementProcessed, errorMessageSpan);
        break;
      case 'country':
        UI.validatedElements.push(elementProcessed);
        UI.loadCountryValidator(elementProcessed, errorMessageSpan);
        break;
      case 'zip-code':
        UI.validatedElements.push(elementProcessed);
        UI.loadZipCodeValidator(elementProcessed, errorMessageSpan);
        break;
      case 'password':
        UI.validatedElements.push(elementProcessed);
        UI.loadPasswordValidator(elementProcessed, errorMessageSpan);
        break;
      case 'confirm-password':
        UI.validatedElements.push(elementProcessed);
        const passwordInput = document.getElementById('password');
        UI.loadConfirmPasswordValidator(
          elementProcessed, 
          passwordInput, 
          errorMessageSpan
        );
        break;
      case 'submit':
        UI.loadSubmissionGate(elementProcessed, errorMessageSpan);
        break;
    }
  }

  static loadEmailValidator(input, errorMessageSpan) {
    const emailValidator = new EmailValidator(input, errorMessageSpan);
  }

  static loadCountryValidator(select, errorMessageSpan) {
    const countryValidator = new CountryValidator(select, errorMessageSpan);
  }

  static loadZipCodeValidator(input, errorMessageSpan) {
    const zipCodeValidator = new ZipCodeValidator(input, errorMessageSpan);
  }

  static loadPasswordValidator(input, errorMessageSpan) {
    const passwordValidator = new PasswordValidator(input, errorMessageSpan);
  }

  static loadConfirmPasswordValidator(confirmPasswordInput, passwordInput, errorMessageSpan) {
    const confirmPasswordValidator = new ConfirmPasswordValidator(
      confirmPasswordInput,
      passwordInput,
      errorMessageSpan
    );
  }

  static loadSubmissionGate(submissionButton, errorMessageSpan) {
    const submissionGate = new SubmissionGate(
      submissionButton,
      UI.validatedElements,
      errorMessageSpan
    );
  }
}
