// Armazenando uma funcao dentro da variavel>
const imprimirSoma = function (a, b) {
    console.log(a+b);
}

imprimirSoma(2, 3);

// Armazenando uma funcao arrow em uma variavel>
const soma = (a, b) => {
    return a + b;
}

console.log(soma(2, 3));

// Retorno impricido>
const subtracao = (a, b) => a - b
console.log(subtracao(5, 10));