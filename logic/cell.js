import Preload from "./preload.js";
import player from "./player.js";

export default class Cell {
  constructor(parent, cellType, x, y) {
    this.parent = parent;
    this.cellType = cellType;
    this.x = x;
    this.y = y;
    this.cell = this.createCell();
    this.status = "neutral";
    this.addEventListener();
  }

  createCell() {
    const element = document.createElement("div");
    element.classList.add("cell");
    element.classList.add(`cell--${this.cellType}`);
    element.classList.add(`cell--${this.x}-${this.y}`);
    this.parent.appendChild(element);
    return element;
  }

  addEventListener() {
    this.cell.addEventListener("click", () => {
      console.log(`Clicked on cell ${this.x}-${this.y}`);
      if (player.build === "house") {
        this.addSVG("house");
      } else if (player.build === "farm") {
        this.addSVG("farm");
      } else if (player.build === "mine") {
        this.addSVG("mine");
      } else if (player.build === "fisher") {
        this.addSVG("fisher");
      }
    });

    this.cell.addEventListener("mouseover", () => {
      this.getStatus();
      this.setStatusClass();
    });
  }

  getStatus() {
    this.status = "neutral";
    if (player.build !== "") {
      this.status = "positive";
      if (this.cellType != player.build.cellType) this.status = "negative";
      for (const resource in player.build.costs) {
        if (player[resource] < player.build.costs[resource]) {
          this.status = "negative";
        }
      }
    }
  }

  setStatusClass() {
    this.cell.classList.remove("cell--status-neutral");
    this.cell.classList.remove("cell--status-positve");
    this.cell.classList.remove("cell--status-negative");
    this.cell.classList.add(`cell--status-${this.status}`);
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
