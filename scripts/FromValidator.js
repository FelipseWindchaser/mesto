export class FormValidator {
  constructor(validatorSettings, formElement) {
    this._formElement = formElement;
    this._validatorSettings = validatorSettings;
    this._inputSelector = validatorSettings.inputSelector
    this._submitButtonSelector = validatorSettings.submitButtonSelector
    this._inactiveButtonClass = validatorSettings.inactiveButtonClass
    this._inputErrorClass = validatorSettings.inputErrorClass
  };

  _showInputError(formListElement, inputElement, errorMessage) {
    const errorElement = formListElement.querySelector(`.${inputElement.name}-error`);
    inputElement.classList.add(this._inputErrorClass);
    errorElement.textContent = errorMessage;
  };

  _hideInputError(formListElement, inputElement) {
    const errorElement = formListElement.querySelector(`.${inputElement.name}-error`);
    inputElement.classList.remove(this._inputErrorClass);
    errorElement.textContent = '';
  };

  _checkInputValidity(formListElement, inputElement) {
    if (!inputElement.validity.valid) {
      this._showInputError(formListElement, inputElement, inputElement.validationMessage);
    } else {
      this._hideInputError(formListElement, inputElement);
    }
  };

  setEventListeners() {
    const inputList = Array.from(this._formElement.querySelectorAll(this._inputSelector));
    const buttonElement = this._formElement.querySelector(this._submitButtonSelector)
    this._toggleButtonState(inputList, buttonElement);
      inputList.forEach((inputElement) => {
      inputElement.addEventListener('input', () => {
        this._checkInputValidity(this._formElement, inputElement);
        this._toggleButtonState(inputList, buttonElement);
      });
    });
  };

  _toggleButtonState(inputList, buttonElement) {
    if (this._hasInvalidInput(inputList)) {
      buttonElement.classList.add(this._inactiveButtonClass);
      buttonElement.disabled = true;
    } else {
      buttonElement.classList.remove(this._inactiveButtonClass);
      buttonElement.disabled = false;
    } 
  };


  _hasInvalidInput(inputList) {
    return inputList.some((inputElement) => {
    return !inputElement.validity.valid;
    })
  }; 
}

