let num1 = Number(prompt('Digite o primeiro número da operação:'))
let opcao = prompt('Escolha a operaçãoq ue deseja realizar: (+ - * /')
let num2 = Number(prompt('Digite o segundo número da operação:'))
let resultado = 0

switch(opcao){

    case "+":
        resultado = num1 + num2
        console.log(`${num1} + ${num2} = ${resultado}`);
    break;

    case "-":
        resultado = num1 - num2
        console.log(`${num1} - ${num2} = ${resultado}`);
    break;

    case "*":
        resultado = num1 * num2
        console.log(`${num1} x ${num2} = ${resultado}`);
    break;

    case "/":
        resultado = num1 / num2
        console.log(`${num1} / ${num2} = ${resultado}`);
    break;

    default:
        console.log('Operação inválida.')
    break;
}