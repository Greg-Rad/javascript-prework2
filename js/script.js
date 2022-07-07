var buttonTest;
var buttonRock;
var buttonPaper;
var buttonScissors;
var argMoveId, argPlayerMove, argComputerMove, computerMove, playerMove, randomNumber, playerInput;


buttonTest = document.getElementById('button-test');
buttonRock = document.getElementById('button-rock');
buttonPaper = document.getElementById('button-paper');
buttonScissors = document.getElementById('button-scissors');


function buttonClicked('kamień', 'papier', 'nozyce'){
    clearMessages();
    console.log('kamień', 'papier', 'nozyce' + ' został kliknięty");
    
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
    
    playerMove = argButtonName;
    console.log('ruch gracza to: ' + playerMove);
    randomNumber = Math.floor(Math.random() * 3 + 1);
    console.log('wylosowana liczba to: ' + randomNumber);
    computerMove = getMoveName(randomNumber);
    console.log('ruch komputera to: ' + computerMove);
    displayResult(playerMove, computerMove);
    // z drobną zmianą dot. zmiennej playerMove (wspomnieliśmy o tym powyżej)
}

buttonTest.addEventListener('click', function(){
    buttonClicked('Test button')
});
buttonRock.addEventListener('click', function(){
  buttonClicked('Rock button')
});
buttonPaper.addEventListener('click', function(){
  buttonClicked('Paper button')
});
buttonScissors.addEventListener('click', function(){
  buttonClicked('Scissors button')
});

// tu będą kolejne powiązania guzików z funkcją buttonClicked
// (każda z innym argumentem)
var argMoveId, argPlayerMove, argComputerMove, computerMove, playerMove, randomNumber, playerInput;
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

playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');
console.log('wybór ruchu gracza to: ' + playerInput);
playerMove = getMoveName(playerInput);
console.log('ruch gracza to: ' + playerMove);
randomNumber = Math.floor(Math.random() * 3 + 1);
console.log('wylosowana liczba to: ' + randomNumber);
computerMove = getMoveName(randomNumber);
console.log('ruch komputera to: ' + computerMove);
displayResult(playerMove, computerMove);

