//criando a variavel para controlar o calculo da porcentagem
let porcentagem = 0;
let au = 0;
//função que irá calcular o aumento salarial conforme o valor que o colaborador recebe
function Calcular(aumento, nome) {   

    while(aumento){
        if(aumento <= 1500){
        porcentagem = aumento / 100
        porcentagem = porcentagem * 20
        aumento = aumento + porcentagem
        break;
        } else if(aumento <= 2000){
            porcentagem = aumento / 100
        porcentagem = porcentagem * 15
        aumento = aumento + porcentagem
        break;
        }else if (aumento <= 3000){
            porcentagem = aumento / 100
        porcentagem = porcentagem * 10
        aumento = aumento + porcentagem
        break;
        }else if(aumento >= 3001){
            porcentagem = aumento / 100
        porcentagem = porcentagem * 5
        aumento = aumento + porcentagem
        break;
        }
    }
    //retornando o salaraio já calculado com o aumento baseado no salario atual do colaborador
    return  aumento;
}
//função que ira perguntar ao colaborador seu nome, salario e fazer todo calculo do seu aumento
function Dados(){
let nome = prompt("insira seu nome")
let salario = parseInt(prompt("qual seu salario"))
if(salario <= 1500){
    au = 20
    } else if(salario <= 2000){
        au = 15
    }else if (salario <= 3000){
    au = 10
    }else if(salario >= 3001){
        au = 5
    }
// exibir no console o salario do colaborador e seu aumento
console.log( nome + " por seu salario ser de " + salario + "R$, então de acordo com nossa tabela de aumento, você recebeu " + au + "% de aumento e então seu salario foi para " + Calcular(salario, nome))

}
//chamando a função que irá exibir o nome e salario com aumento do colaborador 
Dados()
