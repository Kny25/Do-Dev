let senhas =[];
let nomes = [];
let fluxo = true;
let contador = 0
while(fluxo){
let opcoes = Number(prompt("que opção deseja ? (cadastrar 1/ fazer login 2/ excluir 3)"))
switch(opcoes){
    case 1:
        let opcao = prompt("digite seu nome de usuario")
        let opcao1 = prompt("crie sua senha")
        nomes[contador] = opcao
        senhas[contador] = opcao1
        contador++
        break;
        case 2:
            let login = prompt("Insira seu nome");
            let login1 = prompt("Digite sua senha");
            let loginSuccess = false;
        
            for (let i = 0; i < nomes.length; i++) {
                if (nomes[i] == login && senhas[i] == login1) {
                    alert("Login bem sucedido, liberando seu acesso...");
                    loginSuccess = true;
                    break;
                }
            }
            
            if (!loginSuccess) {
                alert("Usuário ou senha não encontrados, digite os dados corretamente ou se não tiver cadastro, vá até a aba de cadastro e efetue um.");
            }
            break;
    case 3: 
    let excluirNome = prompt("Digite o nome de usuário a ser excluído");
    let excluirSenha = prompt("Digite a senha do usuário a ser excluído");
    let found = false;

    for (let i = 0; i < nomes.length; i++) {
        if (nomes[i] === excluirNome && senhas[i] === excluirSenha) {
            nomes.splice(i, 1);
            senhas.splice(i, 1);
            alert("Usuário excluído com sucesso!");
            found = true;
            break;
        }
    }

    if (!found) {
        alert("Usuário ou senha não encontrados.");
    }
    break;
default:
    console.log("Opção inválida, tente novamente.");
}
let parar = prompt("Deseja efetuar outro cadastro, login ou exclusão? (s/n)");
if (parar === "n") {
fluxo = false;
}
}