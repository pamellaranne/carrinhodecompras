let totalGeral;
limpar();

function adicionar(){
    let adicionarClicado = document.querySelector('.botao-form botao-adicionar');
    let produto = document.getElementById('produto').value;
    let nomeProduto = produto.split('-')[0];
    let valorProduto = produto.split('R$')[1];
    let quantidadeDoProduto = document.getElementById('quantidade').value;
    
    let preco = quantidadeDoProduto * valorProduto;

    let carrinho = document.getElementById('lista-produtos');

    carrinho.innerHTML = carrinho.innerHTML + (`<section class="carrinho__produtos__produto">
    <span class="texto-azul">${quantidadeDoProduto}x</span> ${nomeProduto} <span class="texto-azul">R$${valorProduto}</span>
    </section>`);

    totalGeral = totalGeral + preco;

    let campoTotal = document.getElementById('valor-total');
    campoTotal.innerHTML = `R$ ${totalGeral}`; 

    document.getElementById('quantidade').value = 0;
}

function limpar(){
    let limparClicado = document.querySelector('.botao-form botao-limpar');
    totalGeral = 0;
    document.getElementById('lista-produtos').innerHTML = '';
    document.getElementById('valor-total').innerHTML = 'R$ ';  
}