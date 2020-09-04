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
  let boardDiv = document.getElementById('board');
  let playerOne;
  let playerTwo;
  let currentPlayer;

  function switchCurrentUser(boardArray){
    let count = 0;

    for(let i = 0; i < boardArray.length; i++){
      if(boardArray[i] === 'X' || boardArray[i] === 'O'){
        count++;
      }
    }

    count % 2 === 0 ? currentPlayer = playerOne : currentPlayer = playerTwo;
  }

  function displayPlayerTurn(currentPlayer){
    document.getElementById('playerTurn').innerHTML = `${currentPlayer.name}, it is your turn.`
  }

  boardDiv.addEventListener('click', (e) => {
    if(e.target.innerHTML == ""){
      var index = e.target.getAttribute('data-index');
      e.target.innerHTML = currentPlayer.symbol;
      board.boardArray[index] = currentPlayer.symbol
      switchCurrentUser(board.boardArray)
      displayPlayerTurn(currentPlayer)
    }
  })

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
