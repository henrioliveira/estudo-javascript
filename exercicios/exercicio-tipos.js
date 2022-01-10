//SOLUÇÃO PALÍNDROMO 1

/* function verificaPalindromo(string){
    if(!string)return;
    //verifica se string existe
    return string.split("").reverse().join("")===string;
    //separa as letras da string num array as reverte e converte novamente em string
}

console.log(verificaPalindromo("quadro")) */

function substitui (arr){
    for( let i = 0; i < arr.length; i++){
        if(arr[i] === 0) {
            console.log('Você já é zero!')
        }else if (arr[i] % 2 === 0){
            console.log (`Substituindo ${arr[i]} por 0...`)
            arr[i] = 0
        }else {

        }
    }

    return arr;

}

let arr = [1, 55, 26, 89, 47, 33, 66, 14, 101]

console.log(substitui(arr))