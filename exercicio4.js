

function createTree(numHeight){
    let tree = ''
    let maxAsterisk =  Math.round(numHeight * 2 - 1)
    let asterisk = "*"
    for(let i = 1; i <= maxAsterisk; i += 2){
        let camadaString = ''
        let espacamento = " "
    
        if(i === 1) {
            camadaString = '*'
        } 
        else {
            for(let j = 1; j <= i; j++){
                camadaString = camadaString + asterisk 
            }
        }
        
    
        tree += camadaString.padStart(maxAsterisk + (camadaString.length)/2, espacamento) + "\n"

    }
    return tree
}
console.log(createTree(5))
