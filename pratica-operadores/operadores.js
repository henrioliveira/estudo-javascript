function numeros (n1, n2) {

    let n3 = n1+n2

    if (n1==n2){
        console.log(n1, 'e', n2, 'são iguais')
    } else {
        console.log(n1, 'e', n2, 'não são iguais')
    }

    if (n3>10 && n3<20) {
        console.log(n3, 'é maior que 10')
    } else if (n3<20) {
        console.log(n3, 'é menor que 20')
    } else {
        console.log(n3, 'é maior que 20')
    }

}

numeros(7, 15)