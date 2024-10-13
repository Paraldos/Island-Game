import Preload from "./preload.js";
import player from "./player.js";

export default class Cell {
  constructor(parent, cellType, x, y) {
    this.parent = parent;
    this.cellType = cellType;
    this.x = x;
    this.y = y;
    this.status = "neutral";
    this.building = null;

    // create
    this.cell = this.createCell();

    // Event listeners
    this.cell.addEventListener("click", (e) => this.onClick(e));
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
  onClick(e) {
    if (e.target !== this.cell) return;
    if (this.status === "negative") return;
    if (player.build !== "") {
      this.building = { ...player.build };
      this.addSVG(this.building.icon);
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
    const newSvg = svg.cloneNode(true);
    this.cell.appendChild(newSvg);
  }

  clearCell() {
    this.cell.innerHTML = "";
  }
}
