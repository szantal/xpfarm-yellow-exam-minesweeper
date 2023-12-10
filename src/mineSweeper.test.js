const gameBoard = require('./mineSweeper').gameBoard;
const showGameBoard = require('./mineSweeper').showGameBoard;
const numberOfBombs = require('./mineSweeper').numberOfBombs;
const placeBomb = require('./mineSweeper').placeBomb;
const getNumberOfNeighbourBombs = require('./mineSweeper').getNumberOfNeighbourBombs;
const getPossibleSteps = require('./mineSweeper').getPossibleSteps;
const makeStep = require('./mineSweeper').makeStep;
const markSquare = require('./mineSweeper').markSquare;
const checkWin = require('./mineSweeper').checkWin;

describe('US 1 - Game board', () => {
  it('should have 9 squares', () => {
    expect(gameBoard.flat().length).toBe(9);
  });
  it('empty game board should appear as \n+-+-+-+\n| | | |\n+-+-+-+\n| | | |\n+-+-+-+\n| | | |\n+-+-+-+\n[Sandbox 3x3] Game created', () => {
    expect(showGameBoard('[Sandbox 3x3] Game created')).toBe('\n+-+-+-+\n| | | |\n+-+-+-+\n| | | |\n+-+-+-+\n| | | |\n+-+-+-+\n[Sandbox 3x3] Game created');
  });
});
describe('US 2 - Number of bombs', () => {
  it('should be 1 or 3', () => {
    expect([1, 3]).toContain(numberOfBombs);
  });
});
describe('US 3 - Number of bombs placed on the game board', () => {
  it('should be 1 when there is 1 bomb', () => {
    expect(
      placeBomb(1)
        .flat()
        .filter((c) => c === 'b').length,
    ).toBe(1);
  });
  it('should be 3 when there are 3 bombs', () => {
    expect(
      placeBomb(3)
        .flat()
        .filter((c) => c === 'b').length,
    ).toBe(3);
  });
});

describe('US 4 - Board with the number of neighbour squares with bombs', () => {
  it('should be \n02b\n03b\n02b\n when bombs are placed here: \n--b\n--b\n--b', () => {
    let bombBoard = [
      [0, 0, 'b'],
      [0, 0, 'b'],
      [0, 0, 'b'],
    ];
    expect(getNumberOfNeighbourBombs(bombBoard).toString()).toBe(
      [
        [0, 2, 'b'],
        [0, 3, 'b'],
        [0, 2, 'b'],
      ].toString(),
    );
  });
  it('should be \n01b\n011\n000\n when bombs are placed here: \n--b\n---\n---', () => {
    let bombBoard = [
      [0, 0, 'b'],
      [0, 0, 0],
      [0, 0, 0],
    ];
    expect(getNumberOfNeighbourBombs(bombBoard).toString()).toBe(
      [
        [0, 1, 'b'],
        [0, 1, 1],
        [0, 0, 0],
      ].toString(),
    );
  });
  it('should be \n111\n1b1\n111\n when bombs are placed here: \n---\n-b-\n---', () => {
    let bombBoard = [
      [0, 0, 0],
      [0, 'b', 0],
      [0, 0, 0],
    ];
    expect(getNumberOfNeighbourBombs(bombBoard).toString()).toBe(
      [
        [1, 1, 1],
        [1, 'b', 1],
        [1, 1, 1],
      ].toString(),
    );
  });
  it('should be \nb2b\n132\n01b\n when bombs are placed here: \nb-b\n---\n--b', () => {
    let bombBoard = [
      ['b', 0, 'b'],
      [0, 0, 0],
      [0, 0, 'b'],
    ];
    expect(getNumberOfNeighbourBombs(bombBoard).toString()).toBe(
      [
        ['b', 2, 'b'],
        [1, 3, 2],
        [0, 1, 'b'],
      ].toString(),
    );
  });
});
describe('US 5 - Listing possible steps', () => {
  it('should be all 9 squares given an empty game board', () => {
    let gameBoard = [
      [' ', ' ', ' '],
      [' ', ' ', ' '],
      [' ', ' ', ' '],
    ];
    expect(getPossibleSteps(gameBoard).toString()).toBe(
      [
        [0, 0],
        [0, 1],
        [0, 2],
        [1, 0],
        [1, 1],
        [1, 2],
        [2, 0],
        [2, 1],
        [2, 2],
      ].toString(),
    );
  });
  it('should be the 5 free squares listed given game board \n1--\n23-\n--1', () => {
    let gameBoard = [
      ['1', ' ', ' '],
      ['2', '3', ' '],
      [' ', ' ', '1'],
    ];
    expect(getPossibleSteps(gameBoard).toString()).toBe(
      [
        [0, 1],
        [0, 2],
        [1, 2],
        [2, 0],
        [2, 1],
      ].toString(),
    );
  });
  it('should be the 4 free squares listed given game board \n22-\n**2\n3*2', () => {
    let gameBoard = [
      ['2', '2', ' '],
      ['*', '*', '2'],
      ['3', '*', '2'],
    ];
    expect(getPossibleSteps(gameBoard).toString()).toBe(
      [
        [0, 2],
        [1, 0],
        [1, 1],
        [2, 1],
      ].toString(),
    );
  });
});
describe('US 6 - Making step', () => {
  it('on empty board to square 2;1 should return 1 to board and message: [Sandbox 3x3] 1 bombs around your square.', () => {
    let step = [1, 2];
    let gameBoard = [
      [' ', ' ', ' '],
      [' ', ' ', ' '],
      [' ', ' ', ' '],
    ];
    let bombBoard = [
      [0, 1, 'b'],
      [0, 1, 1],
      [0, 0, 0],
    ];
    expect(makeStep(step, gameBoard, bombBoard)[0]).toBe('1');
    expect(makeStep(step, gameBoard, bombBoard)[1]).toBe('[Sandbox 3x3] 1 bombs around your square.');
    expect(gameBoard.toString()).toBe(
      [
        [' ', ' ', ' '],
        [' ', ' ', '1'],
        [' ', ' ', ' '],
      ].toString(),
    );
  });
  it('on empty board to square 0;0 should return 3 to board and message: [Sandbox 3x3] 3 bombs around your square.', () => {
    let step = [2, 0];
    let gameBoard = [
      [' ', ' ', ' '],
      [' ', ' ', ' '],
      [' ', ' ', ' '],
    ];
    let bombBoard = [
      [2, 2, 1],
      ['b', 'b', 2],
      [3, 'b', 2],
    ];
    expect(makeStep(step, gameBoard, bombBoard)[0]).toBe('3');
    expect(makeStep(step, gameBoard, bombBoard)[1]).toBe('[Sandbox 3x3] 3 bombs around your square.');
    expect(gameBoard.toString()).toBe(
      [
        [' ', ' ', ' '],
        [' ', ' ', ' '],
        ['3', ' ', ' '],
      ].toString(),
    );
  });
  it('on empty board to square 1;1 should return X to board and message: [Sandbox 3x3] BOOM! - Game Over.', () => {
    let step = [1, 1];
    let gameBoard = [
      [' ', ' ', ' '],
      [' ', ' ', ' '],
      [' ', ' ', ' '],
    ];
    let bombBoard = [
      [1, 1, 1],
      [1, 'b', 1],
      [1, 1, 1],
    ];
    expect(makeStep(step, gameBoard, bombBoard)[0]).toBe('X');
    expect(makeStep(step, gameBoard, bombBoard)[1]).toBe('[Sandbox 3x3] BOOM! - Game Over.');
    expect(gameBoard.toString()).toBe(
      [
        [' ', ' ', ' '],
        [' ', 'X', ' '],
        [' ', ' ', ' '],
      ].toString(),
    );
  });
  it('on board \n1--\n23-\n--1 to square 1;0 should return 1 to board and message: [Sandbox 3x3] 2 bombs around your square.', () => {
    let step = [2, 1];
    let gameBoard = [
      ['1', ' ', ' '],
      ['2', '3', ' '],
      [' ', ' ', '1'],
    ];
    let bombBoard = [
      [1, 'b', 2],
      [2, 3, 'b'],
      ['b', 2, 1],
    ];
    expect(makeStep(step, gameBoard, bombBoard)[0]).toBe('2');
    expect(makeStep(step, gameBoard, bombBoard)[1]).toBe('[Sandbox 3x3] 2 bombs around your square.');
    expect(gameBoard.toString()).toBe(
      [
        ['1', ' ', ' '],
        ['2', '3', ' '],
        [' ', '2', '1'],
      ].toString(),
    );
  });
  it('on empty board to square 2;0 should should return _ to board and message: [Sandbox 3x3] 0 bomb around your square.', () => {
    let step = [2, 2];
    let gameBoard = [
      [' ', ' ', ' '],
      [' ', ' ', ' '],
      [' ', ' ', ' '],
    ];
    let bombBoard = [
      [1, 'b', 'b'],
      [2, 3, 2],
      ['b', 1, 0],
    ];
    expect(makeStep(step, gameBoard, bombBoard)[0]).toBe('_');
    expect(makeStep(step, gameBoard, bombBoard)[1]).toBe('[Sandbox 3x3] 0 bomb around your square.');
    expect(gameBoard.toString()).toBe(
      [
        [' ', ' ', ' '],
        [' ', ' ', ' '],
        [' ', ' ', '_'],
      ].toString(),
    );
  });
});
describe('US 7 - Mark square as bomb', () => {
  it('on empty board on square 0;0 should return * and message: [Sandbox 3x3] Square flagged as bomb.', () => {
    let step = [2, 0];
    let gameBoard = [
      [' ', ' ', ' '],
      [' ', ' ', ' '],
      [' ', ' ', ' '],
    ];
    expect(markSquare(step, gameBoard)).toStrictEqual(['*', '[Sandbox 3x3] Square flagged as bomb.']);
    expect(gameBoard.toString()).toBe(
      [
        [' ', ' ', ' '],
        [' ', ' ', ' '],
        ['*', ' ', ' '],
      ].toString(),
    );
  });
  it('on board \n1--\n*32\n-1_\n on square 0;1 should return " " and message: [Sandbox 3x3] Square unflagged.', () => {
    let step = [1, 0];
    let gameBoard = [
      ['1', ' ', ' '],
      ['*', '3', '2'],
      [' ', '1', '_'],
    ];
    expect(markSquare(step, gameBoard)).toStrictEqual([' ', '[Sandbox 3x3] Square unflagged.']);
    expect(gameBoard.toString()).toBe(
      [
        ['1', ' ', ' '],
        [' ', '3', '2'],
        [' ', '1', '_'],
      ].toString(),
    );
  });
  it('on board \n---\n**-\n3--\n on square 1;0 should return * and message: [Sandbox 3x3] Square flagged as bomb.', () => {
    let step = [2, 1];
    let gameBoard = [
      [' ', ' ', ' '],
      ['*', '*', ' '],
      ['3', ' ', ' '],
    ];
    expect(markSquare(step, gameBoard)).toStrictEqual(['*', '[Sandbox 3x3] Square flagged as bomb.']);
    expect(gameBoard.toString()).toBe(
      [
        [' ', ' ', ' '],
        ['*', '*', ' '],
        ['3', '*', ' '],
      ].toString(),
    );
  });
});
describe('US 8 - Check win', () => {
  it('on board \n---\n--1\n---\n with 3 hidden bombs should result no win', () => {
    let gameBoard = [
      [' ', ' ', ' '],
      [' ', ' ', '1'],
      [' ', ' ', ' '],
    ];
    expect(checkWin(gameBoard, 3)).toBe(false);
  });
  it('on board \n*2*\n132\n---\n with 3 hidden bombs should result no win', () => {
    let gameBoard = [
      ['*', '2', '*'],
      ['1', '3', '2'],
      [' ', ' ', ' '],
    ];
    expect(checkWin(gameBoard, 3)).toBe(false);
  });
});
