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

hoteis.push(new Hotel (idhotel2, nomehotel2, categoriahotel2, enderecohtl2, telhtl2))

const idHotelres1 = "21"
const idres1 = "24"
const responsavelres1 = "kennedy"
const entradares1 = 1
const saidares1 = 13
reservas.push(new reserva(idres1,idHotelres1, responsavelres1, entradares1, saidares1))

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

//criando função para cadastrar Hotel
function CadastrarHotel() {
    let id = prompt(`digite o id do seu hotel`)
    let nome = prompt(`digite o nome do seu hotel`)
    let categoria = prompt(`digite a categoria do seu hotel`)
    let endereco = prompt(`digite o endereço do seu hotel`)
    let telefone = Number(prompt(`digite o telefone do seu hotel`))
    hoteis.push(new Hotel(id, nome, categoria, endereco, telefone))
    return hoteis;
}

//criando função para cadastrar pessoa 
function CadastrarReserva() {
    let id = prompt(`digite seu id`)
    let idhotel = prompt(`digite o id do hotel`)
    let responsavel = prompt(`digite o nome do responsavel pela reserva`)
    let entrada = prompt(`digite o dia em que irá entrar`)
    let saida = prompt(`digite o dia em que irá sair`)
    reservas.push(new reserva(id, idhotel, responsavel, entrada, saida))
    return reserva;
}


//criando as funções ///
function ExibirRes(id) {
    let indexHotel = hoteis.findIndex(hotel => hotel.id === id);
    if (indexHotel !== -1) {
        let fitroDehoteis = reservas.filter(hotel => hotel.idHotel === id)
                console.log(hoteis[indexHotel].name)
                for (let i = 0; i < fitroDehoteis.length; i++) {
                    console.log(`o responsavel pela ${i + 1}º reserva é ${fitroDehoteis[i].responsavel} - entra dia ${fitroDehoteis[i].entrada} e sairá ${fitroDehoteis[i].saida}`)
                }
    } else {
        // Caso o hotel não seja encontrado
        console.log(`Hotel não encontrado no nosso sistema`)
    }
}


function IdRes(id) {
    let filtroReserva = reservas.filter(reserva => reserva.id === id);

    if (filtroReserva.length > 0) {
        for (let i = 0; i < filtroReserva.length; i++) {
            let idHotel = filtroReserva[i].idHotel;
            let indexHotel = hoteis.findIndex(hotel => hotel.id === idHotel);
            if (indexHotel !== -1) {
                console.log(`O hotel em que está é o ${hoteis[indexHotel].name}, ${hoteis[indexHotel].endereco}, entrará dia ${filtroReserva[i].entrada}, e sairá dia ${filtroReserva[i].saida}`);
            } else {
                console.log(`Hotel não encontrado para a reserva com id ${filtroReserva[i].idHotel}`);
            }
        }
    } else {
        console.log(`Não foram encontradas reservas com o id ${id} no nosso sistema`);
    }
}


function Pessoa(nome) {
    let filtroPessoa = reservas.filter(pessoa => pessoa.responsavel === nome)
    if (filtroPessoa.length > 0) {
        filtroPessoa.forEach(reserva => {
            let indexHotel = hoteis.findIndex(hotel => hotel.id === reserva.idHotel);
            if (indexHotel !== -1) {
                console.log(`${hoteis[indexHotel].name} - Entrada: ${reserva.entrada}, Saída: ${reserva.saida}`);
            } else {
                console.log(`Hotel não encontrado para a reserva com id ${reserva.idHotel}`);
            }
        });
    } else {
        console.log(`Responsável pela reserva não encontrado no nosso sistema`);
    }
}

function Categoria(categoria) {
    let cat = []
    let indexCategoria = hoteis.findIndex(element => element.categoria === categoria)
        if (indexCategoria !== -1) {
        hoteis.forEach(element => {
            if (element.categoria === categoria) {
                cat.push(element)
                for (let i = 0; i < cat.length; i++) {
                    console.log(`${cat[i].name}`)
                }
            }
        })
    }
}


function attDados(id, telefone) {
    for (let i = 0; i < hoteis.length; i++) {
        if (hoteis[i].id === id) {
            hoteis[i].telefone = telefone;
            break;
        }
    }
}

//croando fluxo de funcionamento do codigo//
let continuar = true;
do {
    let opc = Number(prompt(`o que deseja realizar ?`))
    switch (opc) {
        case 1:
            CadastrarHotel()
            break;
        case 2:
            CadastrarReserva()
            break;
        case 3:
            let idDoHotel = prompt(`digite o id do hotel que deseja `)
            ExibirRes(idDoHotel)
            break;
        case 4:
            let idDaReserva = prompt(`digite o id da sua reserva`)
            IdRes(idDaReserva)
            break;
        case 5:
            let nome = prompt(`digite seu nome para podermos dizer quais reservas voçe possui`)
            Pessoa(nome)
            break;
        case 6:
            let categoria = prompt(`qual a categoria do hotel que procura ?`)
            Categoria(categoria)
            break;
        case 7:
            let hotelAtt = prompt(`digite o id do hotel que deseja atualuzr os dados`)
            let AtualizarTell = prompt(`digite o numero de telefone que deseja atualizar`)
            attDados(hotelAtt, AtualizarTell)
            break;
        default:
            continuar = false;
            alert(`programa encerrado`)
    }
} while (continuar);