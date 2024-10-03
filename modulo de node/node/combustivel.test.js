const combustivel = require('./combustivel.js')

test('decobrir se é gasolina ou etanol e fazr o calculo de quntos km roda na distania inserida' , () => {
expect(combustivel.kmGasolina("100", "gasolina")).toBe(6)
});

test('decobrir se é gasolina ou etanol e fazr o calculo de quntos km roda na distania inserida' , () => {
expect(combustivel.kmEtanol("100", "etanol")).toBe(9)
});
