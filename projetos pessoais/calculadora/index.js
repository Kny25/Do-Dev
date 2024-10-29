//variaveis DOM
const painelTexto = document.querySelector('.textoPainel')
const result = document.querySelector('.igual')
const del = document.querySelector('.delete')

del.addEventListener('click', ()=>{
    let mudanca = document.querySelector('.textoPainel').innerText
     document.querySelector('.textoPainel').innerText = mudanca.substring(0, mudanca.length -1)
})


let numberInScreen = ""; // Inicializa como string para acumular


function AddNumber(number) {
    numberInScreen += number.innerText // Acumula o valor
    painelTexto.innerText = numberInScreen; // Atualiza o texto na tela
}

result.addEventListener('click', () => {
    let result = document.querySelector('.textoPainel').innerText
    document.querySelector('.textoPainel').innerText = eval(result)
})