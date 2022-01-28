//
const initialCards = [
  {
    name: 'Цветок',
    link: 'https://images.unsplash.com/photo-1641842909513-0c59448a17d9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'
  },
  {
    name: 'Папоротник',
    link: 'https://images.unsplash.com/photo-1641328406522-f94f8a050fd1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'
  },
  {
    name: 'Цветы',
    link: 'https://images.unsplash.com/photo-1640282385915-c515d654338d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'
  },
  {
    name: 'Заледеневшие листья',
    link: 'https://images.unsplash.com/photo-1640177469193-148eeed13e0d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'
  },
  {
    name: 'Горы',
    link: 'https://images.unsplash.com/photo-1638969710700-f803636a3e85?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'
  },
  {
    name: 'Листья',
    link: 'https://images.unsplash.com/photo-1639403277293-14a53e4e11ab?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80'
  }
];

const editButton = document.querySelector('.profile__edit-button');
const popupEditProfile = document.querySelector('.popup_edit-profile');
const closeButton = document.querySelector('.popup__close-button');
const overlay = document.querySelector('.popup__overlay');
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
const popupImgOverlay = popupImg.querySelector('.popup__overlay_picture');


function addCard(text, url) {
  const card = cardTemplate.cloneNode(true);
  const cardPicture = card.querySelector('.photos__item');
  const likeBtn = card.querySelector('.photos__like-button');
  const delBtn = card.querySelector('.photos__delete-button');
  cardPicture.src = url;
  cardPicture.alt = "Картинка " + text;
  card.querySelector('.photos__caption').textContent = text;
  likeBtn.addEventListener('click', () => likeBtn.classList.toggle('photos__like-button_active'));
  cardPicture.addEventListener('click', () => viewPopupImg(text, url));
  delBtn.addEventListener('click', (evt) => {
    evt.target.parentElement.remove();
  });
  cardsContainer.prepend(card);
};
function viewPopupImg(text, url) {
  const popupCaption = popupImg.querySelector('.popup-picture__caption');
  const popupImage = popupImg.querySelector('.popup-picture__item');
  popupCaption.textContent = text;
  popupImage.src = url;
  togglePopup(popupImg);
  
};

function loadCards(cardList) {
  cardList.forEach(item => {
    addCard(item.name, item.link);
  });
};

loadCards(initialCards);

function openProfile() {
  editTitle.value = title.textContent; 
  editInfo.value = info.textContent;
  togglePopup(popupEditProfile);
};

function saveProfileChanges(evt) {
  evt.preventDefault();
  title.textContent = editTitle.value;
  info.textContent = editInfo.value;
  togglePopup(popupEditProfile);
};

 function togglePopup(popup) {
   popup.classList.toggle('popup_active');
 };

 function saveImage(evt) {
  evt.preventDefault();
  addCard(addImgName.value, addImgUrl.value);
  togglePopup(popupAddImage);
  addImgName.value = '';
  addImgUrl.value = '';
  };




addImgBtn.addEventListener('click', () => togglePopup(popupAddImage));
closeImgBtn.addEventListener('click', () => togglePopup(popupAddImage));
editButton.addEventListener('click', openProfile);
closeButton.addEventListener('click', () => togglePopup(popupEditProfile));
overlay.addEventListener('click', () => togglePopup(popupEditProfile));
profileForm.addEventListener('submit', saveProfileChanges);
addImgForm.addEventListener('submit', saveImage);
popupImgCloseBtn.addEventListener('click', () => togglePopup(popupImg));
popupImgOverlay.addEventListener('click', () => togglePopup(popupImg));
