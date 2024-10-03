class Carro{
    nome
    potencia
    velocidadeMaxima
    aceleracao
    constructor(nome, potencia, velocidadeMaxima,aceleracao){
        this.nome = nome
        this.potencia = potencia
        this.velocidadeMaxima = velocidadeMaxima
        this.aceleracao = aceleracao
    }
    distancia(distancia){
    let resultado = distancia / (this.velocidadeMaxima / this.aceleracao)
    console.log(resultado)
    }
}

class Corrida {
    name
    time
    distance
    participantes
    vencedor
    
    constructor(vencedor, time, distance, participantes, name){
        this.vencedor = vencedor
        this.time = time
        this.distance = distance
        this.participantes = participantes
        this.name = name
        
    }
    exibir(){
        console.log("o vencedor foi " + this.vencedor + " por percorrer a distancia de " + this.distance + " metros, em " + this.time + " segundos")
    }
}



let continuar = true;
let controle = 0
let crr = [];
let corr = [];

while(continuar){
    let nomeInf = prompt("Insira o nome do seu carro")
    let potenciaInf = Number(prompt("insira a potencia (numero de cavalos)"))

    let velocidadeInf =  Number(prompt("insira a Velocidade maxima que  ele alcança"))

    let aceleracaoInf = parseInt(prompt("e o tempo que leva para ir de 0 a 100km/h"))

    let distan = parseInt(prompt("insira também a distancia que quer que calcule"))

    let cont = prompt("deseja continuar ?(s/n)")
    if(cont === "n"){
        continuar = false;
    }
    for(let i =0;i < crr.length-1;i++){
        for(let j = 0;j < crr.length - i - 1;j++){
            if(crr[j].aceleracao > crr[j + 1].aceleracao){

            let temp = crr[j]
            crr[j] = crr[j + 1]
            crr[j + 1] = temp
            }
    }
}
crr [controle] = new Carro(nomeInf, potenciaInf, velocidadeInf, aceleracaoInf)
    crr[controle].distancia(distan)
    Corrida.participantes = crr[controle]
    let resul = distan / (velocidadeInf / aceleracaoInf)
Corrida.vencedor = crr[0].nome
Corrida.name = crr[controle].nome
Corrida.participantes = crr[controle]
Corrida.distance = distan
Corrida.time = resul
corr[0] = new Corrida(Corrida.vencedor, Corrida.time, Corrida.distance, Corrida.participantes, Corrida.name)
corr[0].exibir()
controle++
}
