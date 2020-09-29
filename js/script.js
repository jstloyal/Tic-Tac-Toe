// export const playerFactory = (name, symbol) => ({ name, symbol });

// export const board = (() => {
//   const boardArray = ['', '', '', '', '', '', '', '', ''];
//   const cells = Array.from(document.querySelectorAll('.cell'));

//   const checkWin = (currentPlayer) => {
//     let ans = false;
//     const WINNINGCOMBINATION = [
//       [0, 1, 2],
//       [3, 4, 5],
//       [6, 7, 8],
//       [0, 3, 6],
//       [1, 4, 7],
//       [2, 5, 8],
//       [0, 4, 8],
//       [2, 4, 6],
//     ];

//     WINNINGCOMBINATION.forEach((arr) => {
//       if (
//         boardArray[arr[0]] === currentPlayer.symbol
//         && boardArray[arr[1]] === currentPlayer.symbol
//         && boardArray[arr[2]] === currentPlayer.symbol
//       ) {
//         ans = true;
//       }
//     });

//     return ans;
//   };

//   const checkDraw = (currentPlayer) => {
//     let ans = false;
//     let count = 0;

//     boardArray.forEach((x) => {
//       if (x === 'X' || x === 'O') {
//         count += 1;
//       }
//     });

//     if (!checkWin(currentPlayer) && count === 9) {
//       ans = true;
//     }

//     return ans;
//   };

//   const updateBoardArray = (currentPlayer, index) => {
//     boardArray[index] = currentPlayer.symbol;
//   };

//   const render = () => {
//     boardArray.forEach((symbol, index) => {
//       cells[index].textContent = symbol;
//     });
//   };

//   return {
//     boardArray, checkWin, checkDraw, updateBoardArray, render,
//   };
// })();

// export const playGame = () => {
//   let playerOneName;
//   let playerTwoName;
//   const startButton = document.getElementById('startButton');
//   const boardDiv = document.getElementById('board');
//   const resetButton = document.getElementById('resetButton');
//   let playerOne;
//   let playerTwo;
//   let currentPlayer;

//   function switchCurrentPlayer(boardArray) {
//     let count = 0;

//     for (let i = 0; i < boardArray.length; i += 1) {
//       if (boardArray[i] === 'X' || boardArray[i] === 'O') {
//         count += 1;
//       }
//     }

//     if (count % 2 === 0) {
//       currentPlayer = playerOne;
//     } else {
//       currentPlayer = playerTwo;
//     }
//   }

//   function displayPlayerTurn(currentPlayer) {
//     document.getElementById(
//       'playerTurn',
//     ).innerHTML = `${currentPlayer.name}, it is your turn.`;
//   }

//   const play = (event) => {
//     const index = event.target.getAttribute('data-index');

//     if (board.boardArray[index] === '') {
//       board.updateBoardArray(currentPlayer, index);
//       board.render();

//       if (board.checkWin(currentPlayer)) {
//         document.getElementById(
//           'playerTurn',
//         ).innerHTML = `${currentPlayer.name}, has won the game..`;
//         boardDiv.removeEventListener('click', play);
//       } else if (board.checkDraw(currentPlayer)) {
//         document.getElementById('playerTurn').innerHTML = 'The game is a tie.';
//         boardDiv.removeEventListener('click', play);
//       } else {
//         switchCurrentPlayer(board.boardArray);
//         displayPlayerTurn(currentPlayer);
//       }
//     }
//   };

//   boardDiv.addEventListener('click', play);

//   startButton.addEventListener('click', () => {
//     playerOneName = document.getElementById('player1').value;
//     playerTwoName = document.getElementById('player2').value;

//     document.getElementById('inputsContainer').style.display = 'none';
//     document.getElementById('gameDetails').style.display = 'block';

//     document.getElementById('player1').value = '';
//     document.getElementById('player2').value = '';

//     playerOne = playerFactory(playerOneName, 'X');
//     playerTwo = playerFactory(playerTwoName, 'O');

//     document.getElementById(
//       'playerOneName',
//     ).innerHTML = `${playerOne.name}(${playerOne.symbol})`;
//     document.getElementById(
//       'playerTwoName',
//     ).innerHTML = `${playerTwo.name}(${playerTwo.symbol})`;

//     currentPlayer = playerOne;

//     document.getElementById(
//       'playerTurn',
//     ).innerHTML = `${currentPlayer.name}, it is you turn.`;
//   });

//   resetButton.addEventListener('click', () => {
//     document.location.reload();
//   });
// };

// playGame();
