let numeros = []
let indiceNumero = 0
let contador = 1

let tamanhoArray = Number(prompt(`Informe o número de elementos desejados no array:`))

while (contador <= tamanhoArray){
    let numeroInserido = Number(prompt(`Digite um número inteiro e positivo:`))
    numeros[indiceNumero] = numeroInserido
    contador++
    indiceNumero++
    continue;
}

console.log(numeros)

console.log(numeros.reverse())