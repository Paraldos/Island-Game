export default class Board {
  constructor() {
    this.board = this.createBoard();
    this.grid = [
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 1, 1, 1, 1, 0, 0, 0, 0],
      [0, 1, 2, 2, 2, 2, 1, 1, 0, 0],
      [0, 1, 2, 2, 2, 2, 2, 2, 1, 0],
      [0, 0, 1, 2, 2, 2, 2, 2, 1, 0],
      [0, 1, 2, 2, 2, 2, 2, 1, 0, 0],
      [0, 0, 1, 2, 2, 2, 2, 1, 0, 0],
      [0, 0, 0, 1, 1, 2, 2, 2, 1, 0],
      [0, 0, 0, 0, 0, 1, 1, 1, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    ];
    this.displayGrid();
  }

  createBoard() {
    const board = document.createElement("div");
    board.classList.add("board");
    document.body.appendChild(board);
    return board;
  }

  createGrid(size = 20) {
    let grid = [];
    for (let i = 0; i < size; i++) {
      // add row
      let row = [];
      grid.push(row);
      // add cell
      for (let j = 0; j < size; j++) {
        row.push(0);
      }
    }
    return grid;
  }

  async displayGrid() {
    for (let y = 0; y < this.grid.length; y++) {
      for (let x = 0; x < this.grid[y].length; x++) {
        const element = document.createElement("div");
        this.board.appendChild(element);
        // type
        switch (this.grid[y][x]) {
          case 0:
            element.classList.add(`board__cell--water`);
            break;
          case 1:
            element.classList.add(`board__cell--sand`);
            break;
          case 2:
            element.classList.add(`board__cell--land`);
            break;
        }
        // classes
        element.classList.add(`board__cell`);
        element.classList.add(`board__cell-${x}-${y}`);
        // styles
        element.style.setProperty("--position-x", x);
        element.style.setProperty("--position-y", y);
      }
    }
  }
}
