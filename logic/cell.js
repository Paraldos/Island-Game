import Preload from "./preload.js";

export default class Cell {
  constructor(parent, type, x, y) {
    this.parent = parent;
    this.type = type;
    this.x = x;
    this.y = y;
    this.cell = this.createCell();
    this.addEventListener();
  }

  createCell() {
    const element = document.createElement("div");
    element.classList.add("cell");
    element.classList.add(`cell--${this.type}`);
    element.classList.add(`cell--${this.x}-${this.y}`);
    this.parent.appendChild(element);
    return element;
  }

  addEventListener() {
    this.cell.addEventListener("click", () => {
      console.log(`Clicked on cell ${this.x}-${this.y}`);
      this.addSVG("house");
    });
  }

  async addSVG(nameOfSVG) {
    this.clearCell();
    const svg = Preload.getSVG(nameOfSVG);
    this.cell.appendChild(svg);
  }

  clearCell() {
    this.cell.innerHTML = "";
  }
}
