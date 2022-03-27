(()=>{"use strict";var t={formSelector:".popup__container",inputSelector:".popup__form-field",submitButtonSelector:".popup__form-button",inactiveButtonClass:"popup__form-button_disabled",inputErrorClass:"popup__form-field-error"},e=document.querySelector(".profile__edit-button"),n=".popup_edit-profile",o=document.querySelector(".popup__container"),r=(document.querySelector(n).querySelector(".popup__form-field_type_name"),document.querySelector(n).querySelector(".popup__form-field_type_info"),".popup_add-image"),i=document.querySelector(".profile__add-button"),u=document.querySelector(r).querySelector(".popup__container"),a={};function l(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}var c=function(){function t(e,n,o){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._text=e,this._url=n,this._element=document.querySelector(".card-template").content.cloneNode(!0),this._cardImg=this._element.querySelector(".photos__item"),this._openPopup=o,this._cardCaption=this._element.querySelector(".photos__caption"),this._likeBtn=this._element.querySelector(".photos__like-button"),this._deleteBtn=this._element.querySelector(".photos__delete-button")}var e,n;return e=t,(n=[{key:"generateCard",value:function(){return this._cardImg.src=this._url,this._cardImg.alt="Картинка "+this._text,this._cardCaption.textContent=this._text,this._setEventListeners(),this._element}},{key:"getData",value:function(){return{text:this._text,url:this._url}}},{key:"_setEventListeners",value:function(){var t=this;this._likeBtn.addEventListener("click",(function(){return t._likeBtn.classList.toggle("photos__like-button_active")})),this._deleteBtn.addEventListener("click",(function(t){t.target.closest(".photos__card").remove()})),this._cardImg.addEventListener("click",(function(){return t._openPopup()}))}}])&&l(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function s(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}var p=function(){function t(e,n){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._formElement=n,this._validatorSettings=e,this._formSelector=e.formSelector,this._inputSelector=e.inputSelector,this._submitButtonSelector=e.submitButtonSelector,this._inactiveButtonClass=e.inactiveButtonClass,this._inputErrorClass=e.inputErrorClass,this._inputList=Array.from(this._formElement.querySelectorAll(this._inputSelector)),this._buttonElement=this._formElement.querySelector(this._submitButtonSelector),this._formList=Array.from(document.querySelectorAll(this._formSelector))}var e,n;return e=t,(n=[{key:"_showInputError",value:function(t,e){var n=this._formElement.querySelector(".".concat(t.name,"-error"));t.classList.add(this._inputErrorClass),n.textContent=e}},{key:"_hideInputError",value:function(t){var e=this._formElement.querySelector(".".concat(t.name,"-error"));t.classList.remove(this._inputErrorClass),e.textContent=""}},{key:"_checkInputValidity",value:function(t){t.validity.valid?this._hideInputError(t):this._showInputError(t,t.validationMessage)}},{key:"_setEventListeners",value:function(){var t=this;this._toggleButtonState(),this._inputList.forEach((function(e){e.addEventListener("input",(function(){t._checkInputValidity(e),t._toggleButtonState()}))}))}},{key:"_toggleButtonState",value:function(){this._hasInvalidInput()?(this._buttonElement.classList.add(this._inactiveButtonClass),this._buttonElement.disabled=!0):(this._buttonElement.classList.remove(this._inactiveButtonClass),this._buttonElement.disabled=!1)}},{key:"_hasInvalidInput",value:function(){return this._inputList.some((function(t){return!t.validity.valid}))}},{key:"resetValidation",value:function(){var t=this;this._toggleButtonState(),this._inputList.forEach((function(e){t._hideInputError(e)}))}},{key:"enableValidation",value:function(){this._formElement.addEventListener("submit",(function(t){t.preventDefault()})),this._setEventListeners()}}])&&s(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function f(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}var _=function(){function t(e,n){var o=e.items,r=e.renderer;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._items=o,this._container=document.querySelector(n),this._renderer=r}var e,n;return e=t,(n=[{key:"addItem",value:function(t){this._container.append(t)}},{key:"addReversedItem",value:function(t){this._container.prepend(t)}},{key:"loadItems",value:function(){var t=this;this._items.forEach((function(e){t._renderer(e.name,e.link)}))}}])&&f(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function h(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}var y=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._popup=document.querySelector(e),this._handleEscClose=this._handleEscClose.bind(this),this._popupOverlay=this._popup.querySelector(".popup__overlay"),this._closeButton=this._popup.querySelector(".popup__close-button")}var e,n;return e=t,(n=[{key:"openPopup",value:function(){this._popup.classList.add("popup_active"),document.addEventListener("keydown",this._handleEscClose)}},{key:"closePopup",value:function(){this._popup.classList.remove("popup_active"),document.removeEventListener("keydown",this._handleEscClose)}},{key:"setEventListeners",value:function(){var t=this;this._popup.addEventListener("mousedown",(function(e){e.target.classList.contains("popup__overlay")&&t.closePopup(),e.target.classList.contains("popup__close-button")&&t.closePopup()}))}},{key:"_handleEscClose",value:function(t){"Escape"===t.key&&this.closePopup()}}])&&h(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function d(t){return d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},d(t)}function m(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function v(){return v="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(t,e,n){var o=b(t,e);if(o){var r=Object.getOwnPropertyDescriptor(o,e);return r.get?r.get.call(arguments.length<3?t:n):r.value}},v.apply(this,arguments)}function b(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=E(t)););return t}function w(t,e){return w=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},w(t,e)}function g(t,e){if(e&&("object"===d(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}function E(t){return E=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},E(t)}var S=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&w(t,e)}(u,t);var e,n,o,r,i=(o=u,r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=E(o);if(r){var n=E(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return g(this,t)});function u(t){var e;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u),(e=i.call(this,t))._imageText=e._popup.querySelector(".popup-picture__caption"),e._imageUrl=e._popup.querySelector(".popup-picture__item"),e}return e=u,(n=[{key:"openPopup",value:function(t){this._imageText.textContent=t.text,this._imageUrl.src=t.url,this._imageUrl.alt="Картинка "+t.text,v(E(u.prototype),"openPopup",this).call(this)}}])&&m(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),u}(y);function x(t){return x="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},x(t)}function k(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function P(){return P="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(t,e,n){var o=O(t,e);if(o){var r=Object.getOwnPropertyDescriptor(o,e);return r.get?r.get.call(arguments.length<3?t:n):r.value}},P.apply(this,arguments)}function O(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=L(t)););return t}function j(t,e){return j=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},j(t,e)}function q(t,e){if(e&&("object"===x(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}function L(t){return L=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},L(t)}var B=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&j(t,e)}(u,t);var e,n,o,r,i=(o=u,r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=L(o);if(r){var n=L(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return q(this,t)});function u(t,e){var n;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u),(n=i.call(this,t))._submitForm=e,n._defaultTitle=n._popup.querySelector(".popup__form-field_type_name"),n._defaultInfo=n._popup.querySelector(".popup__form-field_type_info"),n._inputList=n._popup.querySelectorAll(".popup__form-field"),n._formValues={},n._form=n._popup.querySelector(".popup__container"),n}return e=u,(n=[{key:"_getInputValues",value:function(){var t=this;return this._inputList.forEach((function(e){t._formValues[e.name]=e.value})),this._formValues}},{key:"setDefaultParams",value:function(t){this._defaultTitle.value=t.name,this._defaultInfo.value=t.description}},{key:"_handleSubmit",value:function(t){t.preventDefault(),this._submitForm(this._getInputValues()),this.closePopup()}},{key:"setEventListeners",value:function(){P(L(u.prototype),"setEventListeners",this).call(this),this._form.addEventListener("submit",this._handleSubmit.bind(this))}},{key:"closePopup",value:function(){this._form.reset(),P(L(u.prototype),"closePopup",this).call(this)}}])&&k(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),u}(y);function C(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}var I=function(){function t(e){var n=e.name,o=e.info;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._title=document.querySelector(n),this._info=document.querySelector(o)}var e,n;return e=t,(n=[{key:"getUserInfo",value:function(){return{name:this._title.textContent,description:this._info.textContent}}},{key:"setUserInfo",value:function(t){this._title.textContent=t["profile-name"],this._info.textContent=t["profile-info"]}}])&&C(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}(),D=new S(".popup-picture");function R(t,e){var n=new c(t,e,(function(){return t=n.getData(),void D.openPopup(t);var t}));return n.generateCard()}D.setEventListeners();var M=new _({items:[{name:"Цветок",link:"https://images.unsplash.com/photo-1641842909513-0c59448a17d9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"},{name:"Папоротник",link:"https://images.unsplash.com/photo-1641328406522-f94f8a050fd1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"},{name:"Цветы",link:"https://images.unsplash.com/photo-1640282385915-c515d654338d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"},{name:"Заледеневшие листья",link:"https://images.unsplash.com/photo-1640177469193-148eeed13e0d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"},{name:"Горы",link:"https://images.unsplash.com/photo-1638969710700-f803636a3e85?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"},{name:"Листья",link:"https://images.unsplash.com/photo-1639403277293-14a53e4e11ab?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80"}],renderer:function(t,e){M.addItem(R(t,e))}},".photos");M.loadItems();var H=new I({name:".profile__title",info:".profile__subtitle"}),V=new B(n,(function(t){H.setUserInfo(t)}));V.setEventListeners();var A=new B(r,(function(t){M.addReversedItem(R(t["image-name"],t["image-url"])),A.closePopup()}));A.setEventListeners(),Array.from(document.querySelectorAll(".popup__container")).forEach((function(e){var n=new p(t,e),o=e.getAttribute("name");a[o]=n,n.enableValidation()})),i.addEventListener("click",(function(){u.reset(),a[u.getAttribute("name")].resetValidation(),A.openPopup()})),e.addEventListener("click",(function(){V.setDefaultParams(H.getUserInfo()),a[o.getAttribute("name")].resetValidation(),V.openPopup()}))})();