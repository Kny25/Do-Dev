let nome = 0
let idade = 0
let possuiCarta = 0
let temCarro = 0

nome = prompt('coloque seu nome')
idade = parseInt(prompt('insira sua idade'))
possuiCarta = prompt('você tem carteira de motorista ' + nome + ' ?( sim/não)' )
temCarro = prompt('você tem um carro ? (sim/não)')
if(idade < 18 || possuiCarta != 'sim') {
    console.log (nome + ', você não pode dirigir por não ter carta ou não ser maior de idade')
} else if (idade >= 18 && possuiCarta ==='sim' && temCarro === 'sim' ) {
    console.log(nome + ', você será o motorista')
} else {
    console.log (nome + ', você até pode dirigir mas não tem um carro')
}