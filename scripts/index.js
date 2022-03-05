import { initialCards, validatorSettings } from "./Data.js";
import { Card } from "./Card.js";
import { FormValidator } from "./FromValidator.js";
const editButton = document.querySelector('.profile__edit-button');
const popupEditProfile = document.querySelector('.popup_edit-profile');
const closeButton = document.querySelector('.popup__close-button');
const title = document.querySelector('.profile__title');
const info = document.querySelector('.profile__subtitle');
const profileForm = document.querySelector('.popup__container');
const editTitle = popupEditProfile.querySelector('.popup__form-field_type_name');
const editInfo = popupEditProfile.querySelector('.popup__form-field_type_info');
const cardsContainer = document.querySelector('.photos');
const popupAddImage = document.querySelector('.popup_add-image');
const addImgBtn = document.querySelector('.profile__add-button');
const closeImgBtn = popupAddImage.querySelector('.popup__close-button');
const addImgName = popupAddImage.querySelector('.popup__form-field_type_name');
const addImgUrl = popupAddImage.querySelector('.popup__form-field_type_info');
const addImgForm = popupAddImage.querySelector('.popup__container');
const popupImgs = document.querySelector('.popup-picture');
const popupImgCloseBtn = popupImgs.querySelector('.popup__close-button');
const saveImgBtn = addImgForm.querySelector('.popup__form-button');
const popupProfileOverlay = popupEditProfile.querySelector('.popup__overlay');
const popupOpenImgOverlay = popupImgs.querySelector('.popup__overlay');
const popupAddImgOverlay = popupAddImage.querySelector('.popup__overlay');


function renderCard(card) {
  cardsContainer.prepend(card);
}

function reverseCard(card) {
  cardsContainer.append(card);
}

function addCard(text, url) {
  const card = new Card(text, url, openPopup);
  //console.log(card);
  return card.generateCard(text, url);
};

function loadCards(cardList) {
  cardList.forEach(item => {
    reverseCard(addCard(item.name, item.link));
  });
};

loadCards(initialCards);

function openProfile() {
  editTitle.value = title.textContent; 
  editInfo.value = info.textContent;
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
  renderCard(addCard(addImgName.value, addImgUrl.value));
  closePopup(popupAddImage);
  addImgName.value = '';
  addImgUrl.value = '';
  console.log(saveImgBtn);
  saveImgBtn.classList.add('popup__form-button_disabled');
  saveImgBtn.disabled = true;
  };

function enableValidation({formSelector, ...rest}) {
  const formList = Array.from(document.querySelectorAll(formSelector));
  formList.forEach((formListElement) => {
    formListElement.addEventListener('submit', function (evt) {
      evt.preventDefault();
    });
    const validator = new FormValidator(rest, formListElement);   
    validator.setEventListeners();
  });
};

enableValidation(validatorSettings);

 
addImgBtn.addEventListener('click', () => openPopup(popupAddImage));
closeImgBtn.addEventListener('click', () => closePopup(popupAddImage));
editButton.addEventListener('click', openProfile);
closeButton.addEventListener('click', () => closePopup(popupEditProfile));
profileForm.addEventListener('submit', saveProfileChanges);
addImgForm.addEventListener('submit', saveImage);
popupImgCloseBtn.addEventListener('click', () => closePopup(popupImgs));
popupProfileOverlay.addEventListener('click', () => closePopup(popupEditProfile));
popupAddImgOverlay.addEventListener('click', () => closePopup(popupAddImage));
popupOpenImgOverlay.addEventListener('click', () => closePopup(popupImgs));
