export default class Api {
  constructor(options) {
    this._baseUrl = options.baseUrl;
    this._headers = options.headers;
    this._token = options.headers.authorization;
  }
  
  _checkResponse(res) {
    if (res.ok) {
      return res.json()
    }
    return Promise.reject(`Ошибка: ${res.status}`);
  }

  _fetch(targetUrl, method, data) {
    return fetch(`${this._baseUrl}/${targetUrl}`, {
      method: method,
      headers: this._headers,
      body: data ? JSON.stringify(data) : null
    }).then(this._checkResponse);
  }
  
  getInitialCards() {
    return this._fetch('cards', 'GET');
  }

  getUserInfo() {
    return this._fetch('users/me', 'GET');
  }

  editProfileInfo(data) {
    return this._fetch('users/me', 'PATCH', data)
  }

  editProfileImage(data) {
    return this._fetch('users/me/avatar', 'PATCH', { avatar: data })
  }

  addNewCards(data) {
    return this._fetch('cards', 'POST', data)
  }

  addLike(cardId) {
    return this._fetch(`cards/${cardId}/likes`, 'PUT');
  }

  removeLike(cardId) {
    return this._fetch(`cards/${cardId}/likes`, 'DELETE');
  }

  removeCard(cardId) {
    return this._fetch(`cards/${cardId}`, 'DELETE');
  }
}