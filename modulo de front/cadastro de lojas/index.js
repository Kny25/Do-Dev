const adress = document.getElementById('adress')
const nome = document.getElementById('nome')
const horarios = document.getElementById('horarios')
const horario = document.querySelector('.horario')
const formel = document.querySelector('.form')

formel.addEventListener('submit', event => {
    event.preventDefault()
    const formData = new FormData(formel)
    const data = Object.fromEntries(formData.entries())
   alert('preparando envio...')
   adress.value = ''
   horario.value = ''
   nome.value = ''
   horarios.value = ''

    fetch('https://apigenerator.dronahq.com/api/ljlSIQET/data', {
        method: "POST",
        headers: {
            'content-type': "application/json"
        },
        body: JSON.stringify(data)
    }).then(response => response.json()).then(data => console.log(data))
})
adress.addEventListener('focus', () => {
    adress.style.border = '1px solid #b76bf5';
    adress.value = window.localStorage.getItem('endereço')
})
adress.addEventListener('blur', () => {
    window.localStorage.setItem('endereço', adress.value)
    adress.style.border = 'none';
    adress.style.borderBottom = '1px solid black';
})
nome.addEventListener('focus', () => {
    nome.style.border = '1px solid #b76bf5';
})
nome.addEventListener('blur', () => {
    window.localStorage.setItem('nome da loja', nome.value)
    nome.style.border = 'none';
    nome.style.borderBottom = '1px solid black';
})
horarios.addEventListener('focus', () => {
    horarios.style.border = '1px solid #b76bf5';
})
horarios.addEventListener('blur', () => {
    window.localStorage.setItem('horario de fechamento', horarios.value)
    horarios.style.border = 'none';
    horarios.style.border = '1px solid black';
})
horario.addEventListener('focus', () => {
    horario.style.border = '1px solid #b76bf5';
})
horario.addEventListener('blur', () => {
    window.localStorage.setItem('horario abertura', horario.value)
    horario.style.border = 'none';
    horario.style.border = '1px solid black';
})

