//importando dependencias do projeto//

const crud = require('./crud.js')
const validator = require('validator')
const readlineSync = require('readline-sync');

//////criação de variaveis////

let senha = 0;
let usuario = 0;
let controle = true



//linhas de codigo//////

function Opcoes() {
    let deseja = readlineSync.question("qual opção deseja ? : cadastrar, fazer login ou encerrar o programa")
    return deseja
}
async function Cadastro() {
    usuario = readlineSync.question("digite seu e-mail")
    senha = readlineSync.question("crie sua senha")
    await fetch('https://apigenerator.dronahq.com/api/T6znF0y1/teste').then(res => res.json())
        .then((data) => {
            let ver = data.some(api => api.name === usuario)
            if (!ver) {
                if (validator.isEmail(usuario)) {
                    if (senha === "") {
                        console.log("senha invalida, tente novamente")
                    } else {
                        crud.PostData(usuario, senha)
                    }
                } else {
                    console.log("por favor digite um email valido")
                }
            } else {
                console.log("esse email já está cadastrado")
            }
        })

}
async function Login() {
    let nome = readlineSync.question("digite seu email de usuario")
    let cenha = readlineSync.question("digite sua senha")
    await fetch('https://apigenerator.dronahq.com/api/T6znF0y1/teste').then((res) => res.json())
        .then((data) => {
            let verificacao = data.some(api => api.name === nome)
            let verificar = data.some(api => api.key === cenha)
            if (verificacao && verificar) {
                console.log("login bem sucedido")
            } else {
                console.log("nome ou senha incorreto!")
            }
        })
}
async function Excluir() {
    let achado
    let nomeASerExcluido = readlineSync.question("qual o nome do usuario que deseja excluir ?")
    await fetch('https://apigenerator.dronahq.com/api/T6znF0y1/teste').then((res) => res.json())
        .then((data) => {
            data.forEach(api => {
                if (api.name === nomeASerExcluido) {
                    achado = api.id
                }
            });
            crud.Delete(achado)
        })
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
