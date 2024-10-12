import Preload from "./preload.js";

export default class NextTurnBtn {
  constructor() {
    this.btn = this.addBtn();
  }

  addBtn() {
    const element = document.createElement("button");
    element.classList.add("nextTurnBtn");
    element.appendChild(Preload.getSVG("chevronRight"));
    return element;
  }
}
