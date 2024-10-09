export default class Board {
  constructor() {
    this.grid = this.createGrid();
    this.displayGrid();
  }

  createGrid(size = 5) {
    let grid = [];
    for (let i = 0; i < size; i++) {
      let row = [];
      grid.push(row);
      for (let j = 0; j < size * 2; j++) {
        row.push(0);
      }
    }
    return grid;
  }

  async displayGrid() {
    const svgResponse = await fetch("assets/board/hexagon.svg");
    const svgText = await svgResponse.text();
    const parser = new DOMParser();
    const svgDocument = parser.parseFromString(svgText, "image/svg+xml");
    const svgElement = svgDocument.documentElement;

    for (let x = 0; x < this.grid.length; x++) {
      for (let y = 0; y < this.grid[x].length; y++) {
        const hexSize = 100;
        const element = document.createElement("div");
        element.classList.add(`board__cell`);

        element.style.setProperty("--position-x", x * hexSize + "px");
        element.style.setProperty("--position-y", y * hexSize + "px");

        const xOffset = y % 2 !== 0 ? x * 25 + 50 : x * 25;
        element.style.setProperty("--offset-x", xOffset + "px");
        element.style.setProperty("--offset-y", y * -50 + "px");
        console.log(y * 50);

        const svgClone = svgElement.cloneNode(true);
        element.appendChild(svgClone);
        document.body.appendChild(element);
      }
    }
  }
}
