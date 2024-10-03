//criando arrays ////
let hoteis = [];
let reservas = [];

//criando as classes ////
class Hotel {
    id
    name
    categoria
    endereco
    telefone
    aberto = false
    constructor(id, name, categoria, endereco, telefone) {
        this.id = id
        this.name = name
        this.categoria = categoria
        this.endereco = endereco
        this.telefone = telefone
    }
}

class reserva {
    id
    idHotel
    responsavel
    entrada
    saida
    ativa = false
    constructor(id, idHotel, responsavel, entrada, saida) {
        this.id = id
        this.idHotel = idHotel
        this.responsavel = responsavel
        this.entrada = entrada
        this.saida = saida
    }
}
const nomehotel1 = "plaza"
const idhotel1 = "21"
const categoriahotel1 = "Caseiro"
const enderecohtl1 = "jovino"
const telhtl1 = 135676756756

hoteis.push(new Hotel(idhotel1, nomehotel1, categoriahotel1, enderecohtl1, telhtl1))
const nomehotel2 = "center"
const idhotel2 = "34"
const categoriahotel2 = "social"
const enderecohtl2 = "jovino cardoso"
const telhtl2 = 1498545475

hoteis.push(new Hotel(idhotel2, nomehotel2, categoriahotel2, enderecohtl2, telhtl2))

const idHotelres1 = "21"
const idres1 = "24"
const responsavelres1 = "kennedy"
const entradares1 = 1
const saidares1 = 13
reservas.push(new reserva(idres1, idHotelres1, responsavelres1, entradares1, saidares1))

const idHotelres2 = "21"
const idres2 = "25"
const responsavelres2 = "Fabiana"
const entradares2 = 1
const saidares2 = 13
reservas.push(new reserva(idres2, idHotelres2, responsavelres2, entradares2, saidares2))

const idHotelres3 = "21"
const idres3 = "50"
const responsavelres3 = "pietra"
const entradares3 = 1
const saidares3 = 13
reservas.push(new reserva(idres3, idHotelres3, responsavelres3, entradares3, saidares3))

const idHotelres4 = "34"
const idres4 = "50"
const responsavelres4 = "pietra"
const entradares4 = 1
const saidares4 = 13
reservas.push(new reserva(idres4, idHotelres4, responsavelres4, entradares4, saidares4))

const idHotelres5 = "34"
const idres5 = "33"
const responsavelres5 = "kleber"
const entradares5 = 1
const saidares5 = 13
reservas.push(new reserva(idres5, idHotelres5, responsavelres5, entradares5, saidares5))

const idHotelres6 = "34"
const idres6 = "44"
const responsavelres6 = "sabrina"
const entradares6 = 1
const saidares6 = 13
reservas.push(new reserva(idres6, idHotelres6, responsavelres6, entradares6, saidares6))

function adicaoSobreNome(nome, sobreNome) {
    let veri = reservas.filter(res => res.responsavel === nome)
    if (veri.length > 0) {
        veri.forEach(hotel => {
                hotel.responsavel = hotel.responsavel + sobreNome
                console.log(hotel.responsavel)
            })
    } else {
       console.log("não entrou no if")
    }
}

function reservaEstaAtiva(idHtl, idRes) {
    let verificacao = reservas.filter(res => res.idHotel === idHtl && res.id === idRes)
    if (verificacao.length > 0) {
        verificacao.forEach(reserva => reserva.ativa = !reserva.ativa)
    }else {
        console.log("não entrou no if")
    }
}

function porHotel (idDoHotel){
let id = reservas.filter(reserva => reserva.idHotel === idDoHotel)
console.log(id)
}

porHotel ("21")

adicaoSobreNome(prompt("digite seu nome"), prompt("digite seu sobrenome, para podermos adicionar"))

reservaEstaAtiva("34", "50")
