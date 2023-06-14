//Desenvolva um algoritmo que recebe uma lista de números e os ordene ordem crescente.
//Exemplo: ordene([6,5,4,3,2,1]) = [1,2,3,4,5,6]

function orderingNum(arrayPedro){
    let arrayLeng = arrayPedro.length
    let correctArray = []
    for(let i=0; i < arrayLeng; i++){
        let numArray = Math.max(...arrayPedro)
        let numArrayOrder = arrayPedro.indexOf(numArray)
        arrayPedro.splice(numArrayOrder,1)
        correctArray.unshift(numArray)
    }

    return correctArray

}

console.log(orderingNum([2,3,6,5,8]))