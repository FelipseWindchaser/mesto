// variables
let editButton = document.querySelector('.profile__edit-button');
let popup = document.querySelector('.popup');
let closeButton = document.querySelector('.popup__close-button');
let overlay = document.querySelector('.popup__overlay');
let profileName = document.querySelector('.profile__title');
let profileInfo = document.querySelector('.profile__subtitle');
let profileForm = document.querySelector('.popup__container')
let editProfileName = document.querySelector('.popup__form-field_type_name');
let editProfileInfo = document.querySelector('.popup__form-field_type_info');
// functions
function editName() {
  editProfileName.value = profileName.textContent; 
  editProfileInfo.value = profileInfo.textContent;
};
function openProfile() {
  editName();
  popup.classList.add('popup_active');
}

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



