let argMoveId, argPlayerMove, argComputerMove, computerMove, playerMove, randomNumber, playerInput;

const buttonTest = document.getElementById('button-test');
const buttonRock = document.getElementById('button-rock');
const buttonPaper = document.getElementById('button-paper');
const buttonScissors = document.getElementById('button-scissors');


function buttonClicked(playerInput){
    clearMessages();
    console.log(playerInput + ' został kliknięty');
    
    /**
     * Describe this function...
     */
    function getMoveName(argMoveId) {
      console.log('wywołano funkcję getMoveName z argumentem: ' + argMoveId);
      if (argMoveId == 1) {
        return 'kamień';
      }
      else if (argMoveId == 2) {
        return 'papier';
      }
      else if (argMoveId == 3) {
        return 'nozyce';
      } else {
        printMessage('Nie znam ruchu o id ' + argMoveId + '. Zakładam, że chodziło o "nozyce".');
        return 'nozyce';
      } 
    }
    
    function displayResult(argPlayerMove, argComputerMove) {
      console.log('wywołano funkcję displayResults z argumentami: ' + argPlayerMove + ', ' + argComputerMove);
      if (argPlayerMove == 'papier' && argComputerMove == 'kamień') {
        printMessage('Wygrywasz!');
      }
      else if (argPlayerMove == 'kamień' && argComputerMove == 'nozyce') {
        printMessage('Wygrywasz!');
      }
      else if (argPlayerMove == 'nozyce' && argComputerMove == 'papier') {
        printMessage('Wygrywasz!');
      }
      else if (argPlayerMove == argComputerMove) {
        printMessage('Remis!');
      } else {
        printMessage('Przegrywasz :(');
      }
      printMessage('Zagrałem ' + argComputerMove + ', a Ty ' + argPlayerMove);
    }
    
    playerMove = playerInput;
    console.log('ruch gracza to: ' + playerMove);
    randomNumber = Math.floor(Math.random() * 3 + 1);
    console.log('wylosowana liczba to: ' + randomNumber);
    computerMove = getMoveName(randomNumber);
    console.log('ruch komputera to: ' + computerMove);
    displayResult(playerMove, computerMove);
    // z drobną zmianą dot. zmiennej playerMove (wspomnieliśmy o tym powyżej)
}

buttonRock.addEventListener('click', function(){
  buttonClicked('kamień')
});
buttonPaper.addEventListener('click', function(){
  buttonClicked('papier')
});
buttonScissors.addEventListener('click', function(){
  buttonClicked('nozyce')
});

