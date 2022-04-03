import {cardSelectors, cardSelectors as selectors} from '../utils/constants.js'
export class Card {
  constructor(item, openPopup, confirmDeletionPopup, likeAdd, likeRemove, ownerId) {
    this._name = item.name;
    this._link = item.link;
    this._id = item._id;
    this._likes = item.likes;
    this._element = document.querySelector(selectors.template).content.cloneNode(true);
    this._cardImg = this._element.querySelector(selectors.image);
    this._openPopup = openPopup;
    this._cardCaption = this._element.querySelector(selectors.caption);
    this._likeBtn = this._element.querySelector(selectors.likeBtn);
    this._likesCounter = this._element.querySelector(selectors.likesCounter);
    this._deleteBtn = this._element.querySelector(selectors.deleteBtn);
    this._confirmDeletionPopup = confirmDeletionPopup;
    this._likeAdd = likeAdd;
    this._likeRemove = likeRemove;
    this._ownerId = ownerId;
    this._cardOwnerId = item.owner._id;
  }

  _countLikes() {
    this._likesCounter.textContent = this._likes.length;
  }

  generateCard() {
    this._cardImg.src = this._link;
    this._cardImg.alt = 'Картинка ' + this._name;
    this._cardCaption.textContent = this._name;
    this._setEventListeners();
    this._countLikes();
    this._deleteOwnCard();
    if (this._likes.some((element) => element._id === this._ownerId)) {
      this._likeBtn.classList.add(selectors.toggleLikeBtn);
    }
    return this._element;
  }

  _deleteOwnCard() {
    if (this._ownerId === this._cardOwnerId) {
      this._deleteBtn.classList.add(selectors.deleteBtnActive);
      this._deleteBtn.addEventListener('click', (evt) => this._confirmDeletionPopup(evt.target.closest(selectors.card), this._id));
    }
  }

  _setEventListeners() {
    this._likeBtn.addEventListener('click', () => this._handleLike());
    this._cardImg.addEventListener('click', () => this._openPopup({text: this._name, url: this._link}));
  }

  _handleLike() {
    if(!this._likeBtn.classList.contains(selectors.toggleLikeBtn)) {
      this._likeAdd(this._id)
      .then(res => {
        this._likes = res.likes;
        this._countLikes();
        this._likeBtn.classList.toggle(selectors.toggleLikeBtn)
      })
      .catch(err => console.log(err))
    } else {
      this._likeRemove(this._id)
      .then(res => {
        this._likes = res.likes;
        this._countLikes();
        this._likeBtn.classList.toggle(selectors.toggleLikeBtn)
      })
      .catch(err => console.log(err))
    }
  }
}