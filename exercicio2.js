// Desenvolva um algoritmo que recebe um número e retorna todos os números primos até esse número. 
//      Exemplo: 20 = [2, 3, 5, 7, 11, 13, 17, 19]

function primeNum(numPri){
    let numArray = []
    for (let i=0; i<= numPri; i++){
        if(isPrimeNum(i)){
            numArray.push(i)
        }
    }
    return numArray;
}
function isPrimeNum(numTest){
    for(let i = 2; i < numTest; i++){
        if( numTest % i === 0){
            return false;

        }

    }
    return numTest>1;
}


console.log(primeNum(45))



