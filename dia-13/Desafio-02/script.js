class Carro {
    nome
    potencia
    velocidadeMaxima
    aceleração

    constructor(nome, potencia, velocidadeMaxima, aceleração){
        this.nome = nome
        this.potencia = potencia
        this.velocidadeMaxima = velocidadeMaxima
        this.aceleração = aceleração
    }

    TempoCorrida(distancia){
        let tempoVolta = distancia / (this.velocidadeMaxima / this.aceleração)
        return tempoVolta
    }
}


class Corrida {
    nome
    tipo
    distancia
    participantes
    vencedor

    constructor(nome, tipo, distancia){
        this.nome = nome
        this.tipo = tipo
        this.distancia = distancia
        this.participantes = []
        this.vencedor = ""
    }

    MenorTempo(){
        let menorTempo = this.participantes[0].TempoCorrida(this.distancia)
        let vencedor = this.participantes[0]

        for (let i = 1; i < this.participantes.length; i++) {
            let tempo = this.participantes[i].TempoCorrida(this.distancia)
            if (tempo < menorTempo) {
                menorTempo = tempo
                vencedor = this.participantes[i]
            }
        }

        return this.vencedor = vencedor
    }

    ExibirVencedor() {
        console.log(`O vencedor da corrida é: ${this.vencedor.nome}`)
    }

    ExibirCorrida() {
        console.log(`Informações do Circuito:\n Local da corrida: ${this.nome}\n Tipo de Corrida: ${this.tipo}\n Distancia do circuito: ${this.distancia} metros`)
    }
}

const corrida = new Corrida("Silverstone", "Fórmula 1", 40000)

corrida.participantes[0] = new Carro("Ferrari", 100, 200, 5)
corrida.participantes[1] = new Carro("Mercedez", 200, 300, 3)
corrida.participantes[2] = new Carro("McLaren", 150, 220, 4)

for (i = 0; i < corrida.participantes.length; i++) {
    console.log(corrida.participantes[i])
}

corrida.ExibirCorrida();

corrida.MenorTempo();
corrida.ExibirVencedor();
