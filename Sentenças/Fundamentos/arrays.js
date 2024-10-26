const valores = [7.7, 8.8, 9.9, 1.2];
console.log(valores[0], valores[3]);
console.log(valores[4]); //Não da erro, apenas mostra Indefinido.

valores.push({id: 3}, false, null, 'teste');