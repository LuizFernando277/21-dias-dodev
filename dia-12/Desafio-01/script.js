let nomes = []
let senhas = []
let contador = 0
let loginValido = false
let senhaValida = false

let continuar = true

while(continuar) {
    let opcao = Number(prompt(`Digite a opção desejada: \n1 - Cadastrar \n2 - Login \n3 - Excluir \n4- Encerrar Programa`))

    switch(opcao){
        case 1:
            contador = nomes.length
            let nome = prompt(`Digite o nome do usuário:`)
            nomes[contador] = nome

            let senha = prompt(`Digite a senha:`)
            senhas[contador] = senha
        break;

        case 2:
            let nomeLogin = prompt(`Digite o nome do usuário:`)
            for (let i = 0; i < nomes.length; i++) {
                if (nomeLogin == nomes[i]) {
                    i = i
                    loginValido = true
                }
            } 
            
            if (loginValido) {
                console.log(`Login correto`)
            } else {
                console.log(`Login incorreto.`)
            }

            let senhaLogin = prompt(`Digite a senha:`)
            for (let i = 0; i < nomes.length; i++)
                if (senhaLogin == senhas[i]) {
                    i = i
                    senhaValida = true
                }
            
            if (senhaValida) {
                console.log(`Login efetuado com sucesso`)
            } else {
                console.log(`Senha incorreta.`)
            }
        break;

        case 3:
            let excluirNome = prompt(`Digite o nome do usuário que deseja excluir:`)
            for (let i = 0; i < nomes.length; i++) {
                if (excluirNome == nomes[i]) {
                    console.log(`array nomes ${nomes}`)
                    console.log(`Excluir nome ${excluirNome} indice ${i}`)

                    nomes.splice(i,1)
                    senhas.splice(i,1)

                    nomes.filter(nome => nome)
                    senhas.filter(senha => senha)

                    console.log(`array nomes ${nomes}`)
                    break;
                }
            }
        break;

        case 4:
            continuar = false
    }

    let desejaContinuar = prompt(`Deseja continuar? (s/n)`)
    if (desejaContinuar != "s") {
        continuar = false
    }
}