const voltas = 3
const maxVolta = voltas + 2;
// 1 - passo montar o array MULTIDIMENSIONAL
const arr = []
let x = 2
let y = 2
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

for(let s = 1; s <= 25; s++){
    if (s === 1) {
        arr[y][x] = s
        mov = "direita"
        continue
    }
   
    
    if (mov === "direita") {
        for(let movDir = 0; movDir < maxDir; movDir++) {
            if(x !== arr.length - 1) {
                x += 1
            }

            arr[y][x] = s

            if(maxDir !== 0) {
                s++
            }
        }

        mov = "cima"
        maxDir += 2;
        continue
    } 
    if(mov === "cima") {
        for(let movCima = 0; movCima < maxCima; movCima++) {
            // console.log('y', y);
            if(y !== 0) {
                y -= 1
            }
            // console.log('y', y);

            arr[y][x] = s

            if(maxCima !== 0) {
                s++
               
            }
        }
        maxCima += 1
        mov = "esquerda"  
        continue
    }
    if(mov === "esquerda") {
        for(let movEsq = 0; movEsq < maxEsq; movEsq++){
            if(x !== 0) {
                x -= 1 
            }
            
            arr[y][x] = s
            
            if(maxEsq !== 0){
                s++
            }
        }
        maxBaix += 2
        mov = "baixo"
        continue

    }
    if(mov === "baixo"){
        for(let movBaix = 0; movBaix < maxBaix ; movBaix ++){
            if(y !== arr.length - 1) {
                y += 1
            }
            
            arr[y][x] = s
            
            if(maxBaix !== 0) {
                s++
            }
        }   
        maxBaix += 2
        mov = "direita"
        continue
    }

}

console.log(arr);