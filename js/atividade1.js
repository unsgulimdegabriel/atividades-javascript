//1° eu crio uma função chamada "calcularAreaRetangulo" que receba duas variaveis para calcular a area do retangulo "area = base * altura"
//2° recebo o valor das duas variaveis base e altura 
//3° calculo a area
//4° mostro o resultado da conta
//achei até que facil pois era apenas multiplicação

function calcularAreaRetangulo (base, altura){

    let area = base * altura;
    return area
}

let n1 = Number(prompt("Digite o valor da base:"))

let n2 = Number(prompt("Digite o valor da altura:"))

let resultado = calcularAreaRetangulo(n1, n2)

alert(`O resultado da área do Retângulo é: ${resultado}`)