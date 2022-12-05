import EmailValidator from './emailValidator';
import CountryValidator from './countryValidator';
import ZipCodeValidator from './zipCodeValidator';
import PasswordValidator from './passwordValidator';
import ConfirmPasswordValidator from './confirmPasswordValidator';

export default class UI {
  static validatorList = [];

  static loadValidators() {
    const emailInput = document.getElementById('email');
    const emailErrorMessageSpan = document.getElementById('email-error-message');
    UI.loadEmailValidator(emailInput, emailErrorMessageSpan);

    const countryInput = document.getElementById('country');
    const countryErrorMessageSpan = document.getElementById('country-error-message');
    UI.loadCountryValidator(countryInput, countryErrorMessageSpan);

    const zipCodeInput = document.getElementById('zip-code');
    const zipCodeErrorMessageSpan = document.getElementById('zip-code-error-message');
    UI.loadZipCodeValidator(zipCodeInput, zipCodeErrorMessageSpan);

    const passwordInput = document.getElementById('password');
    const passwordInputErrorMessageSpan = document.getElementById('password-error-message');
    UI.loadPasswordValidator(passwordInput, passwordInputErrorMessageSpan);
    
    const confirmPasswordInput = document.getElementById('confirm-password');
    const confirmPasswordErrorMessageSpan = document.getElementById(
      'confirm-password-error-message'
    );
    UI.loadConfirmPasswordValidator(
      confirmPasswordInput,
      passwordInput,
      confirmPasswordErrorMessageSpan
    );
  }

  static loadEmailValidator(input, errorMessageSpan) {
    const emailValidator = new EmailValidator(input, errorMessageSpan);
    UI.validatorList.push(emailValidator);
  }

  static loadCountryValidator(select, errorMessageSpan) {
    const countryValidator = new CountryValidator(select, errorMessageSpan);
    UI.validatorList.push(countryValidator);
  }

  static loadZipCodeValidator(input, errorMessageSpan) {
    const zipCodeValidator = new ZipCodeValidator(input, errorMessageSpan);
    UI.validatorList.push(zipCodeValidator);
  }

  static loadPasswordValidator(input, errorMessageSpan) {
    const passwordValidator = new PasswordValidator(input, errorMessageSpan);
    UI.validatorList.push(passwordValidator);
  }

  static loadConfirmPasswordValidator(confirmPasswordInput, passwordInput, errorMessageSpan) {
    const confirmPasswordValidator = new ConfirmPasswordValidator(
      confirmPasswordInput,
      passwordInput,
      errorMessageSpan
    );
    UI.validatorList.push(confirmPasswordValidator);
  }

  static loadSubmissionValidator(submissionButton, errorMessageSpan) {
    const submissionValidator = new SubmissionValidator(submissionButton, errorMessageSpan, UI.validatorList);
    // TODO: disable the below return if possible
    return submissionValidator;
  }
}
