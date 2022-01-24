var turmaA = [
    {
        nome:"Adriel",
        ra: 2568,
        nota: 4.2
    },
    {
        nome: "Bruna",
        ra: 2571,
        nota: 8.7
    },
    {
        nome: "Caroline",
        ra: 2532,
        nota: 10 
    },
    {
        nome: "Denis",
        ra: 2570,
        nota: 5.6
    },
    {
        nome: 'Fabrício',
        ra: 2544,
        nota: 3.5
    }
]

function alunosAprovados (arr, media){
    let aprovados =[]

    for (let i = 0; i < arr.length; i++){
        const {nota, nome} = arr[i];

        if (nota >= media) {
            aprovados.push(nome);
        }
    }

    return aprovados
}

console.log (alunosAprovados(turmaA, 5))