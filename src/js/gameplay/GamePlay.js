export default class GamePlay {
  constructor() {
    this.boardSize = 4;
    this.cells = [];
    this.container = null;
    this.board = null;
  }

  bindedToDOM(container) {
    if (!(container instanceof HTMLElement)) {
      throw new Error("container is not HTMLElement!");
    }
    this.container = container;
  }

  drawField() {
    this.checkBinding();

    this.container.innerHTML = `
    <div class="game-statistics">
      <p class="dead">Забодали: <span class="dead-number">0</span></p>
      <p class="lost">Промазали: <span class="lost-number">0</span></p>
    </div>
    <div class="board"></div>
    `;

    const boardsize = Math.pow(this.boardSize, 2);
    this.board = this.container.querySelector(".board");
    for (let i = 0; i < boardsize; i += 1) {
      const cell = document.createElement("div");
      cell.classList.add("cell");
      this.board.appendChild(cell);
    }
    this.cells = Array.from(this.board.children);
  }

  showMessage(message) {
    alert(message);
  }

  checkBinding() {
    if (this.container === null) {
      throw new Error("GamePlay not bind to DOM");
    }
  }
}
