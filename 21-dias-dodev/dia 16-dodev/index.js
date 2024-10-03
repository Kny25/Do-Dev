const crud = require('crud.js')

//////criação de variaveis////
let senhas = []
let usuarios = []
let senha = 0;
let usuario = 0;
let controle = true



//linhas de codigo//////

function Opcoes() {
    let deseja = prompt("qual opção deseja ? : cadastrar, fazer login ou encerrar o programa")
    return deseja
}
function Cadastro() {
    usuario = prompt("digite seu usuario")
    senha = prompt("crie sua senha")
    senhas.push(senha)
    usuarios.push(usuario)

}
function Login() {
    let nome = prompt("digite seu usuario")
    let cenha = prompt("digite sua senha")
    let verificacao = usuarios.includes(nome)
    let verificar = senhas.includes(cenha)
    if (verificacao === true && verificar === true) {
        console.log("login bem sucedido")
    } else {
        console.log("nome ou senha incorreto!")
    }
}
function Excluir() {
    let nomeASerExcluido = prompt("qual o nome do usuario que deseja excluir ?")
    let casaEsta = usuarios.indexOf(nomeASerExcluido)
    usuarios.splice(casaEsta, 1)
    senhas.splice(casaEsta, 1)
}
//// criando o fluxo de funcionamento de codigo///

while (controle) {
    let opcao = Opcoes()
    if (opcao === "cadastrar") {
        Cadastro()
    } else if (opcao === "login") {
        Login()
    } else if (opcao === "excluir") {
        Excluir()
    } else {
        console.log("programa encerrado")
        break;
    }
}
