const dark = document.getElementById('dark')
const clear = document.getElementById('clear')
const corpo = document.getElementById('corpo')
const container = document.getElementById('container')
const h1 = document.querySelector('h1')

function inverseTheme(){
    corpo.style.backgroundColor = '#2c2c2c';
    container.style.backgroundColor = '#eee7e7';
    h1.style.color = 'white';
    h1.innerHTML = 'voltar ao tema claro'
    dark.style.display = 'none'
    clear.style.display = 'inline-block'
    clear.style.marginLeft = '200px';
}

function returnTheme(){
     clear.style.display = 'none'
    dark.style.display = 'inline-block'
    corpo.style.backgroundColor = 'white';
    container.style.backgroundColor = '#7c7a7a';
    h1.style.color = 'black';
    h1.innerHTML = 'voltar ao tema escuro'
}