var computerMove;
computerMove = 'kamień';
printMessage('Zagrałem ' + computerMove + '! Jeśli Twój ruch to papier, to wygrywasz!');

computerMove = 'nożyce';
printMessage('Zagrałem ' + computerMove + '! Jeśli Twój ruch to kamien, to wygrywasz!');

computerMove = 'papier';
printMessage('Zagrałem ' + computerMove + '! Jeśli Twój ruch to nożyce, to wygrywasz!');
var computerMove, randomNumber;
randomNumber = Math.floor(Math.random() * 3 + 1);
printMessage('Wylosowana liczba to: ' + randomNumber);
var computerMove;
if (randomNumber == 1) {
  computerMove = 'kamień';
}
else if (randomNumber == 2) {
  computerMove = 'papier';
}
else {
  computerMove = 'nożyce';
}

printMessage('Mój ruch: ' + computerMove);
//var randomNumber;
//randomNumber = Math.floor(Math.random() * 8 + 12);
//printMessage('Wylosowana liczba to: ' + randomNumber);
var playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');
console.log('Wpisana odpowiedź to: ' + playerInput);

var playerMove;
if (playerInput == 1) {
  playerMove = 'kamień';
}
else if (playerInput == 2) {
  playerMove = 'papier';
}
else if (playerInput == 3) {
  playerMove = 'nożyce';
}
else {
  playerMove = 'nieznany ruch';
}