function kmGasolina(distancia, tipoDeCombustivel){
let resultado
if(tipoDeCombustivel === "gasolina"){
    resultado = parseInt(Number(distancia) / 16)
}
return resultado
}

function kmEtanol(distancia, tipoDeCombustivel){
    let resultado
    if(tipoDeCombustivel === "etanol"){
        resultado = parseInt(Number(distancia) / 11)
    }
    return resultado
}

module.exports = {kmGasolina, kmEtanol}