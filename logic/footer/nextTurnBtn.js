import Preload from "../preload.js";

export default class NextTurnBtn {
  constructor(parent) {
    this.parent = parent;
    this.btn = this.addBtn();
    this.parent.appendChild(this.btn);
  }

  addBtn() {
    const element = document.createElement("button");
    element.classList.add("nextTurnBtn");
    element.appendChild(Preload.getSVG("chevronRight"));
    return element;
  }
}
