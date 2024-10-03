let numeros = [2, 3, 13, 10, 7, 12, 11, 1, 9]
let entrada = 25

function surchValue(array, value) {
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length; j++) {
                if(array[j] + array[i] === value){
                    let indexj = array.indexOf(array[j])
                    let indexi = array.indexOf(array[i])
                    return console.log(`[ ${indexi}, ${indexj} ]`)
                } else{
                    console.log('não encontado');
                }
        }
    }
}
surchValue(numeros, entrada)