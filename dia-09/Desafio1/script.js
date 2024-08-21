let continuar = true;

do{
    let nome = prompt(`Digite seu nome:`)
    let idade = Number(prompt(`Dgite sua idade:`))
    let peso = Number(prompt(`Digite seu peso(kg):`))
    let altura = Number(prompt(`Digite sua altura(metros):`))
    let profissão = prompt(`Digite sua profissão:`)

    console.log(`Usuário inseriu:\n Nome: ${nome}\n Idade: ${idade}\n Peso: ${peso}kg\n Altura: ${altura}\n Profissão: ${profissão}\n`)

    // Verificar Idade do Usuário
    if (idade >= 18) {
        console.log(`Está liberado para tomar umas geladas.`)
    } else {
        console.log(`Sem gelada para você`)
    }

    // Mostrando idade em meses, semanas e anos
    let meses = idade * 12
    let semanas = idade * 52
    let anos = idade * 365

    console.log(`A sua idade em meses é: ${meses}.`)
    console.log(`A sua idade em semanas é: ${semanas}.`)
    console.log(`A sua idade em anos é: ${anos}.`)


    // IMC
    let imc = peso /(altura * altura)

    if (imc < 18.5) {
        console.log(`O seu IMC é: ${imc}kg/m2 e está na faixa considerada Magreza.`)

    } else if (imc >= 18.5 && imc <= 24.9) {
        console.log(`O seu IMC é: ${imc}kg/m2 e está na faixa considerada Normal.`)

    } else if (imc > 25 && imc <= 30) {
        console.log(`O seu IMC é: ${imc}kg/m2 e está na faixa considerada Normal.`)

    }else {
        console.log(`O seu IMC é: ${imc}kg/m2 e está na faixa considerada Obesidade.`)
    }

    // Ano que o usuário nasceu
    let anoNasc = 2024 - idade
    console.log(anoNasc);

    // Exibir anos de vida
    let idadeAtual = 0

    for(let i = anoNasc; i <= 2024; i++){
        console.log(`${i} - ${idadeAtual} anos de idade.`)
        idadeAtual++
    }

    let opcao = prompt(`Digite sim se quiser cadastrar outro usuário:`)
    if (opcao.toLowerCase() != "sim") {
        continuar = false
    }

} while (continuar)