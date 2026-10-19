

//preciso criar uma função com o nome de "calcularJurosSimples" para receber três parâmetros: capital, taca e tempo e com a função calcular para retornar o valor dos juros

//recebo como entrada o valor do capital, a taxa e o tempo
//no processamento preciso calcular o juros
//e na saida devo mostrar o resultado dos juros

//achei uma questão facil por ser apenas multiplicaçã apenas

function recebercapital(){
    let capital = Number(prompt("Digite o capital:"))
    return capital
}
function recebertaxa(){
    let taxa = Number(prompt("Digite a taxa em porcentagem:"))
    return taxa
}
function recebertempo(){
    let tempo = Number(prompt("Digite o tempo em meses:"))
    return tempo
}
function calcularJurosSimples(valor, taxas, meses){
    let juros = valor * (taxas / 100) * meses
    return juros
}
function exibir(resultadofinal){
    alert(`O juros simples é de ${resultadofinal} R$`)
}

let c = recebercapital()

let taxa = recebertaxa()

let tempo = recebertempo()

let resultado = calcularJurosSimples(c,taxa,tempo)
exibir(resultado)