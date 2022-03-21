import Popup from './Popup.js'
export default class PopupWithImage extends Popup {
  constructor(popupSelector){
    super(popupSelector)
    this._imageText = this._popup.querySelector('.popup-picture__caption');
    this._imageUrl = this._popup.querySelector('.popup-picture__item');
  }
  
  openPopup(data) {
    this._imageText.textContent = data.text;
    this._imageUrl.src = data.url;
    this._imageUrl.alt = 'Картинка ' + data.text;
    super.openPopup();
  }
} 
