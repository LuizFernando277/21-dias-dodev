let maiorValor = 0
let somaValores = 0
let totalTransacoes = 0
let saldo = 1000
let continuar = false

do {
    const nome = prompt('Digite seu nome:')
    const cpf = prompt('Digite seu CPF:')
    const valor = Number(prompt('Digite o valor da transação:'))
    const operacao = prompt('Qual operação deseja fazer? (s/d)')

    if (valor < 0) {
        console.log('Valor inválido. A transação não foi realizada.')
    } else if (operacao == 's' && valor > saldo) {
        console.log('Saldo insuficiente. A transação não foi realizada.')
    } else if (operação == 's') {
        console.log(`Olá, ${nome} (${cpf}), seu saldo atual é R$${saldo}.`)
        saldo -= valor;
        totalTransacoes++;
        somaValores += valor;
        if (valor > maiorValor) {
            maiorValor = valor;
        }
        console.log(`Transação realizada com sucesso. Seu saldo atual é R$${saldo}`)
    } else {
        console.log(`Olá, ${nome} (${cpf}), seu saldo atual é R$${saldo}.`)
        saldo += valor;
        totalTransacoes++;
        somaValores += valor;
        if (valor > maiorValor) {
            maiorValor = valor;
        }
        console.log(`Transação realizada com sucesso. Seu saldo atual é R$${saldo}.`)
    }

    const opcao = prompt('Deseja continuar? (1 para continuar, 2 para parar.):')
    if (opcao === "1") {
        continuar = true
    } else if ( opcao === "2") {
        continuar = false
    } else {
        console.log("Opção inválida. Programa encerrado.")
        continuar = false
    }

} while (continuar)

console.log(`Saldo final: R$${saldo}.`)
console.log(`Maior valor inserido: R$${maiorValor}.`)
console.log(`Média dos valores inseridos: R$${somaValores / totalTransacoes}.`)