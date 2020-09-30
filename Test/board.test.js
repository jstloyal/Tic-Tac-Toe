import board from '../js/board';

const {
  boardArray, updateBoardArray, checkWin, checkDraw,
} = board;

test('It return an array of length 9, with empty string', () => {
  expect(boardArray).toEqual(['', '', '', '', '', '', '', '', '']);
});

test('It updates the board array', () => {
  const currentPlayer = { name: 'Sam', symbol: 'X' };
  updateBoardArray(currentPlayer, 0);
  expect(boardArray).toEqual(['X', '', '', '', '', '', '', '', '']);
});

describe('It checks for winning combination in the board array', () => {
  test('it return false when there is no winning combination in the board array', () => {
    const currentPlayer = { name: 'Sam', symbol: 'X' };
    expect(checkWin(currentPlayer)).toBeFalsy();
  });

  test('it return true when there is winning combination in the board array', () => {
    const currentPlayer = { name: 'Sam', symbol: 'X' };
    for (let i = 0; i < 3; i += 1) {
      updateBoardArray(currentPlayer, i);
    }
    expect(checkWin(currentPlayer)).toBeTruthy();
  });
});

describe('It checks if the game is a draw', () => {
  test('It return false if the game is not a draw', () => {
    const currentPlayer = { name: 'Sam', symbol: 'X' };
    expect(checkDraw(currentPlayer)).toBeFalsy();
  });

  test('It return true when the game is a draw', () => {
    const player1 = { name: 'Sam', symbol: 'X' };
    const player2 = { name: 'Tom', symbol: 'O' };
    [0, 2, 3, 7, 8].forEach((x) => {
      updateBoardArray(player1, x);
    });

    [1, 4, 5, 6].forEach((x) => {
      updateBoardArray(player2, x);
    });

    expect(checkDraw(player2)).toBeTruthy();
  });
});
