import '../pages/index.css';
import { initialCards, validatorSettings } from '../utils/constants.js';
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
  formValidators
} from '../utils/constants.js';
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithForm from '../components/PopupWithForm.js';
import UserInfo from '../components/UserInfo.js';

const picturePopup = new PopupWithImage(popupPicture); 
picturePopup.setEventListeners();

function handleCardClick(item) {
  picturePopup.openPopup(item);
}
function createCard(text, url) {
  const card = new Card(text, url, () => handleCardClick(card.getData()));
  return card.generateCard();
}
const cardList = new Section({items: initialCards, renderer: (text, url) => {
  cardList.addItem(createCard(text, url));
}}, cardsContainer);

cardList.loadItems();

const userInfo = new UserInfo(userInfoSelectors);

const popupProfileForm = new PopupWithForm(popupEditProfile, (data) => {
  userInfo.setUserInfo(data);
});
popupProfileForm.setEventListeners();

const popupImageForm = new PopupWithForm(popupAddImage, (data) => {
  cardList.addReversedItem(createCard(data['image-name'], data['image-url']));
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
  popupImageForm.openPopup();
});

editButton.addEventListener('click', () => {
  popupProfileForm.setDefaultParams(userInfo.getUserInfo());
  formValidators[profileForm.getAttribute('name')].resetValidation();
  popupProfileForm.openPopup();
});

