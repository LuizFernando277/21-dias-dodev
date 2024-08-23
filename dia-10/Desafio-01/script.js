/*let numeros = []
let indiceNumeros = 0
let continuar = true

while(continuar === true){
    let numeroInserido = prompt(`Digite um número inteiro e positivo:`)
    numeros[indiceNumeros] = numeroInserido

    let desejaContinuar = prompt(`Digite 1 se deseja continuar:`)
    if (desejaContinuar != 1){
        continuar = false
    }
    indiceNumeros++

}

console.log(numeros)*/

const array = [];
const indices = [];
let contadorIndice = 0;

const numeroProcurado = parseInt(prompt(`Digite o número a ser procurado:`))

for (let i = 0; i < 10; i++) {
    const elemento = parseInt(prompt(`Digite o elemento ${i + 1}:`));
    array[i] = elemento;
}

for (let i = 0; i < 10; i++) {
    if (array[i] === numeroProcurado) {
        indices[contadorIndice] = i
        contadorIndice++
    }
}

console.log(`O número ${numeroProcurado} foi encontrado nos índices: ${indices}`);