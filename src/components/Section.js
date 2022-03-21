export default class Section {
  constructor({items, renderer}, containerSelector) {
    this._items = items;
    this._container = document.querySelector(containerSelector);
    this._renderer = renderer;
  }
  
  addItem(item) {
    this._container.append(item);
  }
  
  addReversedItem(item) {
    this._container.prepend(item);
  }

  loadItems() {
    this._items.forEach((item) => {
      this._renderer(item.name, item.link);
    });
  };
}