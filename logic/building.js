import Preload from "./preload.js";

export default class Building {
  constructor(name, icon) {
    this.name = name;
    this.icon = icon;
    document.body.addEventListener("svgsLoaded", () => {
      this.icon = Preload.getSVG(this.icon);
    });
  }
}
