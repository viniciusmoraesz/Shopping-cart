let total_geral = 0;
limpar()


function adicionar(){
//recuperar valores (nome,quantidade,valor)
let produto = document.getElementById("produto").value;
let nome_produto = produto.split("-")[0];
let valor_unitario= produto.split("R$")[1];


let quantidade_produto = document.getElementById("quantidade").value;

if (quantidade_produto <= 0) {
    alert("Erro insira novamente um valor acima de 0");
    limpar();
    return;
}



//calcular o preço (quantidade x preço unitário)
let preco_produto = quantidade_produto * valor_unitario;


//adicionar o produto no carrinho
let lista_carrinho = document.getElementById("lista-produtos");

lista_carrinho.innerHTML = lista_carrinho.innerHTML + `<section class="carrinho__produtos__produto">
          <span class="texto-azul">${quantidade_produto}x</span> ${nome_produto} <span class="texto-azul">R$${preco_produto}</span>
           </section>`;


//atualizar o valor total

total_geral = total_geral + preco_produto;

let campo_total = document.getElementById("valor-total");
campo_total.textContent = `R$ ${total_geral}`;
document.getElementById("quantidade").value = 0;

}

function limpar() {
total_geral = 0;
document.getElementById("lista-produtos").textContent = '';
document.getElementById("valor-total").textContent = 'R$ 0';

}

function erro() {

}