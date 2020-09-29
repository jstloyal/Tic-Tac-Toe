const board = (() => {
  const boardArray = ["", "", "", "", "", "", "", "", ""];
  const cells = Array.from(document.querySelectorAll(".cell"));

  const checkWin = (currentPlayer) => {
    let ans = false;
    const WINNINGCOMBINATION = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    WINNINGCOMBINATION.forEach((arr) => {
      if (
        boardArray[arr[0]] === currentPlayer.symbol &&
        boardArray[arr[1]] === currentPlayer.symbol &&
        boardArray[arr[2]] === currentPlayer.symbol
      ) {
        ans = true;
      }
    });

    return ans;
  };

  const checkDraw = (currentPlayer) => {
    let ans = false;
    let count = 0;

    boardArray.forEach((x) => {
      if (x === "X" || x === "O") {
        count += 1;
      }
    });

    if (!checkWin(currentPlayer) && count === 9) {
      ans = true;
    }

    return ans;
  };

  const updateBoardArray = (currentPlayer, index) => {
    boardArray[index] = currentPlayer.symbol;
  };

  const render = () => {
    boardArray.forEach((symbol, index) => {
      cells[index].textContent = symbol;
    });
  };

  return {
    boardArray,
    checkWin,
    checkDraw,
    updateBoardArray,
    render,
  };
})();

export default board;
