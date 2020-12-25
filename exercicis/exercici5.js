function dividir_o_no_dividir(numerador, denominador) {
    if(denominador == 0){
        return 'No puc dividir per 0'
    } else {
        return numerador / denominador
    }
}

console.log(dividir_o_no_dividir(6, 2)); // 3
console.log(dividir_o_no_dividir(1, 2)); // 0.5
console.log(dividir_o_no_dividir(3, 0)); // "No puc dividir per zero"