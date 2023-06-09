export default class GameLogic {
  constructor(gameplay) {
    this.gameplay = gameplay;
    this.interval = null;
    this.deadCount = 0;
    this.lostCount = 0;
  }

  init() {
    this.gameplay.drawField();
    this.gameplay.board.addEventListener("click", this.onClick.bind(this));
    this.onInterval();
  }

  getRandom() {
    return Math.floor(Math.random() * this.gameplay.cells.length);
  }

  onInterval() {
    this.interval = setInterval(() => {
      let oneRandom = this.getRandom();
      this.gameplay.cells.forEach((el, i, arr) => {
        if (i === oneRandom) {
          if (el === arr[i]) {
            el.classList.add("cell-with-goblin");
          }
        } else {
          el.classList.remove("cell-with-goblin");
        }
      });
    }, 1000);
  }

  onClick(e) {
    let dead = document.querySelector(".dead-number");
    let lost = document.querySelector(".lost-number");
    if (e.target.classList.contains("cell-with-goblin")) {
      this.deadCount += 1;
      dead.textContent = this.deadCount;
      if (this.deadCount >= 5) {
        clearInterval(this.interval);
        this.gameplay.showMessage("Вы забодали гоблина!");
        dead.textContent = 0;
        lost.textContent = 0;
      }
    }
    if (
      !e.target.classList.contains("cell-with-goblin") &&
      e.target.classList.contains("cell")
    ) {
      this.lostCount += 1;
      lost.textContent = this.lostCount;
      if (this.lostCount >= 5) {
        clearInterval(this.interval);
        this.gameplay.showMessage("Гоблин не забодан!");
        dead.textContent = 0;
        lost.textContent = 0;
      }
    }
    e.target.classList.remove("cell-with-goblin");
  }
}
