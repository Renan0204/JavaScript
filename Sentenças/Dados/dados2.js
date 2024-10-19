let preco = 19.90;
let desconto = 0.4;

console.log(19.9 * 0.6);

let precoComDesconto = preco * (1 - desconto);
console.log(precoComDesconto);

let nome = "caderno";
let categoria = "Papelaría";
console.log("Produto: " + nome + ", Categoria: " + categoria 
    + ", Preço: " + preco
    + ", Desconto: " + desconto + ", Valor Total: " + precoComDesconto);