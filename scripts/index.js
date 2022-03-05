import { initialCards, validatorSettings } from "./Data.js";
import { Card } from "./Card.js";
import { FormValidator } from "./FromValidator.js";
const editButton = document.querySelector('.profile__edit-button');
const popupEditProfile = document.querySelector('.popup_edit-profile');
const title = document.querySelector('.profile__title');
const info = document.querySelector('.profile__subtitle');
const profileForm = document.querySelector('.popup__container');
const editTitle = popupEditProfile.querySelector('.popup__form-field_type_name');
const editInfo = popupEditProfile.querySelector('.popup__form-field_type_info');
const cardsContainer = document.querySelector('.photos');
const popupAddImage = document.querySelector('.popup_add-image');
const addImgBtn = document.querySelector('.profile__add-button');
const addImgName = popupAddImage.querySelector('.popup__form-field_type_name');
const addImgUrl = popupAddImage.querySelector('.popup__form-field_type_info');
const addImgForm = popupAddImage.querySelector('.popup__container');
const popups = document.querySelectorAll('.popup');
const formValidators = {};

function renderCard(card) {
  cardsContainer.prepend(card);
}

function reverseCard(card) {
  cardsContainer.append(card);
}

function createCard(text, url) {
  const card = new Card(text, url, openPopup);
  return card.generateCard();
};

function loadCards(cardList) {
  cardList.forEach(item => {
    reverseCard(createCard(item.name, item.link));
  });
};

loadCards(initialCards);

function openProfile() {
  editTitle.value = title.textContent; 
  editInfo.value = info.textContent;
  formValidators[profileForm.getAttribute('name')].resetValidation();
  openPopup(popupEditProfile);
};

function saveProfileChanges(evt) {
  evt.preventDefault();
  title.textContent = editTitle.value;
  info.textContent = editInfo.value;
  closePopup(popupEditProfile);
};

function closePopupOnEsc(evt) {
    if (evt.key === 'Escape') {
    const popupActive = document.querySelector('.popup_active');
    closePopup(popupActive);
  }
}

 function openPopup(popup) {
  popup.classList.add('popup_active');
  document.addEventListener('keydown', closePopupOnEsc);
  
 };
 
 function closePopup(popup) {
  popup.classList.remove('popup_active');
  document.removeEventListener('keydown', closePopupOnEsc);
 };

 function saveImage(evt) {
  evt.preventDefault();
  renderCard(createCard(addImgName.value, addImgUrl.value));
  closePopup(popupAddImage);
};

Array.from(document.querySelectorAll('.popup__container')).forEach((formListElement) => {
  const validator = new FormValidator(validatorSettings, formListElement);  
  const formName = formListElement.getAttribute('name'); 
  formValidators[formName] = validator;
  validator.enableValidation();
});

addImgBtn.addEventListener('click', () => {
  addImgForm.reset();
  formValidators[addImgForm.getAttribute('name')].resetValidation();
  openPopup(popupAddImage)
});

popups.forEach((popup) => {
  popup.addEventListener('mousedown', (evt) => {
    if (evt.target.classList.contains('popup__overlay')) {
      closePopup(popup);
    }
    if (evt.target.classList.contains('popup__close-button')) {
      closePopup(popup);
    }
  });
});

editButton.addEventListener('click', openProfile);
profileForm.addEventListener('submit', saveProfileChanges);
addImgForm.addEventListener('submit', saveImage);
