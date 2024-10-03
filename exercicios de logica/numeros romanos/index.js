function romanToInt(roman) {
    const romanNumerals = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    };
 let total = 0
 let prevValue = 0

 for(let i = roman.length - 1; i >= 0;i--){
    let value = romanNumerals[roman[i]]
    if(value < prevValue){
        total -= value
    }else {
        total += value
    }
    prevValue = value
    
}
return total;
}
// Exemplo de uso
console.log(romanToInt("MMXXI")); // Saída: 9
console.log(romanToInt("XIV")); // Saída: 14
console.log(romanToInt("MCMXCIV")); // Saída: 1994
