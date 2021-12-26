// variables
let editButton = document.querySelector('.profile__edit-button');
let popup = document.querySelector('.popup');
let closeButton = document.querySelector('.popup__close-button');
let overlay = document.querySelector('.popup__overlay');
let profileName = document.querySelector('.profile__title');
let profileInfo = document.querySelector('.profile__subtitle');
let profileForm = document.querySelector('.popup__container')
let editProfileName = document.querySelector('.popup__profile-name');
let editProfileInfo = document.querySelector('.popup__profile-info');
let saveButton = document.querySelector('.profile__form-button');
let likeButtons = document.querySelectorAll('.photos__like-button');
// functions
function editName() {
  editProfileName.setAttribute('value', profileName.textContent);
  editProfileInfo.setAttribute('value', profileInfo.textContent);
};

function openProfile() {
  popup.classList.add('popup_active');
  editName();
};

function closeProfile() {
  popup.classList.remove('popup_active');
};

function saveProfileChanges(evt) {
  evt.preventDefault();
  profileName.textContent = editProfileName.value;
  profileInfo.textContent = editProfileInfo.value;
  closeProfile();
};

// listeners
editButton.addEventListener('click', openProfile);
closeButton.addEventListener('click', closeProfile);
overlay.addEventListener('click', closeProfile);
profileForm.addEventListener('submit', saveProfileChanges);
likeButtons.forEach(likeButton =>
  likeButton.addEventListener('click', () => likeButton.classList.toggle('photos__like-button_active')));


