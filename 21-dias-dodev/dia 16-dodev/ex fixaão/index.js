//////// criação das classes, funções e variaveis do projeto////
let Pessoas = [];
let control = true;

class Fix {
    nome
    idade
    altura
    constructor(nome, idade, altura) {
        this.nome = nome;
        this.idade = idade;
        this.altura = altura;
    }
}

function OrdernaIdade(arr) {
    arr.sort((a, b) => a.idade - b.idade)
}
function OrdenarPorAltura(arr) {
    arr.sort((a, b) => a.altura - b.altura)
    return arr;
}
function OrdenarPorNome(arr) {
    arr.sort((a, b) => a.nome.localeCompare(b.nome))
    return arr;
}
let tot = 0
function MediaAltura(arr) {
    for (let i = 0; i < arr.length; i++) {
        tot += arr[i].altura + arr[i].altura
    }
    return tot / arr.length;
}
function MediaIdade(arr) {
    for (let i = 0; i < arr.length; i++) {
        tot += arr[i].idade + arr[i].idade
    }
    return tot / arr.length;
}

/////// estrutura do codigo/////
while (control) {
    let nam = prompt("digite seu nome")
    let age = Number(prompt("digite sua idade"))
    let heigth = parseFloat(prompt("digite sua altura"))
    Pessoas.push(new Fix(nam, age, heigth))
    let inserir = prompt("deseja inserir outro nome ?(s/n)")
    if (inserir != "s") {
        break;
    }
}

let ordenar = prompt("deseja ordenar por que ordem os alunos ?")


/////criando fluxo de funcionamento do codigo//////
switch (ordenar) {
    case "idade":
        OrdernaIdade(Pessoas)
        break;
    case "altura":
        OrdenarPorAltura(Pessoas)
        break;
    case "nome":
        OrdenarPorNome(Pessoas)
        break;
}
let maiores = Pessoas.filter(Pessoa => Pessoa.idade >= 18)
console.log("a media de altura dos participantes é de " + MediaAltura(Array))
console.log("a media de idade dos participantes é de " + MediaIdade(Array))

console.log(`esses são os maiores de idade ${maiores}`)