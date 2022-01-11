/* const MEU_ERRO = new Error('Mensagem Inválida');

throw MEU_ERRO; */

function ValidaArray(arr, num){
    
    try {
        if(!arr && !num){throw new ReferenceError('Envie os parâmetros')};

        if(typeof arr !== Object) { throw new TypeError('Array Precisa Ser do tipo object!')
        };

        if(typeof num !== Number) { throw new TypeError('Array Precisa Ser do tipo number!')
        };

        if (arr.length !== Number ) {
            throw new RangeError ('tamanho invalido')
        }

        return arr
    }

    catch (e) {
        if (e instanceof ReferenceError) {
            console.log ('Este erro é um ReferenceError')
            console.log(e.message)
        } else if (e instanceof TypeError) {
            console.log ('Este erro é um ReferenceError')
            console.log(e.message)
        } else if (e instanceof RangeError) {
            console.log ('Este erro é um ReferenceError')
            console.log(e.message)
        } else {console.log ('tipo de erro não esperado:' + e)}
    }
}

console.log(ValidaArray({}, "5"))