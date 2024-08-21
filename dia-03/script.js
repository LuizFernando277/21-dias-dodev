let nome = prompt('Digite o seu nome:')
let idade = parseInt(prompt('Digite a sua idade:'))
let altura = parseFloat(prompt('Digite a sua altura:'))
let peso = parseInt(prompt('Digite o seu peso:'))

let anoNasc = (2024 - idade);

let imc = 0 
imc = (peso / (altura * altura));

console.log(`Olá ${nome}, você tem ${idade} anos, nasceu em ${anoNasc}, tem ${altura}m de altura, pesa ${peso}kg e seu IMC é ${imc}kg/m2`)