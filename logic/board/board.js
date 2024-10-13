import Cell from "./cell.js";

export default class Board {
  constructor() {
    this.boardSize = 10;
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
    this.createCells();
  }

  createBoard() {
    const board = document.createElement("div");
    board.classList.add("board");
    board.style.setProperty("--board-size", this.boardSize);
    document.body.appendChild(board);
    return board;
  }

  createGrid() {
    let grid = [];
    for (let i = 0; i < this.boardSize; i++) {
      // add row
      let row = [];
      grid.push(row);
      // add cell
      for (let j = 0; j < this.boardSize; j++) {
        row.push(0);
      }
    }
    return grid;
  }

  async createCells() {
    for (let y = 0; y < this.grid.length; y++) {
      for (let x = 0; x < this.grid[y].length; x++) {
        let type = "";
        switch (this.grid[y][x]) {
          case 0:
            type = "water";
            break;
          case 1:
            type = "coast";
            break;
          case 2:
            type = "land";
            break;
        }
        new Cell(this.board, type, x, y);
      }
    }
  }
}
