{
    {
        { var sera = 'Sera?'}
    }
}

console.log(sera);
//Por conta da variavel var, ela sera visivel fora do bloco!!

function teste() {
    var local = 123
}

teste();
console.log(local);
// Var dentro de function será visível apenas em function!!
//Importante fugir do escopo global, pois todos irão acessar!