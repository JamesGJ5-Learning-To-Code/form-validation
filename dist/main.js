(()=>{var e={902:e=>{e.exports={countryZipCodeMap:{ch:"^(CH-)?\\d{4}$",fr:"^(F-)?\\d{5}$",de:"^(D-)?\\d{5}$",nl:"^(NL-)?\\d{4}\\s*([A-RT-Z][A-Z]|S[BCE-RT-Z])$"}}}},t={};function s(i){var a=t[i];if(void 0!==a)return a.exports;var r=t[i]={exports:{}};return e[i](r,r.exports,s),r.exports}(()=>{"use strict";class e{constructor(e){this.errorMessageDisplayer=e}set errorMessage(e){this.displayErrorMessage(e),e?this.activate():this.deactivate()}displayErrorMessage(e){this.errorMessageDisplayer.textContent=e}activate(){this.errorMessageDisplayer.classList.add("active")}deactivate(){this.errorMessageDisplayer.classList.remove("active")}}class t{constructor(t,s){this.control=t,this.messageWhenInvalid="Invalid",this.errorHandler=new e(s),this.initialiseControl()}initialiseControl(){this.doValidityChecks=this.doValidityChecks.bind(this),this.control.addEventListener("focus",this.doValidityChecks),this.control.addEventListener("input",this.doValidityChecks)}doValidityChecks(){this.control.checkValidity()?this.cancelError():this.displayError()}displayError(){this.errorHandler.errorMessage=this.messageWhenInvalid}cancelError(){this.errorHandler.errorMessage=""}}class i extends t{constructor(e,t){super(e,t),this.messageWhenInvalid="A valid email address is required"}}class a extends t{constructor(e,t){super(e,t),this.messageWhenInvalid="A country selection is required"}}var r=s(902);class o extends t{constructor(e,t){super(e,t),this.messageWhenInvalid="A valid zip code is required",this.countryZipCodeMap=r.countryZipCodeMap,this.activateCountryChangeDetector()}doValidityChecks(){const e=this.control.value,t=this.getCountry();this.checkPattern(t,e),super.doValidityChecks()}getCountry(){return this.getCountryControl().value}getCountryControl(){return this.control.closest("form").querySelector(".country")}checkPattern(e,t){e in this.countryZipCodeMap&&(new RegExp(this.countryZipCodeMap[e]).test(t)?this.control.setCustomValidity(""):this.control.setCustomValidity(this.messageWhenInvalid))}activateCountryChangeDetector(){const e=this.getCountryControl();e&&(this.doValidityChecks=this.doValidityChecks.bind(this),e.addEventListener("input",this.doValidityChecks))}}class d extends t{constructor(e,t){super(e,t),this.messageWhenInvalid="An 8-16 character password is required with at least one of each of: a digit, a lowercase letter, an uppercase letter and a special character."}}class n extends t{constructor(e,t,s){super(e,s),this.messageWhenInvalid="The passwords do not match",this.passwordInput=t,this.activatePasswordChangeDetector()}doValidityChecks(){this.control.value===this.passwordInput.value?this.control.setCustomValidity(""):this.control.setCustomValidity(this.messageWhenInvalid),super.doValidityChecks()}activatePasswordChangeDetector(){this.doValidityChecks=this.doValidityChecks.bind(this),this.passwordInput.addEventListener("input",this.doValidityChecks)}}class l{constructor(t,s,i){this.submissionButton=t,this.validatedElements=s,this.messageWhenInvalid="Some fields are not filled in or are invalid",this.errorHandler=new e(i),this.initialiseSubmissionButton()}initialiseSubmissionButton(){this.doValidityChecks=this.doValidityChecks.bind(this),this.submissionButton.addEventListener("click",(e=>this.doValidityChecks(e)))}doValidityChecks(e){this.validatedElements.every((e=>e.checkValidity()))||(this.displayError(),e.preventDefault())}displayError(){this.errorHandler.errorMessage=this.messageWhenInvalid}cancelError(){this.errorHandler.errorMessage=""}}class c{static validatedElements=[];static loadTools(){c.processElement("email"),c.processElement("country"),c.processElement("zip-code"),c.processElement("password"),c.processElement("confirm-password"),c.processElement("submit")}static processElement(e){const t=document.getElementById(e),s=document.getElementById(`${e}-error-message`);switch(e){case"email":c.validatedElements.push(t),c.loadEmailValidator(t,s);break;case"country":c.validatedElements.push(t),c.loadCountryValidator(t,s);break;case"zip-code":c.validatedElements.push(t),c.loadZipCodeValidator(t,s);break;case"password":c.validatedElements.push(t),c.loadPasswordValidator(t,s);break;case"confirm-password":c.validatedElements.push(t);const e=document.getElementById("password");c.loadConfirmPasswordValidator(t,e,s);break;case"submit":c.loadSubmissionGate(t,s)}}static loadEmailValidator(e,t){new i(e,t)}static loadCountryValidator(e,t){new a(e,t)}static loadZipCodeValidator(e,t){new o(e,t)}static loadPasswordValidator(e,t){new d(e,t)}static loadConfirmPasswordValidator(e,t,s){new n(e,t,s)}static loadSubmissionGate(e,t){new l(e,c.validatedElements,t)}}document.addEventListener("DOMContentLoaded",c.loadTools)})()})();