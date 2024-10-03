let arrayA = [15, 17, 30, 25, 60, 70, 12, 20, 40, 5];
let arrayB = [12, 55, 27, 35, 15, 7, 3, 255, 20, 40];
let result = [];
let contador = 0;

function compararArrays(arrayC, arrayD) {
    for(let i = 0;i < arrayC.length;i++){
        for(let j = 0;j < arrayD.length;j++){
            if(arrayC[i] === arrayD[j]){
                result [contador] = arrayC[i] 
                contador++
            }
        }
    }
    return result
}

let resultado = compararArrays(arrayA, arrayB);
console.log(resultado); // Deve imprimir [15, 12, 20, 40]

