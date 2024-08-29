class Hotel {
    id
    nome
    categoria
    endereço
    telefone

    constructor(id, nome, categoria, endereço, telefone) {
        this.id = id
        this.nome = nome;
        this.categoria = categoria;
        this.endereço = endereço;
        this.telefone = telefone;
    }
}

class Reserva {
    id
    idHotel
    nomeResponsavel
    diaEntrada
    diaSaida

    constructor(id, idHotel, nomeResponsavel, diaEntrada, diaSaida) {
        this.id = id
        this.idHotel = idHotel
        this.nomeResponsavel = nomeResponsavel
        this.diaEntrada = diaEntrada
        this.diaSaida = diaSaida
    }
}


function cadastrarHotel() {
    let nome = prompt(`Digite o NOME do hotel:`)
    let categoria = parseInt(prompt(`Digite a CATEGORIA do hotel:`))
    let endereço = prompt(`Digite o ENDEREÇO do hotel:`)
    let telefone = prompt(`Digite o TELEFONE do hotel:`)

    let hotel = new Hotel(idHotel, nome, categoria, endereço, telefone)
    idHotel++
    hoteis.push(hotel)
}

function cadastrarReserva() {
    let idHotel
    let existe = false

    do {
        idHotel = parseInt(prompt(`Digite o id do hotel:`))
        for (let i = 0; i < hoteis.length; i++) {
            if (idHotel == hoteis[i].id) {
                i = hoteis.length
                existe = true
            } else if (i == hoteis.length - 1) {
                console.log(`id de hotel não cadastrado.`)
            }
        }
    } while(!existe)

    let nomeResponsavel = prompt(`Digite o NOME do responsável pela reserva:`)
    let diaEntrada = parseInt(prompt(`Digite o dia da ENTRADA no hotel:`))
    let diaSaida

    do {
        diaSaida = parseInt(prompt(`Digite o dia de SAÍDA do hotel:`))
        if (diaSaida < diaEntrada) {
            console.log(`O dia de saída deve ser maior que o dia de entrada.`)
        }
    } while (diaSaida < diaEntrada)

    let reserva = new Reserva(idReserva, idHotel, nomeResponsavel, diaEntrada, diaSaida)
    idReserva++
    reservas.push(reserva)
}

function PesquisarReservasPorHotel(idHotel) {
    reservas.forEach(reserva => {
        if (idHotel == reserva.idHotel) {
            let i = idHotel - 1

            console.log(`Hotel: `, hoteis[i].nome)
            console.log(`Nome do Responsável: `, reserva.nomeResponsavel)
            console.log(`Dia de Entrada no hotel: `, reserva.diaEntrada)
            console.log(`Dia de Saída do hotel: `, reserva.diaSaida)
        }
    })
}

function PesquisarHotelPelaReserva(idReserva) {
    let idHotel = reservas[idReserva - 1].idHotel

    console.log(`Hotel: `, hoteis[idHotel - 1].nome)
    console.log(`Endereço: `, hoteis[idHotel - 1].endereço)
    console.log(`Dia de Entrada: `, reservas[idReserva - 1].diaEntrada)
    console.log(`Dia de Saída: `, reservas[idReserva - 1].diaSaida)
}

function PesquisarReservasPorNome(nome) {
    for (let i = 0; i < reservas.length; i++) {
        if (nome == reservas[i].nomeResponsavel) {
            
            console.log(`Id da Reserva: ${reservas[i].id}`)
            console.log(`Hotel: ${hoteis[(reservas[i].idHotel) - 1].nome}`)
        }
    }
}

function PesquisarHotelPelaCategoria(categoria) {
    let hoteisPesquisados = []

    for (let i = 0; i < hoteis.length; i++) {
        if (categoria == hoteis[i].categoria) {
            hoteisPesquisados.push(hoteis[i].nome)
        }
    }
    
    return hoteisPesquisados
}

function AtualizarTelefone(idHotel, telefone) {
    hoteis[idHotel - 1].telefone = telefone
    console.log(`Número de telefone atualizado com sucesso.`)
}

// Fluxo de Funcionamento

let continuar = true

do {
    let opcao = prompt(`Escolha a opção desejada:\n 1 - Cadastrar Hotel\n 2 - Cadastrar Reserva\n 3 - Procurar Reserva pelo Hotel\n 4 - Procurar Hotel pela Reserva\n 5 - Procurar Reserva pelo Nome do Responsável\n 6 - Procurar Hotéis pela Categoria\n 7 - Atualizar Telefone do Hotel\n 8 - Encerrar Programa`)

    switch (opcao) {
        case "1":
            cadastrarHotel()
            break;

        case "2":
            cadastrarReserva()
            break;

        case "3":
            PesquisarReservasPorHotel(prompt(`Digite o ID do Hotel:`))
            break;

        case "4":
            PesquisarHotelPelaReserva(prompt(`Digite o ID da Reserva:`))
            break;

        case "5":
            PesquisarReservasPorNome(prompt(`Digite o nome do responsável pela reserva:`))
            break;

        case "6":
            let hoteisPesquisados = PesquisarHotelPelaCategoria(parseInt(prompt(`Digite a categoria de hotéis que deseja pesquisar:`)))
            console.log(hoteisPesquisados)
            break;

        case "7":
            let idHotel = parseInt(prompt(`Digite o ID do Hotel que deseja atualizar:`))
            let telefone = prompt(`Digite o novo telefone:`)
            AtualizarTelefone(idHotel, telefone)
            break;

        case "8":
            console.log(`Programa encerrado.`)
            continuar = false
            break;

        default:
            console.log(`Opção inválida.`)
            break;
    }

} while(continuar)

let hoteis = []
let idHotel = 1

let reservas = []
let idReserva = 1