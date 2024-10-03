let nomeUsuario = prompt('digite seu nome')
let idade = parseInt(prompt('digite sua idade'))
console.log('maravilha ' + nomeUsuario + " iremos calcular seu imc ok ? só nos confirme algumas informações por favor...")
let altura = prompt('digite sua altura')
let peso = parseInt(prompt('digite seu peso'))
let anoDeNascimento = 2023 - idade;
let imcAoQuadrado = altura * altura
let imc = peso / imcAoQuadrado



console.log('Olá ' + nomeUsuario + ', você tem ' + idade + ' anos, nasceu em ' + anoDeNascimento +', tem ' + altura + ' de altura, pesa ' + peso + 'kg, seu imc é ' + imc + ' kg/m2')
