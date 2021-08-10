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
  let quantidadeNumeros = 0;

  for (let i = 0; i <= numerosArray.lenght; i += 1) {
    if (maiorNumero < numerosArray[i]) {
      maiorNumero = numerosArray[i];
    }
  }

  for (let i = 0; i <= numerosArray.lenght; i += 1) {
    if (maiorNumero === numerosArray[i]) {
      quantidadeNumeros += 1;
    }
  }
  return maiorNumero;
}

// Desafio 7
function catAndMouse() {
  // seu código aqui
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
