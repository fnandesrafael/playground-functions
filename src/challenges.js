// Desafio 1
function compareTrue(x, y) {
  return x && y;
}

// Desafio 2
function calcArea(base, height) {
  let areaTriangulo = (base * height) / 2;
  return areaTriangulo;
}

// Desafio 3
function splitSentence(frase) {
  return frase.split(' ');
}

// Desafio 4
function concatName(arrayDeStrings) {
  let ultimoItem = arrayDeStrings.pop();
  let primeiroItem = arrayDeStrings.shift();
  return `${ultimoItem}, ${primeiroItem}`;
}

// Desafio 5
function footballPoints(wins, ties) {
  let winPoints = wins * 3;
  let tiePoints = ties * 1;
  let totalPoints = winPoints + tiePoints;
  return totalPoints;
}

// Desafio 6
function highestCount(numerosArray) {
  let maiorNumero = numerosArray[0];
  let numeroRepete;

  for (let i = 0; i <= numerosArray.lenght; i += 1) {
    if (numerosArray[i] > maiorNumero) {
      maiorNumero = numerosArray[i];
    }
    if (numerosArray[i] === maiorNumero) {
      numeroRepete += 1;
    }
  }
  return numeroRepete;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  if (mouse + cat1 < mouse + cat2) {
    return 'cat1';
  }
  if (mouse + cat2 < mouse + cat1) {
    return 'cat2';
  }
  if (mouse + cat1 === mouse + cat2) {
    return 'os gatos trombam e o rato foge';
  }
}

// Desafio 8
function fizzBuzz() {
  // seu código aqui
}

// Desafio 9
function encode() {
  // seu código aqui
}
function decode() {
  // seu código aqui
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
};
