let num1 = parseInt(prompt("digite um numero"))
let num2 = parseInt(prompt("digite seu segundo numero"))
let operacao = parseInt(prompt("qual opecração deseja realizar ?"))

switch (operacao) {
    case 1:
        console.log(num1 + " * " + num2 + " = " + (num1  * num2))
        break;
    case 2:
            console.log(num1 + " / " + num2 + " = " + (num1  / num2))
        break
     case 3:
            console.log(num1 + " + " + num2 + " = " + (num1  + num2))
        break
     case 4:
            console.log(num1 + " - " + num2 + " = " + (num1  - num2))
        break;
         default:
            console.log('por favor insira um numero')
            break;
            }
