import '../pages/index.css';
import { validatorSettings } from '../utils/constants.js';
import { Card } from '../components/Card.js';
import { FormValidator } from '../components/FormValidator.js';
import Section from '../components/Section.js'
import {
  userInfoSelectors,
  editButton,
  popupEditProfile,
  profileForm,
  popupPicture,
  cardsContainer,
  popupAddImage,
  addImgBtn,
  addImgForm,
  formValidators,
  profilePicture,
  popupEditProfileImage,
  profileImageForm,
  popupConfirmation,
  popupLoadingSaveBtn,
  popupLoadingCreateBtn,
  cardSelectors
} from '../utils/constants.js';
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithForm from '../components/PopupWithForm.js';
import UserInfo from '../components/UserInfo.js';
import PopupWithConfirmation from '../components/PopupWithConfirmation.js';
import Api from '../components/Api.js';

const api = new Api({
  baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-38',
  headers: {
    authorization: 'c9fb0e1a-fc76-4d2f-8a74-6a3510bead6d',
    'Content-Type': 'application/json'
  }
});

const cardList = new Section(createCard, cardsContainer);

Promise.all([api.getUserInfo(), api.getInitialCards()])
  .then(([userData, cards]) => {
    userInfo.setUserInfo(userData);
    cardList.loadItems(cards);
  })
  .catch(err => console.log(err));

const picturePopup = new PopupWithImage(popupPicture); 
picturePopup.setEventListeners();

function handleLike(card) {
  if(!this._likeBtn.classList.contains(cardSelectors.toggleLikeBtn)) {
    api.addLike(card._id)
      .then((res) => {
        card.countLikes(res.likes);
      })
      .catch((err) => {
          console.log(err);
      });
  } else {
    api.removeLike(card._id)
      .then((res) => {
        card.countLikes(res.likes);
      })
      .catch((err) => {
          console.log(err);
      });
  }
  
}

function createCard(item) {
  const card = new Card(
    item, 
    (targetCard) => picturePopup.openPopup(targetCard), 
    (targetCard, cardId) => confirmationPopup.openPopup(targetCard, cardId),
    handleLike,
    userInfo.getUserInfo()._id
    );
  return card.generateCard();
}

const userInfo = new UserInfo(userInfoSelectors);

const confirmationPopup = new PopupWithConfirmation(popupConfirmation, (id) => api.removeCard(id));
confirmationPopup.setEventListeners();

const popupProfileForm = new PopupWithForm(popupEditProfile, (data) => {
  return api.editProfileInfo(data)
    .then(res => userInfo.setUserInfo(res))
    .catch(err => console.log(err))
}, popupLoadingSaveBtn);
popupProfileForm.setEventListeners();

const profilePicturePopup = new PopupWithForm(popupEditProfileImage, (data) => {
  return api.editProfileImage(data['profile-url'])
    .then(res => userInfo.setUserInfo(res))
    .catch(err => console.log(err))
}, popupLoadingSaveBtn);
profilePicturePopup.setEventListeners();

const popupImageForm = new PopupWithForm(popupAddImage, (data) => {
  return api.addNewCards({name: data['image-name'], link: data['image-url']})
    .then(res => {
      cardList.addReversedItem(res)
    })
    .catch(err => console.log(err))
}, popupLoadingCreateBtn)
popupImageForm.setEventListeners();

Array.from(document.querySelectorAll('.popup__container')).forEach((formListElement) => {
  const validator = new FormValidator(validatorSettings, formListElement);  
  const formName = formListElement.getAttribute('name'); 
  formValidators[formName] = validator;
  validator.enableValidation();
});

addImgBtn.addEventListener('click', () => {
  formValidators[addImgForm.getAttribute('name')].resetValidation();
  popupImageForm.openPopup();
});

editButton.addEventListener('click', () => {
  popupProfileForm.setInputValues(userInfo.getUserInfo());
  formValidators[profileForm.getAttribute('name')].resetValidation();
  popupProfileForm.openPopup();
});

profilePicture.addEventListener('click', () => {
  formValidators[profileImageForm.getAttribute('name')].resetValidation();
  profilePicturePopup.openPopup();
});

