const gameBoard = require('./mineSweeper').gameBoard;

describe('US 1 - Game board', () => {
  it('should have 9 squares', () => {
    expect(gameBoard.flat().length).toBe(9);
  });
});
