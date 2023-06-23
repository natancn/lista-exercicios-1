const fs = require('fs');

function espiralMatrix(voltas) {

    const maxVolta = Math.round(voltas * 2 - 1);
    const maxNum = maxVolta**2;
    const halfVolta = Math.floor(maxVolta / 2);
    // 1 - passo montar o array MULTIDIMENSIONAL
    const arr = []
    let x = halfVolta
    let y = halfVolta
    let mov = ""
    
    
    // 2 - passo formatar a matriz no formato MULTIDIMENSIONAL
    for (let i = 0; i < maxVolta; i++) {
        const arrayLinhas = [];
      
        for (let j = 0; j < maxVolta; j++) {
          arrayLinhas.push(0);
        }
      
        arr.push(arrayLinhas);
    }
    // OUTRA ETAPA :)
    //dir e cima 1 + 3 + 5
    //esq e baixo 2 + 4 + 6
    let maxDir = 1
    let maxCima = 1
    let maxEsq = 2
    let maxBaix = 2
    
    function padNum(num, max) {
        return String(num).padStart(String(max).length, '0')
    }
    
    for(let s = 1; s <= maxNum; s++){
        if (s === 1) {
            arr[y][x] = padNum(s, maxNum)
            mov = "direita"
            continue
        }
       
        
        if (mov === "direita") {
            for(let movDir = 1; movDir <= maxDir; movDir++) {
                if(x !== arr.length - 1) {
                    x += 1
                }
    
                arr[y][x] = padNum(s, maxNum)
    
                if(maxDir !== 1 && maxDir !== movDir && s !== maxNum) {
                    s += 1
                }
            }
    
            mov = "cima"
            maxDir += 2;
            continue
        } 
        if(mov === "cima") {
            for(let movCima = 1; movCima <= maxCima; movCima++) {
                if(y !== 0) {
                    y -= 1
                }
    
                arr[y][x] = padNum(s, maxNum)
    
                if(maxCima !== 1 && maxCima !== movCima) {
                    s += 1
                }
            }
            maxCima +=2;
            mov = "esquerda"  
            continue
        }
        if(mov === "esquerda") {
            for(let movEsq = 1; movEsq <= maxEsq; movEsq++){
                if(x !== 0) {
                    x -= 1 
                }
                
                arr[y][x] = padNum(s, maxNum)
                
                if(maxEsq !== movEsq){
                    s+=1
                }
            }
            maxEsq += 2;
            mov = "baixo"
            continue
    
        }
        if(mov === "baixo"){
            for(let movBaix = 1; movBaix <= maxBaix ; movBaix ++){
                if(y !== arr.length - 1) {
                    y += 1
                }
                
                arr[y][x] = padNum(s, maxNum)
    
                if(maxBaix !== movBaix) {
                    s++
                }
            }   
    
            maxBaix += 2;
            mov = "direita"
            continue
        }
    }
    return arr.map((row) => {
        return row.join(' ');
    }).join('\n')
}

const espiral = espiralMatrix(38);

fs.writeFileSync(__dirname + 'matriz_espiral.html', espiral.replace(/^/gm, '<pre>').replace(/$/gm, '</pre>'));