import SVG from "./svg.js";

export default class NextTurnBtn {
  constructor() {
    this.btn = this.addBtn();
  }

  addBtn() {
    const element = document.createElement("button");
    element.classList.add("nextTurnBtn");
    setTimeout(() => {
      element.appendChild(SVG.getSVG("chevronRight"));
    }, 300);
    return element;
  }
}
