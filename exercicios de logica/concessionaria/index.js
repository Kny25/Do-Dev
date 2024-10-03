const informacoes = []
let controle = true


function coletarDados(){
    while(controle){
    if(informacoes.length < 3){
        const modelo = prompt('digite o modelo do seu carro')
        const ano = prompt('digite o ano do seu carro')
        const valor = Number(prompt('digite o valor do seu carro'))
        informacoes.push({
            'Modelo': modelo,
            'Ano': ano,
            'valor': valor
        })
    }else {
        controle = false
    }
    }
    return informacoes;
}

function preco(array){
    array.sort(( a, b ) => a.valor - b.valor)
    console.log(`o carro mais barato é o ${array[0].Modelo} - 
    ${array[0].valor}$ e o mais caro é o ${array[array.length - 1].Modelo} - ${array[array.length - 1].valor}$`)

    return array
}

function media(array){
    let soma = 0
    for(let i = 0;i < array.length; i++){
        soma += array[i].valor
    }
    let media = parseInt(soma / array.length)
    console.log(`a media dos valores dos carros é ${media}`)
}

coletarDados()
preco(informacoes)
media(informacoes)



