let modelos = []
let anos = []
let valores = []
let contador = 0

let continuar = true

while(continuar) {
    let modelo = prompt(`Digite o MODELO do carro:`)
    modelos[contador] = modelo

    let ano = Number(prompt(`Digite o ANO do carro:`))
    anos[contador] = ano

    let valor = parseFloat(prompt(`Digite o VALOR do carro:`))
    valores[contador] = valor

    contador++

    let desejaContinuar = prompt(`Deseja cadastrar outro carro? (s/n)`)
    if (desejaContinuar != 's'){
        continuar = false
    }
}

console.log(`Carros da concessionária:`)

for (let i = 0; i < modelos.length; i++) {
    //console.log(`Carros: Modelo: ${modelos[i]}, Ano: ${anos[i]}, Valor: ${valores[i]}`)
    console.log(modelos[i] + ' - ' + anos[i] + ' - ' + valores[i])
}


// Ordenar por preço
for (let i = 0; i < valores.length - 1; i++) {
    for (let j = 0; j < valores.length - i - 1; j++) {
        if (valores[j] > valores[j + 1]) {

            let modeloMaiorValor = modelos[j]
            modelos[j] = modelos[j + 1]
            modelos[j + 1] = modeloMaiorValor

            let anoMaiorValor = anos[j]
            anos[j] = anos[j + 1]
            anos[j + 1] = anoMaiorValor

            let maiorValor = valores[j]
            valores[j] = valores[j + 1]
            valores[j + 1] = maiorValor
        }
    }
}

console.log(`Carros da concessionária (Ordenados por valor):`)

for (let i = 0; i < modelos.length; i++) {
    //console.log(`${modelos[i]} - ${anos[i]} - ${anos[i]}`)
    console.log(modelos[i] + " - " + anos[i] + " - " + valores[i])
}