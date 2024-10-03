const button = document.querySelector("button")
const modal = document.querySelector("dialog")
const nao = document.querySelector("#nao")
const sim = document.querySelector("#sim")
const url = "https://wa.me/5513978149863?text=Eu%2C%20Lice%20amo%20meu%20melhor%20amigo"

function openUrl(url) {
    const win = window.open(url, 'blank')
    win.focus()
}

button.onclick = () => {
    modal.showModal()
}
sim.addEventListener('click', () => {
    openUrl(url)
})

nao.onclick = () => {
    modal.close()
}
