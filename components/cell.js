export default class Cell {
  constructor(parent, type, x, y) {
    this.parent = parent;
    this.type = type;
    this.x = x;
    this.y = y;
    this.createCell();
  }

  createCell() {
    this.element = document.createElement("div");
    this.element.classList.add("cell");
    this.element.classList.add(`cell--${this.type}`);
    this.element.classList.add(`cell--${this.x}-${this.y}`);
    this.parent.appendChild(this.element);
  }
}
