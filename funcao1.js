//Função sem retorno 
function imprimirSoma(a, b){
    console.log(a + b)

}    

imprimirSoma(2, 3)
imprimirSoma(2)
imprimirSoma(2,5,1,1,1,1,1,1,1,1,1,1,1)
imprimirSoma()

function soma (a, b= 1){
    return a + b
}

console.log(soma(2,5))
console.log(soma(2))
console.log(soma())
    