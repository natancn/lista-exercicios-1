
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
console.log(fibas())