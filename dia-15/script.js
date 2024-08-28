let arrayA = [13, 20, 10, 22, 24, 20, 27, 17, 19, 14]
let arrayB = [24, 22, 23, 11, 15, 17, 29, 14, 16, 21]

function NumerosIguais(arrayUm, arrayDois) {
    let resultado = []
    let contadorResultado = 0

    for (let i = 0; i < arrayA.length; i++) {

        for (let j = 0; j < arrayB.length; j++) {

            if (arrayUm[i] == arrayDois[j]) {
                resultado[contadorResultado] = arrayUm[i]
                contadorResultado++
                j = arrayDois.length
            }
        }
    }

    return resultado
}

console.log(NumerosIguais(arrayA, arrayB))