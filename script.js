// player factory function
//createPlayer
// name, marker

// using module pattern: IIFEs because we only need to use once

const displayController = (function () {
  const takeTurn = function (i) {
    console.log("clicked " + i);
  };
  return { takeTurn };
})();

const gameBoard = (function () {
  const { takeTurn } = displayController; // give access to the takeTurn function with destructuring
  const boardContainer = document.getElementById("game-board-container");
  const gameBoard = document.createElement("div");
  gameBoard.id = "game-board";
  // the addSquares function is not returned, therefore private
  const addSquares = () => {
    const squareCount = 9;
    //loop through square count and create new element for each square
    for (let i = 0; i < squareCount; i++) {
      const square = document.createElement("div");
      square.classList.add("game-square", `game-square--${i}`);
      // attach click event listener to each square and trigger display controller function, we will work from there
      square.addEventListener("click", () => {
        takeTurn(i);
        // if takeTurn returns marker X or O we will add element to the div
      });
      // add square element to the gameBoard
      gameBoard.appendChild(square);
    }
  };

  const createBoard = () => {
    addSquares();
    boardContainer.appendChild(gameBoard);
  };
  return createBoard();
  //return {create};
  //or if we don't want it run immediately, or return multiple functions we can call the gameBoard.create() later
})();

//create a start game function that create a board and two player objects

//create a reset game function
