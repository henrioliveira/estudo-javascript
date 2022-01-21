//Soma todos os nms de um array

/* function somaArr (arr){
    return arr.reduce(function(prev, current){
        return prev+current;
    })
}

const arr = [1, 2, 3, 4];

console.log(somaArr(arr)) */

const lista = [
    {
        name: 'pera',
        preco: 6
    },

    {
        name: 'uva',
        preco: 12
    },

    {
        name: 'maca',
        preco: 8
    },

    {
        name: 'salada mista',
        preco: 15
    },
]

const saldoDisponivel = 50;

function compras (saldoDisponivel, lista){
    return lista.reduce(function(prev, current){
        return prev - current.preco;
    }, saldoDisponivel)
}

console.log (compras(saldoDisponivel, lista))