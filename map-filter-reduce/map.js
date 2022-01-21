/* const um = {
    value: 2
}

const dois = {
    value: 6
}

function mapComThis (arr, thisArg) {
    return arr.map(function (item){
        return item * this.value;
    }, thisArg);
}

const qualquer = [5,8]

console.log('this -> um', mapComThis(qualquer, um));

console.log('this -> dois', mapComThis(qualquer, dois)); */

function mapSemThis (arr){
    return arr.map(function(item){
        return item * 2
    });
}

const oddnums = [1, 3, 5, 9]

console.log (mapSemThis(oddnums))

//MAP NÃO ALTERA O ARRAY ORIGINAL

