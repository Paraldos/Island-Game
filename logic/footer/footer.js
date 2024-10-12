import NextTurnBtn from "./nextTurnBtn.js";
import BuildingsList from "./buildingsList.js";

export default class Footer {
  constructor() {
    this.container = this.createContainer();
    new BuildingsList(this.container);
    new NextTurnBtn(this.container);
  }

  createContainer() {
    const element = document.createElement("div");
    element.classList.add("footer");
    document.body.appendChild(element);
    return element;
  }
}
