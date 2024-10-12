import player from "./player.js";

export default class Header {
  constructor() {
    this.container = this.createContainer();
    this.createResourceUI();
  }

  createContainer() {
    const element = document.createElement("div");
    element.classList.add("header");
    document.body.appendChild(element);
    return element;
  }

  createResourceUI() {
    const element = document.createElement("p");
    element.classList.add("header__resources");
    element.innerHTML = `Gold: ${player.gold} | Wood: ${player.wood} | Food: ${player.food} | Stone: ${player.stone} | Population: ${player.population}`;
    this.container.appendChild(element);
  }
}
