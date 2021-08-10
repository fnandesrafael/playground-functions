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
  let numeroRepete = 0;

  for (let i = 0; i <= numerosArray.lenght; i += 1) {
    if (numerosArray[i] > maiorNumero) {
      maiorNumero = numerosArray[i];
    } else if (numerosArray[i] === maiorNumero) {
      numeroRepete += 1;
    }
  }
  return numeroRepete;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let distCat1 = Math.abs(mouse - cat1);
  let distCat2 = Math.abs(mouse - cat2);
  let string;
  if (distCat1 > distCat2) {
    string = 'Cat1';
  } else if (distCat2 > distCat1) {
    string = 'Cat2';
  } else if (distCat1 === distCat2) {
    string = 'os gatos trombam e o rato foge';
  }
  return string;
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
