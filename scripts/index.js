const editButton = document.querySelector('.profile__edit-button');
const popupEditProfile = document.querySelector('.popup_edit-profile');
const closeButton = document.querySelector('.popup__close-button');
const title = document.querySelector('.profile__title');
const info = document.querySelector('.profile__subtitle');
const profileForm = document.querySelector('.popup__container');
const editTitle = popupEditProfile.querySelector('.popup__form-field_type_name');
const editInfo = popupEditProfile.querySelector('.popup__form-field_type_info');
const cardTemplate = document.querySelector('.card-template').content;
const cardsContainer = document.querySelector('.photos');
const popupAddImage = document.querySelector('.popup_add-image');
const addImgBtn = document.querySelector('.profile__add-button');
const closeImgBtn = popupAddImage.querySelector('.popup__close-button');
const addImgName = popupAddImage.querySelector('.popup__form-field_type_name');
const addImgUrl = popupAddImage.querySelector('.popup__form-field_type_info');
const imgName = document.querySelector('.photos__caption');
const addImgForm = popupAddImage.querySelector('.popup__container');
const popupImg = document.querySelector('.popup-picture');
const popupImgCloseBtn = popupImg.querySelector('.popup__close-button');
const popupCaption = popupImg.querySelector('.popup-picture__caption');
const popupImage = popupImg.querySelector('.popup-picture__item');



function renderCard(card) {
  cardsContainer.prepend(card);
}

function reverseCard(card) {
  cardsContainer.append(card);
}

function addCard(text, url) {
  const card = cardTemplate.cloneNode(true);
  const cardPicture = card.querySelector('.photos__item');
  const likeBtn = card.querySelector('.photos__like-button');
  const delBtn = card.querySelector('.photos__delete-button');
  cardPicture.src = url;
  cardPicture.alt = 'Картинка ' + text;
  card.querySelector('.photos__caption').textContent = text;
  likeBtn.addEventListener('click', () => likeBtn.classList.toggle('photos__like-button_active'));
  cardPicture.addEventListener('click', () => viewPopupImg(text, url));
  delBtn.addEventListener('click', (evt) => {
    evt.target.closest('.photos__card').remove();
  });
  return card;
};

function viewPopupImg(text, url) {
  popupCaption.textContent = text;
  popupImage.src = url;
  popupImage.alt = 'Картинка ' + text;
  openPopup(popupImg);
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
function closePopupOnOverlay() {
  const popupActive = document.querySelector('.popup_active');
  closePopup(popupActive);
} 

 function openPopup(popup) {
  popup.classList.add('popup_active');
  document.addEventListener('keydown', closePopupOnEsc);
  popup.querySelector('.popup__overlay').addEventListener('click', closePopupOnOverlay);
 };
 
 function closePopup(popup) {
  popup.classList.remove('popup_active');
  document.removeEventListener('keydown', closePopupOnEsc);
  popup.querySelector('.popup__overlay').removeEventListener('click', closePopupOnOverlay);
 };

 function saveImage(evt) {
  evt.preventDefault();
  renderCard(addCard(addImgName.value, addImgUrl.value));
  closePopup(popupAddImage);
  addImgName.value = '';
  addImgUrl.value = '';
  };
 
addImgBtn.addEventListener('click', () => openPopup(popupAddImage));
closeImgBtn.addEventListener('click', () => closePopup(popupAddImage));
editButton.addEventListener('click', openProfile);
closeButton.addEventListener('click', () => closePopup(popupEditProfile));
profileForm.addEventListener('submit', saveProfileChanges);
addImgForm.addEventListener('submit', saveImage);
popupImgCloseBtn.addEventListener('click', () => closePopup(popupImg));

