
//preciso criar uma função com o nome de "exibitResumoProduto" para receber um objeto para representar um item em estoque com nome, preço e quantidade


//entra a informação sobre o nome, preço e quantidade
//formato a string do item
//a string foi feita

//demorei um pouco pra entender a string mas depois consegui fazer 

function objeto(){
    const item = {

        nome: prompt("Digite o nome do produto:"),

        preco: Number(prompt("Digite o preço do produto:")),

        quantidade: Number(prompt("Digite a quantidade do produto desejada:")),
    }
    return item
}

function exibirResumoProduto(resultado){
    alert(`Produto: ${resultado.nome} | preço: ${resultado.preco} | Estoque: ${resultado.quantidade} unidades.`)
}

let i = objeto()

exibirResumoProduto(i)