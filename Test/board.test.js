import board from '../js/board'

const {boardArray, updateBoardArray} = board;

test("It return an array of length 9, with empty string", () => {
  expect(boardArray).toEqual(['', '', '', '', '', '', '', '', ''])
})

test("It updates the board array", () => {
  let currentPlayer = {name: 'Sam', symbol: 'X'}
  updateBoardArray(currentPlayer, 0)
  expect(boardArray).toEqual(['X', '', '', '', '', '', '', '', ''])
})