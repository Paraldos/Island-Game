export default class Board {
  constructor() {
    this.board = this.createBoard();
    this.grid = this.createGrid();
    this.grid[3][3] = 1;
    this.grid[3][4] = 2;
    this.grid[4][3] = 1;
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
      let row = [];
      grid.push(row);
      for (let j = 0; j < size; j++) {
        row.push(0);
      }
    }
    return grid;
  }

  async displayGrid() {
    for (let x = 0; x < this.grid.length; x++) {
      for (let y = 0; y < this.grid[x].length; y++) {
        const element = document.createElement("div");
        this.board.appendChild(element);
        // type
        switch (this.grid[x][y]) {
          case 0:
            element.classList.add(`board__cell--water`);
            break;
          case 1:
            element.classList.add(`board__cell--land`);
            break;
          case 2:
            element.classList.add(`board__cell--stone`);
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
