let nome = prompt("digite seu nome")
let idade = parseInt(prompt("digite sua idade"))
let salarioAtual = Number(prompt("digite seu salario atual"))
let rh = true;
let correcao = 0
let au = 0
///////linhas de codigos///////////


console.log("olá " + nome + ", você tem " + idade + ", e recebe " + salarioAtual + "R$ atualmente")
au = salarioAtual / 100
let aumento = au * 1.5
console.log(aumento)
correcao = Number(prompt("as informações estão corretas ?" +  "(sim = 1 /refazer = 2)"))

while(correcao){
 if( correcao === 1 ){
   correcao = 0;
 }else if (correcao === 2 ){
    console.log("por favor reinsira as informações")
    nome = prompt("digite seu nome")
    idade = parseInt(prompt("digite sua idade"))
    salarioAtual = Number(prompt("digite seu salario atual"))
    console.log("olá " + nome + ", você tem " + idade + ", e recebe " + salarioAtual + "R$ atualmente")
    correcao = Number(prompt("as informações estão corretas ?" +  "(sim = 1 /refazer = 2)"))
    if( correcao === 1 ){
        correcao = 0;
    }
 }
 }
 for (let i = 2025;i <= 2035 ;i++){
  let anual = salarioAtual + aumento
  console.log("em " + i + " - " + anual + "R$")
  salarioAtual = anual
  aumento *= 2
 }