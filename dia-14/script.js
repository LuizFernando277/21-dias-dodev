let nome = ""
let salario = 0
let novoSalario = 0
let continuar = true

function SalarioColaborador() {
    nome = prompt(`Informe o seu nome:`)
    salario = parseFloat(prompt(`Informe o seu salário:`))
    CalculoAumentoSalario();
    OutroColaborador();
}

function CalculoAumentoSalario() {
    if (salario <= 1500) {
        let novoSalario = salario + (salario * 0.2)
        console.log(`Olá ${nome}! O seu salário antigo era R$${salario}, recebeu um reajuste de 20% e o seu salário atual é: R$${novoSalario}.`)
    } else if (salario > 1500 && salario <= 2000) {
        let novoSalario = salario + (salario * 0.15)
        console.log(`Olá ${nome}! O seu salário antigo era R$${salario}, recebeu um reajuste de 15% e o seu salário atual é: R$${novoSalario}.`)
    } else if (salario > 2000 && salario <= 3000) {
        let novoSalario = salario + (salario * 0.10)
        console.log(`Olá ${nome}! O seu salário antigo era R$${salario}, recebeu um reajuste de 10% e o seu salário atual é: R$${novoSalario}.`)
    } else {
        let novoSalario = salario + (salario * 0.05)
        console.log(`Olá ${nome}! O seu salário antigo era R$${salario}, recebeu um reajuste de 5% e o seu salário atual é: R$${novoSalario}.`)
    }
}

function OutroColaborador() {
    while(continuar) {
        let desejaContinuar = prompt(`Digite 1, se deseja calcular novamente com novas informações:`)
        if (desejaContinuar != "1") {
            continuar = false
            continue;
        } else {
            SalarioColaborador();
        }
    }
}

SalarioColaborador();