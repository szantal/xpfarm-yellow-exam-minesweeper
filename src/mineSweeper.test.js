const gameBoard = require('./mineSweeper').gameBoard;
const showGameBoard = require('./mineSweeper').showGameBoard;
const numberOfBombs = require('./mineSweeper').numberOfBombs;
const placeBomb = require('./mineSweeper').placeBomb;

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
});
