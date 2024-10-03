//criando arrays //
let livros = [];

//criando classes //
class Livro {
    titulo
    autor
    editora
    anoDePublicacao
    disponibilidade
    constructor(titulo, autor, editora, anoDePublicacao, disponibilidade) {
        this.titulo = titulo
        this.autor = autor
        this.editora = editora
        this.anoDePublicacao = anoDePublicacao
        this.disponibilidade = true
    }
}

class Biblioteca {
    nome
    endereco
    telefone
    acervoDeLivros
    constructor(nome, endereco, telefone) {
        this.nome = nome
        this.endereco = endereco
        this.telefone = telefone
        this.acervoDeLivros = livros
    }

    buscar(nome) {
        let resultado = livros.findIndex(livro => livro.titulo === nome)
        if (resultado !== -1) {
            console.log(`o  autor do livro ${livros[resultado].titulo} é ${livros[resultado].autor}, editado pela editora ${livros[resultado].editora} e foi publicado em ${livros[resultado].anoDePublicacao}`)
        }
    }

    emprestimo(nome) {
        console.log("Verificando se está disponível...");
        
        let livroDisponivel = livros.find(livro => livro.titulo === nome && livro.disponibilidade === true);
    
        if (livroDisponivel) {
           
            console.log(`Hoje é seu dia de sorte, o livro ${livroDisponivel.titulo} está disponível`);
            livroDisponivel.disponibilidade = false; 
        } else {
            
            let livroEmprestado = livros.find(livro => livro.titulo === nome && livro.disponibilidade === false);
            
            if (livroEmprestado) {
                console.log(`Infelizmente o livro ${livroEmprestado.titulo} já foi emprestado`);
            } else {
                console.log(`O livro ${nome} não está disponível para empréstimo`);
            }
        }
    }
    


    devolucao(nome) {
        for (let i = 0; i < livros.length; i++) {
            if (livros[i].titulo === nome && livros[i].disponibilidade === false) {
                livros[i].disponibilidade = true
                console.log("livro devolvido com sucesso")
                break;
            } else {
                console.log("esse livro já está conosco")
            }
        }
    }
}

livros.push(new Livro("como eu era antes de você", "jojo moyes", "brasil", "5 de janeiro de 2012"))

let Bibliotecas = new Biblioteca("biblioteca dodev", "rua 2", 139459499)
Bibliotecas.buscar("como eu era antes de você")
Bibliotecas.emprestimo("como eu era antes de você")
Bibliotecas.devolucao("como eu era antes de você")

let teste = livros.find(livro => livro.autor === "jojo moyes")
console.log(teste.titulo)