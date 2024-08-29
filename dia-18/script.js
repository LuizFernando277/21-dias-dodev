class Livro {
    Titulo
    Autor
    Editora
    AnoPublicacao
    Disponibilidade = true

    constructor (titulo, autor, editora, anoPublicacao) {
        this.Titulo = titulo
        this.Autor = autor
        this.Editora = editora
        this.AnoPublicacao = anoPublicacao
    }
}

let livros = []

livros.push(new Livro (`livro1`, `José`, `EditoraA`, 2011))
livros.push(new Livro (`livro2`, `Maria`, `EditoraB`, 2013))
livros.push(new Livro (`livro3`, `Carlos`, `EditoraC`, 2015))

class Biblioteca {
    Nome
    Endereço
    Telefone
    AcervoLivros = []

    constructor (nome, endereço, telefone) {
        this.Nome = nome
        this.Endereço = endereço
        this.Telefone = telefone
    }

    PesquisarLivro(titulo) {
        this.AcervoLivros.forEach(livro => {
            if (livro.Titulo == titulo) {
                console.log(livro)
            }
        })
    }

    EmprestimoLivro(titulo) {
        let emprestado = false

        this.AcervoLivros.forEach(livro => {
            if (livro.Titulo == titulo) {
                if (livro.Disponibilidade == true) {
                    livro.Disponibilidade = false
                    emprestado = true
                }
            }
        })
    
        if (emprestado) {
            return true
        } else {
            return false
        }
    }

    DevolverLivro(titulo) {
        livros.forEach(livro => {
            if (livro.Titulo == titulo) {
                livro.Disponibilidade = true
                console.log(`Livro devolvido com sucesso.`)
            }
        })
    }
}

let biblioteca = new Biblioteca(`biblioteca1`, `1111111`, `Rua1`)

biblioteca.PesquisarLivro("livro2")
biblioteca.EmprestimoLivro("livro1")
biblioteca.DevolverLivro("livro1")