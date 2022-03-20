import '../pages/index.css';
import { initialCards, validatorSettings } from './Data.js';
import { Card } from './Card.js';
import { FormValidator } from './FormValidator.js';
import Section from './Section.js'
import {
  userInfoSelectors,
  editButton,
  popupEditProfile,
  profileForm,
  popupPicture,
  cardsContainer,
  popupAddImage,
  addImgBtn,
  addImgName,
  addImgUrl,
  addImgForm,
  formValidators
} from './Data.js';

import Popup from './Popup.js';
import PopupWithImage from './PopupWithImage.js';
import PopupWithForm from './PopupWithForm.js';
import UserInfo from './UserInfo.js';

const imageFormPopup = new Popup(popupAddImage);
imageFormPopup.setEventListeners();
const picturePopup = new PopupWithImage(popupPicture); 
picturePopup.setEventListeners();

function handleCardClick(item) {
  picturePopup.openPopup(item);
}

const cardList = new Section({items: initialCards, renderer: (text, url) => {
  const card = new Card(text, url, () => handleCardClick(card.getData()));
  const cardElement = card.generateCard();
  cardList.addItem(cardElement);
}}, cardsContainer);

cardList.loadItems();

const userInfo = new UserInfo(userInfoSelectors);

const popupProfileForm = new PopupWithForm(popupEditProfile, (data) => {
  userInfo.setUserInfo(data);
});
popupProfileForm.setEventListeners();

const popupImageForm = new PopupWithForm(popupAddImage, () => {
  const newCard = new Card(addImgName.value, addImgUrl.value, () => handleCardClick(newCard.getData()));
  cardList.addReversedItem(newCard.generateCard());
  popupImageForm.closePopup();
})
popupImageForm.setEventListeners();

Array.from(document.querySelectorAll('.popup__container')).forEach((formListElement) => {
  const validator = new FormValidator(validatorSettings, formListElement);  
  const formName = formListElement.getAttribute('name'); 
  formValidators[formName] = validator;
  validator.enableValidation();
});

addImgBtn.addEventListener('click', () => {
  addImgForm.reset();
  formValidators[addImgForm.getAttribute('name')].resetValidation();
  imageFormPopup.openPopup();
});

editButton.addEventListener('click', () => {
  popupProfileForm.setDefaultParams(userInfo.getUserInfo());
  formValidators[profileForm.getAttribute('name')].resetValidation();
  popupProfileForm.openPopup();
});

