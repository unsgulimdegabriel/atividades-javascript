//foi pedido pra criar uma função com o nome de "calcularIMC" para calcular o imc de uma pessoa fazendo o seu peso divido pela altura ao quadrado

//1° recebo o peso e a altura da pessoa
//2° processo e faço a multiplicação e divisao
//3° mostro o valor do imc 
//achei uma questão razoavelmente facil

function calcularIMC() {

    let peso = Number(prompt("Informe o seu peso: "))

    let altura = Number(prompt("Informe a sua altura: "))

    let valorfinaldoimc = peso / (altura * altura)

    return valorfinaldoimc
}

let resultado = calcularIMC()

if (resultado <= 18.5) {

    alert("Abaixo da média")
}
if (resultado >= 18.5 && resultado <= 24.9) {

    alert("Peso na média")
}

if (resultado >= 24.9) {

    alert("Sobrepeso")
}
