export default class UserInfo {
  constructor({name, info}) {
    
    this._title = document.querySelector(name);
    this._info = document.querySelector(info);
  }
  getUserInfo() {
      return {name: this._title.textContent, description: this._info.textContent};
    }
  
  setUserInfo(data) {
    this._title.textContent = data['profile-name'];
    this._info.textContent = data['profile-info'];
  }
}