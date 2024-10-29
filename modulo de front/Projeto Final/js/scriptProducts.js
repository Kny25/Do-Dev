const nome = document.getElementById('Nome')
const Email = document.getElementById('Email')
const Telefone = document.getElementById('telefone')
const btn = document.querySelector('.button')
const close = document.querySelector('.close')
const popup = document.querySelector('.pop-up')
const open = document.querySelector('.carrinho')
const body = document.querySelector('body')
const HeaderProduct = document.querySelector('.HeaderProduct')
const menu = document.querySelector('.menu')
const content = document.querySelector('.content')
const removeProducts = document.getElementsByClassName('remove')
const valueProducts = document.getElementsByClassName('product')
const addtocart = document.getElementsByClassName('add')
const mais = document.querySelector('.mais')
const menos = document.querySelector('.menos')

let Cart = JSON.parse(window.sessionStorage.getItem('NewProduct')) || []


    let update = document.getElementsByClassName('QuantityValue')
    for (let i = 0; i < update.length; i++) {
        mais.addEventListener('click', () => {
            let updateMais = Number(update[i].innerText)
            updateMais++
            console.log(updateMais)
            return document.getElementsByClassName('QuantityValue')[i].innerText = updateMais
            })
            menos.addEventListener('click', () => {
                let updateMenos = Number(update[i].innerText)
                updateMenos--
                return document.getElementsByClassName('QuantityValue')[i].innerText = updateMenos
            })
        
    }

    function addtoProductCart(event) {
        const button = event.target;
        const infos = button.parentElement;
        const nameProduct = infos.getElementsByClassName('nome')[0].innerText;
        const quantity = infos.querySelector('.adicionar span').innerText;
        const valueProduct = infos.querySelector('h2').innerText;
    
        let NewCartProducts = document.createElement('div');
        NewCartProducts.classList.add('product');
        const productCartName = document.getElementsByClassName('productNome');
    
        for (let i = 0; i < productCartName.length; i++) {
            if (productCartName[i].innerText === nameProduct) {
                productCartName[i].parentElement.getElementsByClassName('qtdPruduct')[0].value++;
                Updadetotal();
                alert('+1 item adicionado ao carrinho');
                return;
            }
        }
    
        let CartProductSession = `
            <p class="productNome">${nameProduct}</p>
            <input class="qtdPruduct" value="${quantity}" min="1" type="number">
            <p class="precoPruduct">${valueProduct}</p>
            <button class="remove">X</button>
        `;
        
        NewCartProducts.innerHTML = CartProductSession;
        Cart.push({ CartProductSession });
    
        // Armazenando no session storage
        sessionStorage.setItem('NewProduct', JSON.stringify(Cart));
    
        const addAtributted = document.querySelector('.produtos');
        addAtributted.append(NewCartProducts);
        removeToCart()
        Updadetotal();
        BlurUpdate();
        alert('item adicionado ao carrinho');
    }


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

for(let i = 0;i < addtocart.length;i++){
    addtocart[i].addEventListener('click', addtoProductCart)
} 

function BlurUpdate(){
    const blurUpdate = document.getElementsByClassName('qtdPruduct')

for (let i = 0; i < blurUpdate.length; i++) {
    blurUpdate[i].addEventListener('change', Updadetotal)
    
}
}

function removeToCart(){
    for (let i = 0; i < removeProducts.length; i++) {
        removeProducts[i].addEventListener('click', (event) => {
            event.target.parentElement.remove()
            window.sessionStorage.removeItem('NewProduct')
            Updadetotal()
        })
    }    
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
    HeaderProduct.style.backgroundColor = 'rgba(233, 231, 231, 0.432)';
    open.style.backgroundColor = 'rgba(233, 231, 231, 0.432)';
    content.style.backgroundColor = 'rgba(233, 231, 231, 0.432)';
    
})

open.addEventListener('click', () => {
    popup.showModal()
    body.style.backgroundColor = ' rgb(133, 133, 133)';
    menu.style.backgroundColor = ' rgb(133, 133, 133)';
    HeaderProduct.style.backgroundColor = 'rgb(133, 133, 133)';
    open.style.backgroundColor = 'rgb(133, 133, 133)';
    content.style.backgroundColor = 'rgb(133, 133, 133)';
    Updadetotal()
})

const img1 = "/imgs/Camisa manga longa.jpeg"/* width="52.2%" */ 
const img2 = "/imgs/camisa manga longa2.jpeg" /* width="15%" */
const img3 = "/imgs/Camisa manga longa.jpeg" /* width="19.3%" */
const img4 = "/imgs/camisa manha longa3.jpeg" /* width="17.1%" */

function TrocaImg(img){
    let srcThis = img.getAttribute('src')
   document.querySelector('.img1').setAttribute('src',srcThis)
   if(srcThis === img2){
    content.style.height = '130vh';
   }
   if(srcThis === img4){
    content.style.height = '120vh';
   }
   if(srcThis === img1){
    content.style.height = '112vh';
   }
}

let addAtributted = document.querySelector('.produtos');
let ProductAdd = JSON.parse(window.sessionStorage.getItem('NewProduct'));

if (ProductAdd) {
    ProductAdd.forEach(item => {
        let ProductsBefore = document.createElement('div');
        ProductsBefore.classList.add('product');
        ProductsBefore.innerHTML = item.CartProductSession; // Use a string correta
        addAtributted.append(ProductsBefore);
    });
    removeToCart()
}
