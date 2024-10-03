let order = [];

let numeros = [
    
    {
        numero: 147,
    rua: "armando ferreira",
bairro: "baln tupy"
    },
    {
        numero: 150,
    rua: "padre manoel de nobrega",
bairro: "centro"
    },
    {
        numero: 132,
    rua: "flacidez ferreira",
bairro: "gaivota"
    },
    {
        numero: 290,
    rua:  "palmira rossi",
bairro: "recrio são jorge"
    }
];
numeros.forEach((element, index) => {
    if(element.numero < 200){
        order.push(element)
        console.log(index)
    }
});
console.log(`numero da casa maior que 200 encontrado, já está ocorrendo o prcessso de remoção`)
console.log(order)
let soma = 0
numeros.forEach(element => {
soma += element.numero + element.numero
});
console.log(soma)
