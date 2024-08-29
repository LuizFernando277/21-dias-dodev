let nomes = []
let senhas = []
let nome
let senha

function escolhaOpcao() {
    let opcao = Number(prompt(`Escolha uma opção:\n 1 - Cadastrar\n 2 - Login\n 3 - Excluir Cadastro\n 4 - Encerrar programa`))
    return opcao;
}

function cadastrarUsuario() {
    nomes.push(prompt(`Digite o NOME do usuário:`))
    senhas.push(prompt(`Digite a SENHA do usuário:`))
}

function loginUsuario(nome, senha) {
    let indice = nomes.indexOf(nome)

    if (indice !== -1 && senhas[indice] == senha) {
        return true;
    } else {
        return false;
    }
}

function excluirUsuario(nome) {
    let indice = nomes.indexOf(nome)

    if (indice !== -1) {
        nomes.splice(indice, 1);
        senhas.splice(indice, 1);

        console.log(`Cadastro excluído com sucesso.`)
    } else {
        console.log(`Usuário não encontrado`)
    }
}

let continuar = true

while (continuar) {
    let opcao = escolhaOpcao();

    switch (opcao) {
        case 1:
            cadastrarUsuario();
        break;

        case 2:
            nome = prompt(`Digite o NOME do usuário:`)
            senha = prompt(`Digite a SENHA do usuário:`)

            let login = loginUsuario(nome, senha);

            if (login) {
                console.log(`Login efetuado com sucesso.`)
            } else {
                console.log(`Nome ou Senha incorretos.`)
            }
        break;

        case 3:
            nome = prompt(`Digite o NOME que deseja excluir o cadastro.`)
            excluirUsuario(nome);
        break;

        case 4:
            continuar = false;
        break;

        default:
            console.log(`A opção escolhida é inválida.`)
        break;
    }
}