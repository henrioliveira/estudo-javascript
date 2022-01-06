function calculadora () {
    const operacao = Number(prompt('Escolha uma operação:\n 1 - Soma (+)\n 2 - Subtração (-)\n 3 - Multiplicação (*)\n 4 - Divisão real (/)\n 5 - Divisão inteira (%)\n 6 - Potenciação (**)'));

    if (!operacao || operacao >= 7){
        alert('Erro - Opção inválida')
        calculadora()
    } else{
            let n1 = Number(prompt('Insira o primeiro valor'));
            let n2 = Number(prompt('Insira o segundo valor'));
            let resultado

            if (!n1 || !n2) {
                alert('Erro - Parâmetros inválidos')
                calculadora()
            }else{
                function soma() {
                    resultado = n1 + n2
                    alert(`${n1} + ${n2} = ${resultado}`)
                    novaOperacao()
                }
            
                function subtrai() {
                    resultado = n1 - n2
                    alert(`${n1} - ${n2} = ${resultado}`)
                    novaOperacao()
                }
            
                function multiplica() {
                    resultado = n1 * n2
                    alert(`${n1} * ${n2} = ${resultado}`)
                    novaOperacao()
                }
            
                function divideReal() {
                    resultado = n1 / n2
                    alert(`${n1} / ${n2} = ${resultado}`)
                    novaOperacao()
                }
            
                function divideInteira() {
                    resultado = n1 % n2
                    alert(`${n1} % ${n2} = ${resultado}`)
                    novaOperacao()
                }
            
                function potencia() {
                    resultado = n1 ** n2
                    alert(`${n1} ** ${n2} = ${resultado}`)
                    novaOperacao()
                }
            
                function novaOperacao() {
                    let opcao = prompt('Deseja realizar outra operação?\n 1 - Sim\n 2 - Não')
            
                    if (opcao == 1){
                        calculadora()            
                    } else if (opcao == 2) {
                        alert('Até Mais!')
                    } else {
                        alert('Digite uma opção válida')
                        novaOperacao()
                    }
                }
            
                if (operacao==1){
                    soma();
                } else if (operacao==2){
                    subtrai();
                } else if (operacao==3) {
                    multiplica()
                } else if (operacao==4){
                    divideReal()
                } else if (operacao==5){
                    divideInteira()
                } else if (operacao==6){
                    potencia()
                }
            }
        
            
        
        }
    }


calculadora()