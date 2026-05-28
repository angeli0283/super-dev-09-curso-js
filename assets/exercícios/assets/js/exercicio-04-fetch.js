function listarProdutos(){
    const url = "https://api.franciscosensaulas.com/api/v1/empresa/produtos";

    const textarea = document.getElementById("produtos");

    textarea.value = "";

    fetch(url)
        .then(response => response.json())
        .then(produtos => {
            for(let i = 0; i < produtos.length;  i++){
                const produto = produtos[i];
                const texto = `${produto.id} | ${produto.nome} | ${produto.preco}\n`;
                textarea.value = textarea.value + texto;
            }
        })
        .catch(error => {
            console.error("Erro: " + error);
            alert("Ocorreu um erro ao cadastrar o produto");
        })
}

function cadastrarProduto(){
    const url = "https://api.franciscosensaulas.com/api/v1/empresa/produtos";


    const nomeProduto = prompt("Digite o nome do produto: ");
    const precoProduto = parseFloat(prompt("digite o valor do produto: "))
    const categoriaProduto = prompt("Digite a categoria do produto: ")

    const dados = {
        
        nome : nomeProduto,
        preco : precoProduto,
        categoria: categoriaProduto
    }

    fetch (url, {
        method: "POST", 
        headers: {
            "Content-Type": "application/json"  
        },
        body: JSON.stringify(dados)
    })
        .then(response => response.json())
        .then(dado => {
            alert("Produto foi cadastrado com sucesso!!")
        })
        .catch(error => {
            console.error("Erro: " + error);
            alert("Ocorreu um erro ao cadastrar o produto");
        })
}

function consultarProdutoId(){
   const Idproduto = promp("Digite o id do produto: ");
   const url = "https://api.franciscosensaulas.com/api/v1/empresa/produtos/" + Idproduto;

   const textarea = document.getElementById("produtos");
   textarea.value = "";

   fetch(url)
   .then(response => response.json())
   .then(produto => {
    const texto = `ID: ${produto.id}\nNome: ${produto.nome}\nPreço: ${produto.preco}\nCategoria: ${produto.categoria}`;
   })
}