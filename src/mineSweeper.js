let gameBoard = [
  [' ', ' ', ' '],
  [' ', ' ', ' '],
  [' ', ' ', ' '],
];

function showGameBoard() {
  let line = '\n+-+-+-+\n|';
  return (
    line +
    gameBoard[0][0] +
    '|' +
    gameBoard[0][1] +
    '|' +
    gameBoard[0][2] +
    '|' +
    line +
    gameBoard[1][0] +
    '|' +
    gameBoard[1][1] +
    '|' +
    gameBoard[1][2] +
    '|' +
    line +
    gameBoard[2][0] +
    '|' +
    gameBoard[2][1] +
    '|' +
    gameBoard[2][2] +
    '|\n+-+-+-+\n[Sandbox 3x3] Game created'
  );
}

let numberOfBombs = [1, 3][Math.round(Math.random())];

module.exports.gameBoard = gameBoard;
module.exports.showGameBoard = showGameBoard;
module.exports.numberOfBombs = numberOfBombs;
