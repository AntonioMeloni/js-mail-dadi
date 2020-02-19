var random1 = Math.random()*6;
random1 = Math.ceil(random1)
console.log('Primo Numero Estratto Random: ' + random1);
document.getElementById('player1').innerHTML = random1;

var random2 = Math.random()*6;
random2 = Math.ceil(random2)
console.log('Secondo Numero Estratto Random: ' + random2);
document.getElementById('player2').innerHTML = random2;

if (random1 == random2) {
    console.log('Nessun vincitore, pareggio!');
    document.getElementById('risultato').innerHTML = 'Nessun vincitore, pareggio!';
}else if (random1 > random2) {
    console.log('Player 1 vince!');
    document.getElementById('winner').innerHTML = 'Player1';
}else {
    console.log('Player 2 vince!');
    document.getElementById('winner').innerHTML = 'Player2';
}
