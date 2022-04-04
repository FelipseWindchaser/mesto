import Popup from './Popup.js'
export default class PopupWithForm extends Popup {
  constructor(popupSelector, submitForm, loadingText){
    super(popupSelector)
    this._submitForm = submitForm;
    this._inputList = this._popup.querySelectorAll('.popup__form-field');
    this._formValues = {};
    this._form = this._popup.querySelector('.popup__container');
    this._formButton = this._popup.querySelector('.popup__form-button');
    this._loadingText = loadingText;
  }

  _getInputValues() {
    this._inputList.forEach(input => {
      this._formValues[input.name] = input.value;
    });
    return this._formValues;
  }

  _renderLoading(isLoading) {
    if (isLoading) {
      this._formButton.textContent = this._loadingText.isLoading;
    } else {
      this._formButton.textContent = this._loadingText.notLoading;
    }
  }

  setInputValues(data) {
    this._inputList.forEach((input) => {
      input.value = data[input.name];
    });
    console.log(this._inputList, data)
  }

  _handleSubmit(evt) {
    evt.preventDefault();
    this._renderLoading(true);
    this._submitForm(this._getInputValues())
      .then(() => {
        this.closePopup()
      })
      .finally(() => {
        setTimeout(() => this._renderLoading(false), 500);
      });
  }

  setEventListeners() {
    super.setEventListeners();
    this._form.addEventListener('submit', this._handleSubmit.bind(this))

  }
  closePopup() {
    this._form.reset();
    super.closePopup();
  }
} 
