const gameBoard = require('./mineSweeper').gameBoard;
const showGameBoard = require('./mineSweeper').showGameBoard;
const numberOfBombs = require('./mineSweeper').numberOfBombs;
const placeBomb = require('./mineSweeper').placeBomb;
const getNumberOfNeighbourBombs = require('./mineSweeper').getNumberOfNeighbourBombs;

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
