import board from './board.js'
import playerFactory from './playerFactory.js'

const playGame = () => {
  let playerOneName;
  let playerTwoName;
  const startButton = document.getElementById('startButton');
  const boardDiv = document.getElementById('board');
  const resetButton = document.getElementById('resetButton');
  let playerOne;
  let playerTwo;
  let currentPlayer;

  function switchCurrentPlayer(boardArray) {
    let count = 0;

    for (let i = 0; i < boardArray.length; i += 1) {
      if (boardArray[i] === 'X' || boardArray[i] === 'O') {
        count += 1;
      }
    }

    if (count % 2 === 0) {
      currentPlayer = playerOne;
    } else {
      currentPlayer = playerTwo;
    }
  }

  function displayPlayerTurn(currentPlayer) {
    document.getElementById(
      'playerTurn',
    ).innerHTML = `${currentPlayer.name}, it is your turn.`;
  }

  const play = (event) => {
    const index = event.target.getAttribute('data-index');

    if (board.boardArray[index] === '') {
      board.updateBoardArray(currentPlayer, index);
      board.render();

      if (board.checkWin(currentPlayer)) {
        document.getElementById(
          'playerTurn',
        ).innerHTML = `${currentPlayer.name}, has won the game..`;
        boardDiv.removeEventListener('click', play);
      } else if (board.checkDraw(currentPlayer)) {
        document.getElementById('playerTurn').innerHTML = 'The game is a tie.';
        boardDiv.removeEventListener('click', play);
      } else {
        switchCurrentPlayer(board.boardArray);
        displayPlayerTurn(currentPlayer);
      }
    }
  };

  boardDiv.addEventListener('click', play);

  startButton.addEventListener('click', () => {
    playerOneName = document.getElementById('player1').value;
    playerTwoName = document.getElementById('player2').value;

    document.getElementById('inputsContainer').style.display = 'none';
    document.getElementById('gameDetails').style.display = 'block';

    document.getElementById('player1').value = '';
    document.getElementById('player2').value = '';

    playerOne = playerFactory(playerOneName, 'X');
    playerTwo = playerFactory(playerTwoName, 'O');

    document.getElementById(
      'playerOneName',
    ).innerHTML = `${playerOne.name}(${playerOne.symbol})`;
    document.getElementById(
      'playerTwoName',
    ).innerHTML = `${playerTwo.name}(${playerTwo.symbol})`;

    currentPlayer = playerOne;

    document.getElementById(
      'playerTurn',
    ).innerHTML = `${currentPlayer.name}, it is you turn.`;
  });

  resetButton.addEventListener('click', () => {
    document.location.reload();
  });
};

playGame();
