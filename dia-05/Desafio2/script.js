let opcao = prompt('Digite a opção desejada: gasolina, alcool ou calibrar:')
let vlrGasolina = 0
let vlrAlcool = 0

switch(opcao){

    case 'gasolina':
        vlrGasolina = Number(prompt('Digite o valor desejado para o abastecimento de gasolina:'))
        vlrGasolina = vlrGasolina / 5;
        console.log(`Seu carro foi abastecido com ${vlrGasolina} litros de gasolina.`)
    break;

    case 'alcool':
        vlrAlcool = Number(prompt('Digite o valor desejado para o abastecimento de alcool:'))
        vlrAlcool = vlrAlcool / 3;
        console.log(`Seu carro foi abastecido com ${vlrAlcool} litros de alcool.`)
    break;

    case 'calibrar':
        console.log(`Pneus calibrados com sucesso.`)
    break;

    default:
        console.log('Opção inválida.')
    break;
}