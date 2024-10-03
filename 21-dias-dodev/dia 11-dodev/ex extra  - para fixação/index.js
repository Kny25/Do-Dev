function bubbleSort(nome, idade, salario) {
    for (let i = 0; i < salario.length - 1; i++) {
        let troca = false;
        for (let j = 0; j < salario.length - 1 - i;j++) {
            if (salario[j] > salario[j + 1]) {
                troca = true;
                let tempSalario = salario[j]
                salario[j] = salario[j + 1]
                salario[j + 1] = tempSalario

                let tempIdade = idade[j]
                idade[j] = idade[j + 1]
                idade[j + 1] = tempIdade

                let tempNome = nome[j]
                nome[j] = nome [j + 1]
                nome[j + 1] = tempNome
                troca = true;
            }
        }
        if (!troca) {
            break;
        }
    }
    return {
        nome: nome,
        idade: idade,
        salario: salario
    }
}
let parar = true;
let idade = [];
let salario = [];
let nome = [];
contador = 0;

while(parar){
let nm = prompt("Insira seu nome")
let idd = prompt("digite sua idade")
let sll = Number(prompt("digite seu salario")) 

idade [contador] = idd
salario [contador] = sll
nome [contador] = nm
contador++

let continuar = prompt("deseja inserir mais algum funcionario ? s/n")
if(continuar == "n"){
    parar = false;
}
}
bubbleSort(nome, idade, salario)

for(let i = 0; i < salario.length; i++){
    console.log("funcionarios ordenados pelo salario")
    console.log(  nome[i] + "-" + idade[i] + "-" + salario[i])
}