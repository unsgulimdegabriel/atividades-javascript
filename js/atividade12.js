
// preciso escrever uma função com o nome de "verificarOrcamento" para receber dois parametros com o nome de "valorProduto" e "saldoDisponivel" e depois retornar true caso o seja suficiente para realizar a compra

//primeiro recebo o valor do produto e o saldo disponivel
//é necessario verificar se tem dinheiro suficiente no saldo para realizar a compra do produto
//digo ao cliente se ele tem o dinheiro o suficiente para comprar o produto

//achei uma questao relativamente facil

function valorProduto(){
    let produto = Number(prompt("Digite o valor do produto:"))
    return produto
}
function saldoDisponivel(){
    let saldo = Number(prompt("Digite o saldo disponível:"))
    return saldo
}
function verificarOrcamento(produt, sald){
    if(produt <= sald){
        return 1
    }else{
        return 0
    }
}
function exibir(resultado){
    if(resultado == 1){
        alert("O saldo é suficiente para a compra do produto")
    }else{
        alert("O saldo é insuficiente para compra do produto")
    }
}
let v = saldoDisponivel()

let s = valorProduto()

let resultado = verificar(vp , sd)

exibir(resultado)