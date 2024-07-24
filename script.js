// player factory function
//createPlayer
// name, marker

// using module pattern: IIFEs because we only need to use once

const gameController = (function () {
  //create function  which player turn

  //has the square already been clicked

  const takeTurn = function (square) {
    // check value exists in object otherwise update the object
    return "naught";
  };
  return { takeTurn };
})();

const gameBoard = (function () {
  const { takeTurn } = gameController; // give access to the takeTurn function with destructuring
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
      // attach click event listener to each square and trigger game controller function, we will work from there
      square.addEventListener("click", () => {
        // if takeTurn returns marker X or O we will add element to the div
        if (takeTurn(i) === "cross") {
          square.classList.add("game-square-cross");
        } else if (takeTurn(i) === "naught") {
          square.classList.add("game-square-naught");
        } else {
          return;
        }
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
