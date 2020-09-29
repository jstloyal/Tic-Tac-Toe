import board from "../js/board";

const { boardArray, updateBoardArray, checkWin } = board;

test("It return an array of length 9, with empty string", () => {
  expect(boardArray).toEqual(["", "", "", "", "", "", "", "", ""]);
});

test("It updates the board array", () => {
  let currentPlayer = { name: "Sam", symbol: "X" };
  updateBoardArray(currentPlayer, 0);
  expect(boardArray).toEqual(["X", "", "", "", "", "", "", "", ""]);
});

describe("It checks for winning combination in the board array", () => {
  test('it return false when there is no winning combination in the board array', () => {
    let currentPlayer =  { name: "Sam", symbol: "X" };
    expect(checkWin(currentPlayer)).toBeFalsy()
  })

  test('it return true when there is winning combination in the board array', () => {
    let currentPlayer =  { name: "Sam", symbol: "X" };
    for(let i = 0; i < 3; i += 1){
      updateBoardArray(currentPlayer, i)
    }
    expect(checkWin(currentPlayer)).toBeTruthy()
  })
})
