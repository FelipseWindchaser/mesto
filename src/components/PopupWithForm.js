import Popup from './Popup.js'
export default class PopupWithForm extends Popup {
  constructor(popupSelector, submitForm, loadingText){
    super(popupSelector)
    this._submitForm = submitForm;
    this._defaultTitle = this._popup.querySelector('.popup__form-field_type_name');
    this._defaultInfo = this._popup.querySelector('.popup__form-field_type_info');
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

  setDefaultParams(data) {
    this._defaultTitle.value = data.name; 
    this._defaultInfo.value = data.description;
  }

  _handleSubmit(evt) {
    evt.preventDefault();
    this._renderLoading(true);
    this._submitForm(this._getInputValues())
      .finally(() => {
        setTimeout(() => this._renderLoading(false), 500);
        this.closePopup()
      })
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
