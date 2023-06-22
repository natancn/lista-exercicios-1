
function fibas(soma){
    let numAntes = 0
    let numProx = 1
    let numFi = soma

    for(let i = 2; i <= soma; i++){
        numFi= numAntes + numProx
        numAntes = numProx
        numProx = numFi
    }
    return numFi
}
console.log(fibas(4))


function fibonacci(num) {
    if(num < 2) {
        return num
    }

    return fibonacci(num - 1) + fibonacci(num - 2) 
}
console.log(fibonacci(8))