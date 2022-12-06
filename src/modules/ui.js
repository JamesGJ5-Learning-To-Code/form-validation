import EmailValidator from './emailValidator';
import CountryValidator from './countryValidator';
import ZipCodeValidator from './zipCodeValidator';
import PasswordValidator from './passwordValidator';
import ConfirmPasswordValidator from './confirmPasswordValidator';
import SubmissionGate from './submissionGate';

export default class UI {
  static validatedElements = [];

  static loadValidators() {
    const emailInput = document.getElementById('email');
    const emailErrorMessageSpan = document.getElementById('email-error-message');
    UI.validatedElements.push(emailInput);
    UI.loadEmailValidator(emailInput, emailErrorMessageSpan);

    const countryInput = document.getElementById('country');
    const countryErrorMessageSpan = document.getElementById('country-error-message');
    UI.validatedElements.push(countryInput);
    UI.loadCountryValidator(countryInput, countryErrorMessageSpan);

    const zipCodeInput = document.getElementById('zip-code');
    const zipCodeErrorMessageSpan = document.getElementById('zip-code-error-message');
    UI.validatedElements.push(zipCodeInput);
    UI.loadZipCodeValidator(zipCodeInput, zipCodeErrorMessageSpan);

    const passwordInput = document.getElementById('password');
    const passwordInputErrorMessageSpan = document.getElementById('password-error-message');
    UI.validatedElements.push(passwordInput);
    UI.loadPasswordValidator(passwordInput, passwordInputErrorMessageSpan);
    
    const confirmPasswordInput = document.getElementById('confirm-password');
    const confirmPasswordErrorMessageSpan = document.getElementById(
      'confirm-password-error-message'
    );
    UI.validatedElements.push(confirmPasswordInput);
    UI.loadConfirmPasswordValidator(
      confirmPasswordInput,
      passwordInput,
      confirmPasswordErrorMessageSpan
    );
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
    const submissionValidator = new SubmissionValidator(submissionButton, errorMessageSpan, UI.validatorList);
    // TODO: disable the below return if possible
    return submissionValidator;
  }
}
