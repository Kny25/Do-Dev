const nome = document.getElementById('Nome')
const Email = document.getElementById('Email')
const Telefone = document.getElementById('telefone')
const btn = document.querySelector('.button')
const close = document.querySelector('.close')
const popup = document.querySelector('.pop-up')
const open = document.querySelector('.carrinho')
const body = document.querySelector('body')
const HeaderHome = document.querySelector('.HeaderHome')
const menu = document.querySelector('.menu')
const content = document.querySelector('.content')
const removeProducts = document.getElementsByClassName('remove')
const valueProducts = document.getElementsByClassName('product')

function Updadetotal() {
    let total = 0
    for (let i = 0; i < valueProducts.length; i++) {
        //função de pegar os preços
        const productPrice = valueProducts[i].getElementsByClassName('precoPruduct')[0].innerText.replace('R$', '').replace(',', '.')
        //Função de pegar as quantidades
        const productqtd = valueProducts[i].getElementsByClassName('qtdPruduct')[0].value
        //função de somar o preço total
        total += productPrice * productqtd
    }
    total = total.toFixed(2)
    total = total.replace('.', ',')
    document.querySelector('.Valor').innerText = "R$" + total

}
Updadetotal()

const blurUpdate = document.getElementsByClassName('qtdPruduct')

for (let i = 0; i < blurUpdate.length; i++) {
    blurUpdate[i].addEventListener('change', Updadetotal)
    
}

for (let i = 0; i < removeProducts.length; i++) {
    removeProducts[i].addEventListener('click', (event) => {
        event.target.parentElement.remove()
        Updadetotal()
    })
}



nome.addEventListener('blur', () => {
    window.localStorage.setItem('Nome', nome.value)
})
Email.addEventListener('blur', () => {
    window.localStorage.setItem('Email', Email.value)
})
Telefone.addEventListener('blur', () => {
    window.localStorage.setItem('Telefone', Telefone.value)
})

btn.addEventListener('click', () => {
    let Nome = window.localStorage.getItem('Nome')
    let email = window.localStorage.getItem('Email')
    let telefone = window.localStorage.getItem('Telefone')

    if (Nome != '' && email != '' && telefone != '') {
        fetch('https://apigenerator.dronahq.com/api/3m57M2nT/LojaDeRoupas', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({
                'Nome': Nome,
                'Email': email,
                'Telefone': telefone
            })
        }).then(res => res.json())
    } else {
        console.log('Faltam informações')
    }
    Email.value = ''
    Telefone.value = ''
    nome.value = ''

})

close.addEventListener('click', () => {
    popup.close()
    body.style.backgroundColor = 'white';
    menu.style.backgroundColor = ' rgb(205, 205, 206)';
    HeaderHome.style.backgroundColor = 'rgba(233, 231, 231, 0.432)';
    open.style.backgroundColor = 'rgba(233, 231, 231, 0.432)';
    content.style.backgroundColor = 'rgba(233, 231, 231, 0.432)';

})

open.addEventListener('click', () => {
    popup.showModal()
    body.style.backgroundColor = ' rgb(133, 133, 133)';
    menu.style.backgroundColor = ' rgb(133, 133, 133)';
    HeaderHome.style.backgroundColor = 'rgb(133, 133, 133)';
    open.style.backgroundColor = 'rgb(133, 133, 133)';
    content.style.backgroundColor = 'rgb(133, 133, 133)';

})