async function Get() {
  let eu = await fetch(`https://apigenerator.dronahq.com/api/T6znF0y1/teste`)
        .then((res) => {
            if (res.ok) {
                return res.json()
            } else {
                alert("error")
            }
        }
        )
        .then((data) => console.log(data))
}

function GetById(id) {
    fetch(`https://apigenerator.dronahq.com/api/T6znF0y1/teste/${id}`)
        .then((res) => {
            if (res.ok) {
                return res.json()
            } else {
                alert("error")
            }
        }
        )
        .then((data) => console.log(data.name))
}


async function PostData(nome, senha) {
    await fetch(`https://apigenerator.dronahq.com/api/T6znF0y1/teste`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify({
            name: nome,
            key: senha
        })
    })
        .then(res => res.json())
        .then((data) => console.log(data))
}

async function PutData(id) {
    await fetch(`https://apigenerator.dronahq.com/api/T6znF0y1/teste/${id}`, {
        method: 'PUT',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify({
            name: "Fabiana",
            age: 40,
            adress: {
                Rua: "paquita",
                Number: 223,
                bairro: "recreio são jorge"
            }
        })
    })
        .then(res => res.json())
        .then((data) => console.log(data))
}

async function Delete(id) {
    await fetch(`https://apigenerator.dronahq.com/api/T6znF0y1/teste/${id}`, {
        method: 'DELETE',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify({
        })
    })
        .then(res => res.json())
        .then((data) => console.log(data))
}


module.exports = { Get, GetById, PutData, PostData, Delete }