const inscricoes = document.querySelector('.Inscricoes')
const live = document.getElementsByClassName('fa-solid')
const Humburguer = document.querySelector('.menuHumburguer')
const NavBar = document.querySelector('.navBar')
const corpo = document.querySelector('.content')

Chanels()
Humburguer.addEventListener('click', (event) => {
    NavBar.style.left = '0';
    corpo.style.width = '85%'
    corpo.style.marginLeft = '15%';
    event.stopPropagation();
});

corpo.addEventListener('click', () => {
    NavBar.style.left = '-15%';
    corpo.style.width = '100%';
    corpo.style.marginLeft = '0';
});





async function Chanels() {
    await fetch('https://apigenerator.dronahq.com/api/hk1bDkO0/Canais', {
        method: 'GET',
        headers: {
            'content-type': 'application/json'
        }
    }).then(res => res.json()).then(data => {
        data.forEach(chanel => {
            let chanelEach = document.createElement('div')
            if (chanel.On) {
                chanelEach.innerHTML =
                    `
            <img src="${chanel.src}">
            <p>${chanel.name}
            </p>
            <i class="fa-solid fa-tower-broadcast" style="color: #940707;"></i>
            `
            } else if (chanel.NewPost) {
                chanelEach.innerHTML =
                    `
            <img src="${chanel.src}">
            <p>${chanel.name}
            </p>
             <i class="fa-solid fa-circle-exclamation"></i>
            `
            } else {
                chanelEach.innerHTML =
                    `
            <img src="${chanel.src}">
            <p>${chanel.name}
            </p>
            `
            }
            chanelEach.classList.add('canais')
            inscricoes.append(chanelEach)
        });
    }).catch(err => {
        console.error('Erro ao buscar os canais:', err);
    });
}