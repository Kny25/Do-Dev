const inputs = document.getElementsByClassName('form')
const enviar = document.querySelector('.register')
const close =  document.querySelector('.error button')
let phoneOrEmail = ''
let fullName = ''
let username = ''
let password = ''

        enviar.addEventListener('click', () => {
            if(inputs.length > 0 && inputs[0].value != ''){
                phoneOrEmail = inputs[0].value
                fullName = inputs[1].value
                username = inputs[2].value
                password = inputs[3].value
                console.log(phoneOrEmail, fullName, username, password)
        
                fetch("https://apigenerator.dronahq.com/api/dSIjfcNc/login", {
                    method: 'POST',
                    headers: {
                        'content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        'email': phoneOrEmail,
                        'full name': fullName,
                        'username': username,
                        'password': password
                    })
                }).then(res => res.json()).then(response=> {
                    if(!response.status === 404){
                        document.querySelector('.error').style.display = 'Block';
                    }
                })
            }else {
                document.querySelector('.error').style.display = 'Block';
            }
        })  


close.addEventListener('click', () => {
    document.querySelector('.error').style.display = 'none';
})