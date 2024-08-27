class Computador {
    tipo
    processador
    video
    armazenamento
    memoriaRam
    ssd

    constructor(tipo, processador, video, armazenamento, memorariaRam, ssd) {
        this.tipo = tipo;
        this.processador = processador;
        this.video = video;
        this.armazenamento = armazenamento;
        this.memoriaRam = memorariaRam;
        this.ssd = ssd;
    }

    exibir() {
        console.log(`Informações do Setup:\n Tipo do computador: ${this.tipo}\n Processador: ${this.processador}\n Vídeo: ${this.video}\n Armazenamento: ${this.armazenamento} GB\n Memória RAM: ${this.memoriaRam} GB\n Possui SSD: ${this.ssd}`)
    }
}

const novoComputador = new Computador(`Desktop`, `Ryzen 7`, `Integrado`, 1000, 16, true);

novoComputador.exibir();