let contador = 0;
let umArr = [];
let contando =0;

//while(continuar){
  // let numero = parseInt(prompt("digite um numero"))
    //umArr[contador] = numero
    //let continuar = prompt("deseja continuar ? insira 1 para continuar")
    //if(continuar != "1"){
      //  break;
    //}
    //contador++
 
    let quantos = prompt("quantos numeros deseja inserir ?")
    for(let i = 0; i < quantos; i++){
        let nomes = prompt("insira por favor 1 nome")
        umArr[contador] = nomes
        console.log(umArr[contando])
        contador++
        contando++
    } for (let j = -1; j < contador; j++){
        console.log(umArr[quantos])
        quantos = quantos - 1
} 