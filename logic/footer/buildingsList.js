export default class BuildingsList {
  constructor(parent) {
    this.parent = parent;
    this.container = this.addContainer();
    this.btn = this.addBtn();
    this.list = this.addList();
  }

  addContainer() {
    this.element = document.createElement("div");
    this.element.classList.add("buildings-list");
    this.parent.appendChild(this.element);
    return this.element;
  }

  addBtn() {
    const element = document.createElement("button");
    element.innerHTML = "Buildings";
    element.classList.add("buildings-list__btn");
    this.container.appendChild(element);
    return element;
  }

  addList() {
    const element = document.createElement("ul");
    element.classList.add("buildings-list");
    this.container.appendChild(element);
    return element;
  }
}
