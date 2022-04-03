export default class UserInfo {
  constructor({name, info, avatar}) {
    this._title = document.querySelector(name);
    this._info = document.querySelector(info);
    this._avatar = document.querySelector(avatar);
    this._id = '';
  }
  getUserInfo() {
      return {
        name: this._title.textContent,
        description: this._info.textContent,
        avatar: this._avatar,
        _id: this._id
      };
    }
  
  setUserInfo(data) {
    this._title.textContent = data.name;
    this._info.textContent = data.about;
    this._avatar.src = data.avatar;
    this._id = data._id;
  }
}