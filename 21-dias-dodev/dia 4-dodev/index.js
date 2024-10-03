let estaComFome = 0
let temDinheiro = 0
let estaAberto = 0

estaComFome = prompt('você está com fome ? (sim/não)')
temDinheiro = prompt('você tem dinheiro ? (sim/não)')
estaAberto = prompt('o restaurante está aberto ? (sim/não)')

if (estaComFome === 'sim' && temDinheiro === 'sim' && estaAberto === 'sim'){
    console.log( 'HOJE A JANTA SERÁ NO SEU RESTAURANTE PREFERIDO')
    }else if(estaComFome === 'não' || temDinheiro === 'não' ) {
    console.log('hoje a janta será em casa')
} else if (estaComFome === 'sim' && temDinheiro === 'sim') {
 console.log('peça um delivery')
} 