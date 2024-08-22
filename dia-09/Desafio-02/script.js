let confirmar = true
let salario = 0
let opcao = ""

do{
let nome = prompt(`Digite o seu nome:`)
let idade = Number(prompt(`Digite a sua idade:`))
salario = Number(prompt(`Digite o seu salário:`))

console.log(`Olá ${nome}, sua idade é ${idade} anos, e o seu salário é R$${salario}.`)

    opcao = prompt(`Seus dados estão corretos? (s/n)\n Nome: ${nome}\n Idade: ${idade}\n Salário: ${salario} `)
    if (opcao.toLowerCase() != "n") {
        confirmar = false
    }
}

while(confirmar)

// Previsão salário
let reajuste = 0.015

console.log(`Previsão salarial para os próximo 10 anos:`)

for (let i = 1; i <= 10; i++){
    salario += salario * reajuste
    reajuste *= 2

    console.log((2024 + i) + ` = R$ ${salario.toFixed(2)}`)
}