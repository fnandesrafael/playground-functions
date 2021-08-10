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

  for (let i = 0; i < numerosArray.length; i += 1) {
    if (numerosArray[i] > maiorNumero) {
      maiorNumero = numerosArray[i];
      numeroRepete = 0;
    }
    if (numerosArray[i] === maiorNumero) {
      numeroRepete += 1;
    }
  }
  return numeroRepete;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  if (Math.abs(mouse - cat1) < Math.abs(mouse - cat2)) {
    return 'cat1';
  }
  if (Math.abs(mouse - cat2) < Math.abs(mouse - cat1)) {
    return 'cat2';
  }
  if (Math.abs(mouse - cat1) === Math.abs(mouse - cat2)) {
    return 'os gatos trombam e o rato foge';
  }
}

// Desafio 8
function fizzBuzz(arrayFizzBuzz) {
  for (let i = 0; i < arrayFizzBuzz.length; i += 1) {
    if (arrayFizzBuzz[i] % 5 === 0 && arrayFizzBuzz[i] % 3 === 0) {
      arrayFizzBuzz[i] = 'fizzBuzz';
    } else if (arrayFizzBuzz % 5 === 0) {
      arrayFizzBuzz[i] = 'buzz';
    } else if (arrayFizzBuzz[i] % 3 === 0) {
      arrayFizzBuzz[i] = 'fizz';
    } else {
      arrayFizzBuzz[i] = 'bug!';
    }
  }
  return arrayFizzBuzz;
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
