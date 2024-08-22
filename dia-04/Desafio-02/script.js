let nome = prompt('Digite o seu nome:')
let idade = Number(prompt('Digite a sua idade:'))
let cartaMotorista = prompt('Possui carta de motorista? (s/n)')
let carro = prompt('Possui veículo? (s/n)')

if(idade < 18 || cartaMotorista == "n"){
    console.log(`${nome}, você não pode dirigir.`)

} else if(idade >= 18 && cartaMotorista == "s" && carro == "n"){
    console.log(`${nome}, você pode dirigir mas não tem um carro.`)

} else if(idade >= 18 && cartaMotorista == "s" && carro == "s"){
    console.log(`${nome}, você será o motorista.`)
}