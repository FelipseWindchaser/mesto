import {cardSelectors as selectors} from '../utils/constants.js'
export class Card {
  constructor(text, url, openPopup) {
    this._text = text;
    this._url = url;
    this._element = document.querySelector(selectors.template).content.cloneNode(true);
    this._cardImg = this._element.querySelector(selectors.image);
    this._openPopup = openPopup;
    this._cardCaption = this._element.querySelector(selectors.caption);
    this._likeBtn = this._element.querySelector(selectors.likeBtn);
    this._deleteBtn = this._element.querySelector(selectors.deleteBtn);
  }

  generateCard() {
    this._cardImg.src = this._url;
    this._cardImg.alt = 'Картинка ' + this._text;
    this._cardCaption.textContent = this._text;
    this._setEventListeners();
    return this._element;
  }

  getData() {
    return {text: this._text, url: this._url};
  }

  _setEventListeners() {
    this._likeBtn.addEventListener('click', () => this._likeBtn.classList.toggle(selectors.toggleLikeBtn));
    this._deleteBtn.addEventListener('click', (evt) => {
      evt.target.closest(selectors.card).remove();
    });
    this._cardImg.addEventListener('click', () => this._openPopup());
  }
}