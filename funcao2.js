//Armazenando uma função em uma variável
const imprimirSoma = function(a,b){
    console.log(a + b)
}
imprimirSoma(1,2)

//Armazenando uma funcao arrow em uma variavel
const soma = (a,b) => {
    return a + b
}


console.log(soma(5,2))

// retorno implícito 
const subtracao = (a,b) => a - b
console.log(subtracao(10,2))