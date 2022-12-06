import EmailValidator from './emailValidator';
import CountryValidator from './countryValidator';
import ZipCodeValidator from './zipCodeValidator';
import PasswordValidator from './passwordValidator';
import ConfirmPasswordValidator from './confirmPasswordValidator';
import SubmissionGate from './submissionGate';

export default class UI {
  static validatedElements = [];

  static loadValidators() {
    UI.processInput('email');
    UI.processInput('country');
    UI.processInput('zip-code');
    UI.processInput('password');
    UI.processInput('confirm-password');
  }

  static processInput(inputID) {
    const inputProcessed = document.getElementById(inputID);
    const errorMessageSpan = document.getElementById(`${inputID}-error-message`);
    UI.validatedElements.push(inputProcessed);
    switch (inputID) {
      case 'email':
        UI.loadEmailValidator(inputProcessed, errorMessageSpan);
        break;
      case 'country':
        UI.loadCountryValidator(inputProcessed, errorMessageSpan);
        break;
      case 'zip-code':
        UI.loadZipCodeValidator(inputProcessed, errorMessageSpan);
        break;
      case 'password':
        UI.loadPasswordValidator(inputProcessed, errorMessageSpan);
        break;
      case 'confirm-password':
        const passwordInput = document.getElementById('password');
        UI.loadConfirmPasswordValidator(
          inputProcessed, 
          passwordInput, 
          errorMessageSpan
        );
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
