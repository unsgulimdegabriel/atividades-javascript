//devo criar uma função com o nome de "somarElementos" para receber o array de números para somar todos os valores e retornar ao total

//1° os arrays e os elementos dentro deles
//2° somar os valores dentro dos arrays
//3° exibir o total

//achei uma questão dificil 


function somarElementos() {

    const vetor = []

    let soma = 0

    for (let i = 0; i < 10; i++) {

        vetor[i] = Number(prompt("Digite um numero: "))

    }
    for (let i = 0; i < 10; i++) {

        soma = soma + vetor[i]
    }

    return soma
}

alert(somarElementos())