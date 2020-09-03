const playerFactory = (name, symbol) => {

  return {name, symbol}
}

const board = (() => {
  let boardArray = ['', '', '', '', '', '', '', '', ''];

  return {boardArray}
})()

const playGame = (() => {
  let playerOneName = document.getElementById('player1').value;
  let playerTwoName = document.getElementById('player2').value;
  let startButton = document.getElementById('startButton');
  let playerOne;
  let playerTwo;
  let currentPlayer;

  startButton.addEventListener('click', () => {
    document.getElementById('inputsContainer').style.display = 'none';
    document.getElementById('gameDetails').style.display = 'block';

    playerOne = playerFactory(playerOneName, 'X');
    playerTwo = playerFactory(playerTwoName, 'O');

    
    document.getElementById('playerOneName').innerHTML = `${playerOne.name}(${playerOne.symbol})`
    document.getElementById('playerTwoName').innerHTML = `${playerTwo.name}(${playerTwo.symbol})`

    currentPlayer = playerOne;

    document.getElementById('playerTurn').innerHTML = `${currentPlayer.name}, it is you turn.`

  })



})()

playGame