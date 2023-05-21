// #7DaysOfCode - Desafio 1

function pulalinha(){
    document.write('<br><br>')
}
function escreva(frase){
    document.write(frase)
    pulalinha()
}

let numeroUm = 1
let stringUm = '1'
let numeroTrinta = 30
let stringTrinta = '30'
let numeroDez = 10
let stringDez = '10'

if (numeroUm == stringUm) {
    escreva('As variáveis numeroUm e stringUm tem o mesmo valor, mas tipos diferentes')
} else {
    escreva('As variáveis numeroUm e stringUm não tem o mesmo valor')
}

if (numeroTrinta === stringTrinta) {
    escreva('As variáveis numeroTrinta e stringTrinta tem o mesmo valor e mesmo tipo')
} else {
    escreva('As variáveis numeroTrinta e stringTrinta não tem o mesmo tipo')
}

if (numeroDez === stringDez) {
    escreva('As variáveis numeroDez e stringDez tem o mesmo valor, mas tipos diferentes')
} else {
    escreva('As variáveis numeroDez e stringDez não tem o mesmo valor')
}
 
  