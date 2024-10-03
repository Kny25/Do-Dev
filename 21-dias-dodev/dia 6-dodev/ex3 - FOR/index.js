let nmr = Number(prompt("insira o numero da tabuada que deseja"))
let vlr = 0;
let vlr2 = 0;

for(let i = 0; i <= 10; i ++) {
    console.log(nmr +" X " + i + " = " + nmr*i)
}
console.log('essa foi a tabuada do ' + nmr)
let mdc = nmr + 1
console.log('agora irá iniciar a tabuada do ' + mdc )
for(let i = 0; i <= 10; i ++) {
    vlr = nmr + 1
    console.log(vlr +" X " + i + " = " + vlr*i)
}
console.log('essa foi a tabuada do ' + vlr)
mdc = vlr + 1
console.log('agora irá iniciar a tabuada do ' + mdc)

for(let i = 0; i <= 10; i ++) {
    vlr2 = nmr + 2
    console.log(vlr2 +" X " + i + " = " + vlr2*i)
}
console.log("FIM... ")