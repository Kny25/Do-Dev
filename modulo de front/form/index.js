const formel = document.getElementById('form')
const dark = document.getElementById('dark')
const clear = document.getElementById('clear')
const corpo = document.getElementById('corpo')
const container = document.getElementById('container')
const h1 = document.querySelector('h1')
const letras = document.getElementById('inverse')
const header = document.getElementById('header')

formel.addEventListener('submit', event => {
    event.preventDefault()
    const formData = new FormData(formel)
    const data = Object.fromEntries(formData.entries())
   
    fetch('https://apigenerator.dronahq.com/api/vtBisADf/carros', {
        method: "POST",
        headers: {
            'content-type': "application/json"
        },
        body: JSON.stringify(data)
    }).then(response => response.json())
})

function inverseTheme(){
    header.style.backgroundColor = 'white'
    letras.style.color = ' rgb(119, 120, 121)'
    formel.style.backgroundColor = 'white'
    clear.style.display = 'inline-block'
    clear.style.marginLeft = '40px';
    dark.style.display = 'none'
    corpo.style.backgroundColor = '#2c2c2c';
    container.style.backgroundColor = '#eee7e7';
    h1.style.color = 'white';
    h1.innerHTML = 'voltar ao tema claro'
}

function returnTheme(){
    header.style.backgroundColor = 'rgb(114, 112, 112)'
    letras.style.color = 'black'
    formel.style.backgroundColor = 'rgb(114, 112, 112)'
     clear.style.display = 'none'
    dark.style.display = 'inline-block'
    corpo.style.backgroundColor = 'white';
    container.style.backgroundColor = '#7c7a7a';
    h1.style.color = 'black';
    h1.innerHTML = 'voltar ao tema escuro'
}