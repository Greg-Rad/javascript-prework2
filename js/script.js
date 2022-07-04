var computerMove;
computerMove = 'kamień';
printMessage('Zagrałem ' + computerMove + '! Jeśli Twój ruch to papier, to wygrywasz!');

computerMove = 'nożyce';
printMessage('Zagrałem ' + computerMove + '! Jeśli Twój ruch to kamien, to wygrywasz!');

computerMove = 'papier';
printMessage('Zagrałem ' + computerMove + '! Jeśli Twój ruch to nożyce, to wygrywasz!');
var computerMove, randomNumber;
randomNumber = Math.floor(Math.random() * 3 + 1);
console.log('Wylosowana liczba to: ' + randomNumber);
if (randomNumber == '1') {
  computerMove = 'kamień';
} else {
  computerMove = 'nieznany ruch';
}
if (randomNumber == '2') {
  computerMove = 'papier';
} else {
  computerMove = 'nieznany ruch';
}
if (randomNumber == '3') {
  computerMove = 'nożyce';
} else {
  computerMove = 'nieznany ruch';
}
printMessage('Mój ruch: ' + computerMove);
//var randomNumber;
//randomNumber = Math.floor(Math.random() * 8 + 12);
//printMessage('Wylosowana liczba to: ' + randomNumber);
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
