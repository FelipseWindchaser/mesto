export default class Section {
  constructor({renderer}, containerSelector) {
    this._container = document.querySelector(containerSelector);
    this._renderer = renderer;
  }
  
  addItem(item) {
    this._container.append(item);
  }
  
  addReversedItem(item) {
    this._container.prepend(item);
  }

  loadItems(items) {
    items.forEach((item) => {
      this._renderer(item);
    });
  };
}