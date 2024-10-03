let opcao = prompt("o senhor deseja qual serviço ? calibrar = 1  abastecer com gasolina = 2 ou com álcool 3")
let gasolina 
let alcool 
let valor

switch(opcao) {
case "2":
 gasolina = parseInt(prompt("digite o valor que o senhor quer abastecer"))
  valor = gasolina / 5
  console.log("exelente o senhor abasteceu " + valor + "LT de gasolina" )
        break;
  case "3":
alcool = parseInt(prompt("QUAL VALOR O SENHOR QUER ABASTECER ?"))
  valor = alcool / 3
  console.log("exelente o senhor abasteceu " + valor + "LT de alcool" )
         break;
   default:
    console.log("Pneu calibrado coom sucesso")   
}
