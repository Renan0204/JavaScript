let valor
console.log(valor); // Nada definido!

valor = null;
console.log(valor); // Variável zerada, vazia!!

const produto = {}
console.log(produto.preco);
console.log(produto);

produto.preco = 3.50;
console.log(produto);

produto.preco = undefined // Evite atribuir undefined!!
console.log(produto.preco);
console.log(produto);