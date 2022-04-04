export default class Section {
  constructor(renderer, containerSelector) {
    this._container = document.querySelector(containerSelector);
    this._renderer = renderer;
  }
  
  addItem(item) {
    this._container.append(item);
  }
  
  addReversedItem(item) {
    console.log(item)
    const card = this._renderer(item)
    this._container.prepend(card);
  }

  loadItems(items) {
    items.forEach((item) => {
      this.addItem(this._renderer(item));
    });
  };
}