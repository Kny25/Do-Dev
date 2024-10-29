
const input1 = document.querySelector('.form1')
const input2 = document.querySelector('.form2')
const input3 = document.querySelector('.form3')
const alerta1 = document.querySelector('.alert1')
const alerta2 = document.querySelector('.alert2')
const alerta3 = document.querySelector('.alert3')

input1.addEventListener('focus', ()=>{
    input1.style.border = '1px solid #204bdb';
    input2.style.border = 'none';
    alerta2.style.display = 'none';
    input2.style.marginBottom = '2vh';
   
    input3.style.border = '1px solid #204bdb';
    input3.style.border = 'none';
    alerta3.style.display = 'none';
    input3.style.marginBottom = '2vh';
    
    input1.style.border = '1px solid #204bdb';
    alerta1.style.display = 'none';
    input1.style.marginBottom = '2vh';
})
input1.addEventListener('blur', ()=>{
  window.localStorage.setItem('e-mail', input1.value)
  let verificacao = window.localStorage.getItem('e-mail')
   let surch = 0
   Array.from(verificacao).forEach(string => {
       if(string === '@'){
        surch = 1
       }
    })
    if(surch === 0){
        input1.style.border = '1px solid rgb(236, 103, 103)';
        input1.style.marginBottom = '0';
        alerta1.style.display = 'inline-block';
    }else{
        input1.style.marginBottom = '2vh';
        input1.style.border = 'none';
        alerta1.style.display = 'none';
    }
})
input2.addEventListener('focus', ()=>{
    input2.style.border = '1px solid #204bdb';
    alerta2.style.display = 'none';
    input2.style.marginBottom = '2vh';
   
    input3.style.border = '1px solid #204bdb';
    input3.style.border = 'none';
    alerta3.style.display = 'none';
    input3.style.marginBottom = '2vh';
    
    input1.style.border = '1px solid #204bdb';
    input1.style.border = 'none';
    alerta1.style.display = 'none';
    input1.style.marginBottom = '2vh';
})

input2.addEventListener('blur', ()=>{
    input2.style.border = 'none';
    window.localStorage.setItem('senha', input2.value)
    let veri = window.localStorage.getItem('senha')
   let pesquisa = 0
   Array.from(veri).forEach(string => {
       if(string.length >= 8){
        pesquisa = 1
       }
    })
    if(pesquisa === 0){
        input2.style.border = '1px solid rgb(236, 103, 103)';
        input2.style.marginBottom = '0';
        alerta2.style.display = 'inline-block';
    }else{
        input2.style.marginBottom = '2vh';
        input2.style.border = 'none';
        alerta2.style.display = 'none';
    }
})
let veri = window.localStorage.getItem('senha')
input3.addEventListener('focus', ()=>{
    input3.style.border = '1px solid #204bdb';
    input2.style.border = 'none';
    alerta2.style.display = 'none';
    input2.style.marginBottom = '2vh';
    input1.style.border = 'none';
    alerta1.style.display = 'none';
    input1.style.marginBottom = '2vh';
})
input3.addEventListener('blur', ()=>{
    input3.style.border = 'none';
    window.localStorage.setItem('confirmação de senha', input3.value)
    let verificacao =  window.localStorage.getItem('confirmação de senha')
    let surch = 0
    Array.from(verificacao).forEach(string => {
        if(string === veri){
         surch = 1
        }
     })
     if(surch === 0){
         input3.style.border = '1px solid rgb(236, 103, 103)';
         input3.style.marginBottom = '0';
         alerta3.style.display = 'inline-block';
     }else{
         input3.style.marginBottom = '2vh';
         input3.style.border = 'none';
         alerta3.style.display = 'none';
     }
})
