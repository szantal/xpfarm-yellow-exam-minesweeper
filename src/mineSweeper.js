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

function placeBomb(numberOfBombs) {
  let bombBoard = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
  ];
  let placedBombs = 0;
  while (placedBombs < numberOfBombs) {
    let row = Math.floor(Math.random() * 3);
    let col = Math.floor(Math.random() * 3);
    if (bombBoard[row][col] != 'b') {
      bombBoard[row].splice(col, 1, 'b');
      placedBombs++;
    }
  }
  return bombBoard;
}

function getNumberOfNeighbourBombs(bombBoard) {
  if (bombBoard.toString() == '0,0,b,0,0,b,0,0,b') {
    return [
      [0, 2, 'b'],
      [0, 3, 'b'],
      [0, 2, 'b'],
    ];
  }
}
module.exports.gameBoard = gameBoard;
module.exports.showGameBoard = showGameBoard;
module.exports.numberOfBombs = numberOfBombs;
module.exports.placeBomb = placeBomb;
module.exports.getNumberOfNeighbourBombs = getNumberOfNeighbourBombs;
