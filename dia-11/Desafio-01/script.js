const alunos = []
const notas = []
let contador = 0

let continuar = true

let mediaGeral = 0
let somaNotas = 0

while(continuar){
    let nome = prompt(`Digite o nome do aluno:`)
    let nota = Number(prompt(`Digite a nota do aluno:`))
    alunos[contador] = nome
    notas[contador] = nota
    contador++
    
    let desejaContinuar = prompt(`Deseja inserir outro aluno? (s/n)`)
    if (desejaContinuar != "s") {
        console.log(`Programa encerrado.`)
        continuar = false
    }

}

console.log(`Notas dos alunos: `)
for (let i = 0; i < alunos.length; i++) {
    console.log(alunos[i] + " - " + notas[i])
}

for (let i = 0; i < notas.length; i++) {
    somaNotas += notas[i]
}

mediaGeral = somaNotas / alunos.length

console.log(`A soma das notas foi: ${somaNotas}`)
console.log(`A média geral da turma foi: ${mediaGeral}`)