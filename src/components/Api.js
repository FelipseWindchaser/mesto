export default class Api {
  constructor(options) {
    this._baseUrl = options.baseUrl;
    this._headers = options.headers;
    this._token = options.headers.authorization;
  }

  _fetchGet(targetUrl) {
    return fetch(`${this._baseUrl}/${targetUrl}`, { headers: this._headers })
    .then(res => {
      if (res.ok) {
        return res.json()
      }
      return Promise.reject(`Ошибка: ${res.status}`);
    })
  }
  
  getInitialCards() {
    return this._fetchGet('cards');
  }

  getUserInfo() {
    return this._fetchGet('users/me');
  }

  _fetchWithBody(targetUrl, data, method) {
    return fetch(`${this._baseUrl}/${targetUrl}`, {
      method: method,
      headers: this._headers,
      body: JSON.stringify(data)
    })
    .then(res => {
      if (res.ok) {
        return res.json()
      }
      return Promise.reject(`Ошибка: ${res.status}`);
    })
  }

  editProfileInfo(data) {
    return this._fetchWithBody('users/me',
      {
        name: data['profile-name'],
        about: data['profile-info']
      }, 'PATCH')
  }

  editProfileImage(data) {
    return this._fetchWithBody('users/me/avatar', { avatar: data }, 'PATCH')
  }

  addNewCards(data) {
    return this._fetchWithBody('cards', data, 'POST')
  }

  _fetchWithoutBody(targetUrl, method) {
    return fetch(`${this._baseUrl}/${targetUrl}`, {
      method: method,
      headers: this._headers
    })
    .then(res => {
      if (res.ok) {
        return res.json()
      }
      return Promise.reject(`Ошибка: ${res.status}`);
    })
  }

  addLike(cardId) {
    return this._fetchWithoutBody(`cards/${cardId}/likes`, 'PUT');
  }

  removeLike(cardId) {
    return this._fetchWithoutBody(`cards/${cardId}/likes`, 'DELETE');
  }

  removeCard(cardId) {
    return this._fetchWithoutBody(`cards/${cardId}`, 'DELETE');
  }
}