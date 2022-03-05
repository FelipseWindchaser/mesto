const popupImgs = document.querySelector('.popup-picture');
const popupCaption = popupImgs.querySelector('.popup-picture__caption');
const popupImage = popupImgs.querySelector('.popup-picture__item');

export class Card {

  static selectors = {
    template: '.card-template',
    image: '.photos__item',
    likeBtn: '.photos__like-button',
    deleteBtn: '.photos__delete-button',
    toggleLikeBtn: 'photos__like-button_active',
    card: '.photos__card',
    caption: '.photos__caption',
    popupCaption: '.popup-picture__caption',
    popupImage: '.popup-picture__item',
  }

  constructor(text, url, openPopup) {
    this._text = text;
    this._url = url;
    this._element = document.querySelector(Card.selectors.template).content.cloneNode(true);
    this._cardImg = this._element.querySelector(Card.selectors.image);
    this._openPopup = openPopup;
    this._cardCaption = this._element.querySelector(Card.selectors.caption);
    this._likeBtn = this._element.querySelector(Card.selectors.likeBtn);
    this._deleteBtn = this._element.querySelector(Card.selectors.deleteBtn);
  }

  generateCard() {
    this._cardImg.src = this._url;
    this._cardImg.alt = 'Картинка ' + this._text;
    this._cardCaption.textContent = this._text;
    this._setEventListeners();
    return this._element;
  }

  _setPopupProps() {
    popupCaption.textContent = this._text;
    popupImage.src = this._url;
    popupImage.alt = 'Картинка ' + this._text;
    this._openPopup(popupImgs);
  }

  _setEventListeners() {
    this._likeBtn.addEventListener('click', () => this._likeBtn.classList.toggle(Card.selectors.toggleLikeBtn));
    this._deleteBtn.addEventListener('click', (evt) => {
      evt.target.closest(Card.selectors.card).remove();
    });
    this._cardImg.addEventListener('click', () => this._setPopupProps());
  }
  
}