const showInputError = (formListElement, inputElement, errorMessage, inputErrorClass) => {
  const errorElement = formListElement.querySelector(`.${inputElement.name}-error`);
  inputElement.classList.add(inputErrorClass);
  errorElement.textContent = errorMessage;
};

const hideInputError = (formListElement, inputElement, inputErrorClass) => {
  const errorElement = formListElement.querySelector(`.${inputElement.name}-error`);
  inputElement.classList.remove(inputErrorClass);
 errorElement.textContent = '';
};

const checkInputValidity = (formListElement, inputElement, {inputErrorClass}) => {
  if (!inputElement.validity.valid) {
    showInputError(formListElement, inputElement, inputElement.validationMessage, inputErrorClass);
  } else {
    hideInputError(formListElement, inputElement, inputErrorClass);
  }
};

const setEventListeners = (formElement, {inputSelector, submitButtonSelector, ...rest}) => {
  //console.log('setEvent рест', rest)
  const inputList = Array.from(formElement.querySelectorAll(inputSelector));
  const buttonElement = formElement.querySelector(submitButtonSelector)
   toggleButtonState(inputList, buttonElement, rest);
    inputList.forEach((inputElement) => {
    inputElement.addEventListener('input', function () {
      checkInputValidity(formElement, inputElement, rest);
      toggleButtonState(inputList, buttonElement, rest);
    });
  });
};

function toggleButtonState(inputList, buttonElement, { inactiveButtonClass }) {
  if (hasInvalidInput(inputList)) {
    buttonElement.classList.add(inactiveButtonClass);
    buttonElement.disabled = true;
  } else {
    buttonElement.classList.remove(inactiveButtonClass);
    buttonElement.disabled = false;
  } 
}

const enableValidation = ({formSelector, ...rest}) => {
  //console.log('enableVal рест', rest)
  const formList = Array.from(document.querySelectorAll(formSelector));
  formList.forEach((formListElement) => {
    formListElement.addEventListener('submit', function (evt) {
      evt.preventDefault();
    });
 setEventListeners(formListElement, rest);
  });
};

enableValidation({
  formSelector: '.popup__container',
  inputSelector: '.popup__form-field',
  submitButtonSelector: '.popup__form-button',
  inactiveButtonClass: 'popup__form-button_disabled',
  inputErrorClass: 'popup__form-field-error'
});

function hasInvalidInput(inputList) {
  return inputList.some((inputElement) => {
  return !inputElement.validity.valid;
  })
}; 



