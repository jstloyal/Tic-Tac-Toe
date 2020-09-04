let playerFactory = (name, symbol) => {
  
  return {name, symbol}
}

let board = (() => {
  let boardArray = ['', '', '', '', '', '', '', '', ''];

  let checkWin = (currentPlayer) => {
    var ans = false;
    const WINNINGCOMBINATION = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ]

    WINNINGCOMBINATION.forEach(arr => {
      if(boardArray[arr[0]] == currentPlayer.symbol && boardArray[arr[1]] == currentPlayer.symbol && boardArray[arr[2]] == currentPlayer.symbol){
        return ans = true;
      }
    })

    return ans;
  }

  let checkDraw = (currentPlayer) => {
    var ans = false;
    var count = 0;

    boardArray.forEach(x => {
      if(x == 'X' || x == 'O'){
        count ++;
      }
    })
    
    if(!checkWin(currentPlayer) && count == 9){
      ans = true;
    }

    return ans;
  }

  return {boardArray, checkWin, checkDraw}
})()

let playGame = (() => {
  let playerOneName;
  let playerTwoName;
  let startButton = document.getElementById('startButton');
  let boardDiv = document.getElementById('board');
  let playerOne;
  let playerTwo;
  let currentPlayer;

  function switchCurrentPlayer(boardArray){
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

      if(board.checkWin(currentPlayer)){
        document.getElementById('playerTurn').innerHTML = `${currentPlayer.name}, has won the game..`
      } else if(board.checkDraw(currentPlayer)){
        document.getElementById('playerTurn').innerHTML = 'The game is a tie.'
      }else {
        switchCurrentPlayer(board.boardArray)
        displayPlayerTurn(currentPlayer)
      }

    }
  })

  startButton.addEventListener('click', () => {
    playerOneName = document.getElementById('player1').value;
    playerTwoName = document.getElementById('player2').value;

    document.getElementById('inputsContainer').style.display = 'none';
    document.getElementById('gameDetails').style.display = 'block';

    document.getElementById('player1').value = "";
    document.getElementById('player2').value = "";

    playerOne = playerFactory(playerOneName, 'X');
    playerTwo = playerFactory(playerTwoName, 'O');

    
    document.getElementById('playerOneName').innerHTML = `${playerOne.name}(${playerOne.symbol})`
    document.getElementById('playerTwoName').innerHTML = `${playerTwo.name}(${playerTwo.symbol})`

    currentPlayer = playerOne;

    document.getElementById('playerTurn').innerHTML = `${currentPlayer.name}, it is you turn.`
  })

})()

playGame
