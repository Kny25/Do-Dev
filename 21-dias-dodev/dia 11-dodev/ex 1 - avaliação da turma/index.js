let nomes = [];
let notas = [];
let parar = true;
let contador = 0;
let somaNotas = 0
let mediaGeral = 0
let totalNotas = 0

while(parar){
    let alunos = prompt("insira seu nome")
 let prova = Number(prompt("insira sua nota"))
 let cont = prompt("deseja continuar ? se sim, digite 1")
 if (cont != "1"){
    parar = false;
    }else
    notas[contador] = prova
    nomes[contador] = alunos
    contador++
}

console.log("NOTAS DOS ALUNOS :")
for(let i = 0; i < notas.length;i++){
    console.log(nomes[i] + " - " + notas[i])
}
for(let j = 0; j < notas.length;j++){
    somaNotas += notas[j]
}
totalNotas = somaNotas / notas.length
console.log("a soma das notas foi " + somaNotas)
console.log("a media geral foi " + totalNotas)