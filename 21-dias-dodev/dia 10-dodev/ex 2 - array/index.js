let numero = parseInt(prompt("insira um numero"))
let contador = 0
let fibonacci = [];
let num = numero - 1
fibonacci[contador] = num
fibonacci[1] = numero
fibonacci[2] = numero + num
fibonacci[3] = numero + fibonacci[2]
fibonacci[4] = fibonacci[3] + fibonacci[2]
contador = 5
let contando = 3
let cont = 4

for(let i = 0; i < 5; i++){
    fibonacci[contador] = fibonacci[contando] + fibonacci[cont]
    contador++
    contando++
    cont++
}
console.log("fibonacci: " + fibonacci)