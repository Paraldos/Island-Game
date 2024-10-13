import Preload from "./preload.js";
import player from "./player.js";

export default class Cell {
  constructor(parent, cellType, x, y) {
    this.parent = parent;
    this.cellType = cellType;
    this.x = x;
    this.y = y;
    this.status = "neutral";

    // create
    this.cell = this.createCell();

    // Event listeners
    this.cell.addEventListener("click", () => this.onClick());
    this.cell.addEventListener("mouseover", () => this.onMouseOver());
  }

  // create cell
  createCell() {
    const element = document.createElement("div");
    element.classList.add("cell");
    element.classList.add(`cell--${this.cellType}`);
    element.classList.add(`cell--${this.x}-${this.y}`);
    this.parent.appendChild(element);
    return element;
  }

  // Event handlers
  onClick() {
    if (this.status === "negative") return;
    if (player.build !== "") {
      this.addSVG(player.build.icon);
    }
  }

  onMouseOver() {
    this.updateStatus();
    this.setStatusClass();
  }

  // helper
  updateStatus() {
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

  async addSVG(svg) {
    this.clearCell();
    this.cell.appendChild(svg);
  }

  clearCell() {
    this.cell.innerHTML = "";
  }
}
