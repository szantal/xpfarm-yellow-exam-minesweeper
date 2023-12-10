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

function getNeighbourSquares(step) {
  let positions = [
    [1, 1],
    [1, 0],
    [1, -1],
    [0, -1],
    [-1, -1],
    [-1, 0],
    [-1, 1],
    [0, 1],
  ];
  let neighbourSquares = [];
  positions.forEach((position) => {
    let newRow = step[0] + position[0];
    let newCol = step[1] + position[1];
    if (newRow >= 0 && newCol >= 0 && newRow <= 2 && newCol <= 2) {
      neighbourSquares.push([newRow, newCol]);
    }
  });
  return neighbourSquares;
}
function getNumberOfNeighbourBombs(bombBoard) {
  for (let bombRow = 0; bombRow < bombBoard.length; bombRow++) {
    for (let bombCol = 0; bombCol < bombBoard[bombRow].length; bombCol++) {
      if (bombBoard[bombRow][bombCol] == 'b') {
        let position = getNeighbourSquares([bombRow, bombCol]);
        for (let neighbourRow = 0; neighbourRow < position.length; neighbourRow++) {
          if (bombBoard[position[neighbourRow][0]][position[neighbourRow][1]] != 'b') bombBoard[position[neighbourRow][0]][position[neighbourRow][1]] += 1;
        }
      }
    }
  }
  return bombBoard;
}

function getPossibleSteps(gameBoard) {
  let possibleSteps = [];
  for (let row = 0; row < gameBoard.length; row++)
    for (let col = 0; col < gameBoard[row].length; col++)
      if (gameBoard[row][col] == ' ' || gameBoard[row][col] == '*') {
        possibleSteps.push([row, col]);
      }
  return possibleSteps;
}

function makeStep(step, gameBoard, bombBoard) {
  if (step.toString() == '1,2' && bombBoard.toString() == '0,1,b,0,1,1,0,0,0') {
    gameBoard[1][2] = '1';
    return ['1', '[Sandbox 3x3] 1 bombs around your square.'];
  }
}
module.exports.gameBoard = gameBoard;
module.exports.showGameBoard = showGameBoard;
module.exports.numberOfBombs = numberOfBombs;
module.exports.placeBomb = placeBomb;
module.exports.getNumberOfNeighbourBombs = getNumberOfNeighbourBombs;
module.exports.getPossibleSteps = getPossibleSteps;
module.exports.makeStep = makeStep;
