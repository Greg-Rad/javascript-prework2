var computerMove;
computerMove = 'kamień';
printMessage('Zagrałem ' + computerMove + '! Jeśli Twój ruch to papier, to wygrywasz!');
var playerMove;
computerMove = 'papier';
printMessage('Zagrałem ' + computerMove + '! Jeśli Twój ruch to nozyce, to wygrywasz!');
var randomNumber;
randomNumber = Math.floor(Math.random() * 3 + 1);
printMessage('Wylosowana liczba to: ' + randomNumber);
var randomNumber;
randomNumber = Math.floor(Math.random() * 8 + 12);
printMessage('Wylosowana liczba to: ' + randomNumber);
var playerMove, playerInput;
playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');
console.log('Wpisana odpowiedź to: ' + playerInput);
if (playerInput == '1') {
  playerMove = 'kamień';
} else {
  playerMove = 'nieznany ruch';
}
if (playerInput == '2') {
    playerMove = 'papier';
  } else {
    playerMove = 'nieznany ruch';
  }
  if (playerInput == '3') {
    playerMove = 'nożyce';
  } else {
    playerMove = 'nieznany ruch';
  }
printMessage('Twój ruch: ' + playerMove);
