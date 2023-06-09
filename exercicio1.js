

function factorialCalc(number1){
    let result = 0
    for(let i = number1 -1; i > 0; i-- ){
        result = (number1 * i) + result
    }
    return result
}
console.log(factorialCalc(4))