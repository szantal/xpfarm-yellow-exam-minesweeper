const gameBoard = require('./mineSweeper').gameBoard;
const showGameBoard = require('./mineSweeper').showGameBoard;

describe('US 1 - Game board', () => {
  it('should have 9 squares', () => {
    expect(gameBoard.flat().length).toBe(9);
  });
  it('empty game board should appear as \n+-+-+-+\n| | | |\n+-+-+-+\n| | | |\n+-+-+-+\n| | | |\n+-+-+-+\n[Sandbox 3x3] Game created', () => {
    expect(showGameBoard('[Sandbox 3x3] Game created')).toBe('\n+-+-+-+\n| | | |\n+-+-+-+\n| | | |\n+-+-+-+\n| | | |\n+-+-+-+\n[Sandbox 3x3] Game created');
  });
});
