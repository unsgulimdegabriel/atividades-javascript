//Devo criar uma função com o nome "ehPar" que receba um número para definir se ele é par ou impar 

//primeiro recebo os numeros da função para definir se são imapares ou pares 
//divido os numeros para verificar se são realmente pares
//mostro se o numero é par ou impar

function ehPar (pareimpar){
    if(pareimpar % 2 == 0){

        return 1

    } else {

        return 0
    }
}

function recebernumero (){

    let numero = Number(prompt("Digite um número"));
    return numero

}

function exibir(tela){

    if(tela){
        
    alert(`O número ${valor} é Par `)

    }else{

    alert(`O número ${valor} é ímpar`)
    }
}

let valor = recebernumero()

let resultado = ehPar(valor)

exibir(resultado)


   