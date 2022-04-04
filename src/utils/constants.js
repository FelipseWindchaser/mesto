export const initialCards = [ 

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

export const validatorSettings = {
  formSelector: '.popup__container',
  inputSelector: '.popup__form-field',
  submitButtonSelector: '.popup__form-button',
  inactiveButtonClass: 'popup__form-button_disabled',
  inputErrorClass: 'popup__form-field-error'
};

export const editButton = document.querySelector('.profile__edit-button');
export const popupEditProfile = '.popup_edit-profile';
export const popupPicture = '.popup-picture';
export const userInfoSelectors = {name: '.profile__title', about: '.profile__subtitle', avatar: '.profile__picture'};
export const profileForm = document.querySelector('.popup__container');
export const editTitle = document.querySelector(popupEditProfile).querySelector('.popup__form-field_type_name');
export const editInfo = document.querySelector(popupEditProfile).querySelector('.popup__form-field_type_info');
export const cardsContainer = '.photos';
export const popupAddImage = '.popup_add-image';
export const addImgBtn = document.querySelector('.profile__add-button');
export const addImgForm = document.querySelector(popupAddImage).querySelector('.popup__container');
export const formValidators = {};
export const profilePicture = document.querySelector('.profile__picture');
export const popupEditProfileImage = '.popup_edit-profile-image';
export const profileImageForm = document.querySelector('.popup_edit-profile-image').querySelector('.popup__container');
export const popupConfirmation = '.popup_delete-card';
export const cardSelectors = {
  template: '.card-template',
  image: '.photos__item',
  likeBtn: '.photos__like-button',
  deleteBtn: '.photos__delete-button',
  toggleLikeBtn: 'photos__like-button_active',
  card: '.photos__card',
  caption: '.photos__caption',
  popupCaption: '.popup-picture__caption',
  popupImage: '.popup-picture__item',
  likesCounter: '.photos__likes-counter',
  deleteBtnActive: 'photos__delete-button_active',
};

export const popupLoadingSaveBtn = {
  isLoading: 'Сохранение...',
  notLoading: 'Сохранить'
}

export const popupLoadingCreateBtn = {
  isLoading: 'Создание...',
  notLoading: 'Создать'
}