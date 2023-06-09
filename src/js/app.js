// TODO: write code here
import GamePlay from "./gameplay/GamePlay";
import GameLogic from "./gamelogic/GameLogic";

document.addEventListener("DOMContentLoaded", () => {
  const gameplay = new GamePlay();
  gameplay.bindedToDOM(document.querySelector(".game-container"));

  const gamelogic = new GameLogic(gameplay);
  gamelogic.init();
});
