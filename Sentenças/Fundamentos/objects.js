const prod1 = {}
prod1.nome = 'Celular Mega';
prod1.preco = 4998.90;
prod1['Desconto Legal'] = 0.40 //Evitar atributos com espaço!

console.log(prod1);

const prod2 = {
    nome: 'Camisa Polo',
    preco: 79.90, 
    obj: {
        blabla: 1, 
        obj: {
            blabla: 2
        }
    }
}

console.log(prod2);

//Objetos é um conjunto de chaves onde você passa um valor.