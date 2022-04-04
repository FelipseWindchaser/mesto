import Popup from './Popup.js'
export default class PopupWithConfirmation extends Popup {
  constructor(popupSelector, removeCardApi){
    super(popupSelector)
    this._form = this._popup.querySelector('.popup__container');
    this._cardId = null;
    this._element = null;
    this._removeCardApi = removeCardApi;
  }

  openPopup(element, cardId) {
    super.openPopup();
    this._element = element;
    this._cardId = cardId;
  }

  setEventListeners() {
    super.setEventListeners();
    this._form.addEventListener('submit', this._handleSubmit.bind(this));
  }
  
  _handleSubmit(evt) {
    evt.preventDefault();
    this._removeCardApi(this._cardId)
    .then(res => {
      console.log(res)
      this._element.remove();
      this.closePopup();
    })
    .catch(err => console.log(err))
  }
} 
