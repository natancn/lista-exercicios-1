const voltas = 3;
const maxVolta = voltas + 2;
const arr = [];
let x = 2;
let y = 2;
let mov = "direita";

// Passo 1: Montar o array multidimensional
for (let i = 0; i < maxVolta; i++) {
  const arrayLinhas = [];

  for (let j = 0; j < maxVolta; j++) {
    arrayLinhas.push(0);
  }

  arr.push(arrayLinhas);
}

// Passo 2: Preencher a matriz com os valores corretos
let movDir = 0;
let movCima = 0;
let movEsq = 0;
let movBaix = 0;

for (let s = 1; s <= 25; s++) {
  if (s === 1) {
    arr[y][x] = s;
    mov = "direita";
    continue;
  }

  if (mov === "direita") {
    for (movDir; movDir <= movBaix; movDir++) {
      x = x + 1;
      arr[y][x] = movDir;
    }
    mov = "cima";
    continue;
  }

  if (mov === "cima") {
    for (movCima; movCima <= movEsq; movCima++) {
      y = y - 1;
      arr[y][x] = movCima;
    }
    mov = "esquerda";
    continue;
  }

  if (mov === "esquerda") {
    for (movEsq; movEsq <= movDir; movEsq++) {
      x = x - 1;
      arr[y][x] = movEsq;
    }
    mov = "baixo";
    continue;
  }

  if (mov === "baixo") {
    for (movBaix; movBaix <= movCima; movBaix++) {
      y = y + 1;
      arr[y][x] = movBaix;
    }
    mov = "direita";
    continue;
  }
}

console.log(arr);
