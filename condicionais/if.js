//estudo if, else, else if, if ternário

var player1 = -1
var player2 = 6
var validade = Boolean

if (player1 < 0 || player2 < 0) {validade==false}

if (validade==true) {
    if (player1 > player2) {
        console.log("Parabéns! Player1 venceu!")
    } else if (player2 > player1) {
        console.log('Parabéns! Player2 venceu!')
    } else {
        console.log('Pontuação mínima não atingida')
    }
} else {console.log('Partida Inválida')}


