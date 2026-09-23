//precisava criar uma função com o nome "celsiusParaFahrenheit" para converter graus celsius em fahrenheit

//1° recebo os valores
//2° faço a conversão do valor que eu recebi em celsius para fahrenheit 
//3° mostro o resultado da conversão


function receberatemperatura(){
    let tempC = Number(prompt("Informe a temperatura em °C"))
    return tempC
}

function celsiusParaFahrenheit(conversao){

    let tempF = (celsius * 1.8) + 32;
    return tempF
}

function mostrar(temperatura){
    alert(`A temperatura em °C ${celsius} é de °F ${valor}`)
}
let celsius = receberatemperatura()

let valor = celsiusParaFahrenheit(celsius)

mostrar(valor)