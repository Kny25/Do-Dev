let anos = [];
let valores = [];
let modelos = [];
let parar = true;
let contador = 0;

let troca = true;

while (parar){
    let model = prompt("digite o modelo do seu carro")
    let val = prompt("digite o valor do seu carro")
    let an =  prompt("digite o ano do seu carro")
    let para =  prompt("deseja inserir dados de outro carro ? (s/n)")
    if (para === "n"){
        parar = false;
    }
    anos[contador] = an
    valores[contador] = val
    modelos[contador] = model
    contador++
}
for (let i = 0; i < valores.length - 1; i++) {
    let troca = false;
    for (let j = 0; j < valores.length - i - 1; j++) {
        if (valores[j] < valores[j + 1]) {
            // Troca os valores no array 'valores'
            let tempValor = valores[j];
            valores[j] = valores[j + 1];
            valores[j + 1] = tempValor;

            // Troca os modelos correspondentes no array 'modelos'
            let tempModelo = modelos[j];
            modelos[j] = modelos[j + 1];
            modelos[j + 1] = tempModelo;

            // Troca os anos correspondentes no array 'anos'
            let tempAno = anos[j];
            anos[j] = anos[j + 1];
            anos[j + 1] = tempAno;

            // Indica que ocorreu pelo menos uma troca nesta passagem
            troca = true;
        }
    }
    // Se não houve nenhuma troca nesta passagem, o array está ordenado e podemos parar
    if (!troca) {
        break;
    }
}

console.log(q)
    console.log("Carros ordenados pelo preço:")
    for (let i=0; i < modelos.length; i++) {
    
    console.log(modelos[i] + " - " + anos[i] + " - " + valores[i])
    }
