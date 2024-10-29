const input2 = document.querySelector('.form2')
const input1 = document.querySelector('.form1')
const enviar = document.querySelector('.register')
const close =  document.querySelector('.error button')

fetch("https://apigenerator.dronahq.com/api/dSIjfcNc/login", {
        method: 'GET',
        headers: {
            'content-Type': 'application/json'
        },
    }).then(res => res.json()).then(data => {
      if(data){
        data.map(item => {
            enviar.addEventListener('click', () => {
                if(item.email === input1.value){
                    if(item.password === input2.value){
                        alert('sucesso')
                        input2.value = ''
                        input1.value = ''
                    }else {
                        alert('senha incorreta')
                    }
                }
            })     
        });  
      }else {
        document.querySelector('.error').style.display = 'block'      
    }
    })


close.addEventListener('click', () => {
    document.querySelector('.error').style.display = 'none';
})