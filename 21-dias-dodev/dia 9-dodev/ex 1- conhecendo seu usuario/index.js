/////// todas as variaveis que não forem de uma condição ficarão aqui ///////////
let nome = prompt("insira seu nome")
let idade = Number(prompt("insira sua idade"))
let peso = Number(prompt("insira seu peso"))
let altura = Number(prompt("insira sua altura"))
let profissao = prompt("insira sua profissao")
let dias = 365 * idade 
let meses = dias / 30 
let semanas = meses * 4
let imc = peso / (altura * altura)
let nascimento = 2023 - idade
let continuar = 0; 


console.log("Olá " + nome + ", você tem " + idade + " anos, é " + profissao + ", tem " + altura + "M de altura e pesa " + peso + "Kg")

//// linha de codigo ///////
 if(idade >= 18 ){
    console.log("Está liberado para tomar umas geladas")
    console.log(" você tem " + idade + " anos," + meses + " Meses " + semanas + " semanas " + dias + " Dias e você nasceu em " + nascimento )
 }else {
    console.log("Sem gelada para você")
    console.log(" você tem " + idade + " anos," + meses + " Meses, " + semanas + " semanas e " + dias + " Dias e você nasceu em " + nascimento )
 }
 if (imc  <= 18.5 ){
    console.log("de acordo com seu IMC que é de " + imc + "Kg/m2" + " sua faixa é de magreza")
 }else if ( imc <= 24.9 ){
    console.log("de acordo com seu IMC que é de " + imc + "Kg/m2" + " sua faixa é normal")
 }else if (imc <= 30){
    console.log("de acordo com seu IMC que é de " + imc + "Kg/m2" + " sua faixa é de sobrepeso")
 }else if ( imc > 30){
    console.log("de acordo com seu IMC que é de " + imc + "Kg/m2" + " sua faixa é de obesidade")
 }
 for ( let i = 0; nascimento < 2023; i++){
    console.log("em " + nascimento + " você tinha " + i + " anos")
nascimento++
 }
 continuar = Number(prompt("deseja inserir novos dados ? (sim = 1 / não = 2)"))
while(continuar === 1 ) {
nome = prompt("insira seu nome")
idade = Number(prompt("insira sua idade"))
peso = Number(prompt("insira seu peso"))
altura = Number(prompt("insira sua altura"))
profissao = prompt("insira sua profissao")
 dias = 365 * idade 
 meses = dias / 30 
 semanas = meses * 4
 imc = peso / (altura * altura)
 nascimento = 2023 - idade
 continuar = 0; 

console.log("Olá " + nome + ", você tem " + idade + " anos, é " + profissao + ", tem " + altura + "M de altura e pesa " + peso + "Kg")
 
   if(idade >= 18 ){
      console.log("Está liberado para tomar umas geladas")
      console.log(" você tem " + idade + " anos," + meses + " Meses " + semanas + " semanas " + dias + " Dias e você nasceu em " + nascimento )
   }else {
      console.log("Sem gelada para você")
      console.log(" você tem " + idade + " anos," + meses + " Meses, " + semanas + " semanas e " + dias + " Dias e você nasceu em " + nascimento )
   }
   if (imc  <= 18.5 ){
      console.log("de acordo com seu IMC que é de " + imc + "Kg/m2" + " sua faixa é de magreza")
   }else if ( imc <= 24.9 ){
      console.log("de acordo com seu IMC que é de " + imc + "Kg/m2" + " sua faixa é normal")
   }else if (imc <= 30){
      console.log("de acordo com seu IMC que é de " + imc + "Kg/m2" + " sua faixa é de sobrepeso")
   }else if ( imc > 30){
      console.log("de acordo com seu IMC que é de " + imc + "Kg/m2" + " sua faixa é de obesidade")
   }
    for ( let i = 0; nascimento < 2023; i++){
      console.log("em " + nascimento + " você tinha " + i + " anos")
  nascimento++
   }
   continuar = Number(prompt("deseja inserir novos dados ? (sim = 1 / não = 2)"))
   if (continuar === 1 ){
console.log ("insira outros dados por favor " + nome)
   }else {
      console.log("programa finalizado")
      continuar = false;
   }
}