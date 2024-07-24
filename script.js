// using module pattern: IIFEs because we only need to use once

const displayController = (function () {
  const takeTurn = console.log("turn taken");
  return { takeTurn };
})();

const gameBoard = (function () {
  const boardContainer = document.getElementById("game-board-container");
  const gameBoard = document.createElement("div");
  gameBoard.id = "game-board";
  gameBoard.innerText = "This is a paragraph";
  // the tiles function is not returned, therefore private
  const tiles = () => {
    const tileCount = 9;
    const tile = document.createElement("div");
    //loop through tile count and create new element for each tile
    //attach click event listener to each tile and trigger display controller function, we will work from there
    // add all tile elements to the gameBoard
  };
  const create = () => {
    boardContainer.appendChild(gameBoard);
  };
  return { create };
})();

gameBoard.create();
