const nome = prompt("digite seu nome ")
const cpf = parseInt(prompt("digite seu cpf"))
let valor = Number(prompt("insira o valor ( apenas certifique-se de inserir um valor positivo)"))
let opcao = prompt("deseja a opção de saque ou deposito ? (saque: S/ deposito: D)")
let saque = 0
let deposito = 0
let saldo = 500;
let continuar = 0
let totalTransacoes = 5
let valoresInseridos = 1000
let maiorValor = 0

do {
    if (opcao === "s") {
        saque = saldo - valor 
        if ( valor > saldo ) {
            console.log(" infelizmente você só possui " + saldo + " em sua conta, deposite mais para que possa aumentar seu saldo")
            saldo = saldo - valor
        } else if (opcao === "s")
            { console.log(" parabens você sacou " + valor + " agora te resta " + saque + "R$ em sua conta")
                totalTransacoes = +1
        } 
    opcao = false;
    } if (opcao === "d") {
        deposito = saldo + valor 
        console.log(" você depositou " + valor + " agora seu saldo em conta é de " + deposito + "R$")
        saldo = valor + saldo
        totalTransacoes = +1
        opcao = false;
        
    }
continuar = parseInt(prompt("deseja continuar " + nome + " se sim digite (1) se não digite (2) "))  
if (continuar === 1 ){
    let valor2 =  Number(prompt("insira o valor ( apenas certifique-se de inserir um valor positivo)"))
    let opcao2 =  prompt("deseja a opção de saque ou deposito ? (saque: S/ deposito: D)")
if (opcao2 === "s") {
    saldo = saldo - valor
    if ( valor2 > saldo ) {
        console.log(" infelizmente você só possui " + saldo + " em sua conta, deposite mais para que possa aumentar seu saldo")
        valoresInseridos = +1
    } else if (opcao2 === "s")
        { console.log(" parabens você sacou " + valor2 + " agora te resta " + saque + "R$ em sua conta")
            saldo = saldo - valor2
            totalTransacoes = +1
    } 
}if (opcao2 === "d" ) {
    deposito = saldo + valor2
    console.log(" você depositou " + valor2 + " agora seu saldo em conta é de " + deposito + "R$")
    saldo = saldo + valor2
    totalTransacoes = +1
    }
    if (opcao < opcao2 ){
        maiorValor = opcao2
    }else {
       maiorValor = opcao
       totalTransacoes = +1
    }

} if (continuar === 2){
    console.log("suas transaçoes foram realizadas com sucesso")
    continuar = 0
}

 
}while (continuar)
let media = valoresInseridos / totalTransacoes 


console.log("media dos valores inseridos : " + media)