import Preload from "./preload.js";

export default class Building {
  constructor(name, icon, costs = {}, cellType) {
    this.name = name;
    this.icon = icon;
    this.costs = costs;
    this.cellType = cellType;
    document.body.addEventListener("svgsLoaded", () => {
      this.icon = Preload.getSVG(this.icon);
    });
  }
}
