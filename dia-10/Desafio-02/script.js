let numeros = []
let indiceNumero = 0
let contador = 1

while (contador < 5){
    let numeroInserido = Number(prompt(`Digite um número inteiro e positivo:`))
    numeros[indiceNumero] = numeroInserido
    contador++
    indiceNumero++
    continue;
}

console.log(numeros.reverse())