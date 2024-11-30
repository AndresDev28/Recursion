const prompt = require('prompt-sync')();

// Fibonacci usando iteración

function fibs(n) {
  // Inicializamos la matriz
  let matrix = [0, 1];
  // Si n es igual a 0 devolvemos la matriz vacía
  if (n === 0) {
    matrix = [];
  }
  // Si n es igual a 1 el valor de la matriz es igual a 0
  if (n === 1) {
    matrix = [0];
  }
  // Iteramos desde el 3er valor ya que tenemos los 2 primeros
  for (let i = 2; i < n; i++) {
    // Obtenemos el siguiente valor de la matriz
    let nextNumber = matrix[i - 1] + matrix[i - 2];
    // Agregamos el valor a la matriz y actualizamos
    matrix.push(nextNumber);
  }
  // Devolvemos la matriz terminada
  return matrix
}


// Fibonacci usando recursión

function fibsRec(n) {
  // Caso base: si n es 0, devolver una matriz vacía
  if (n === 0) {
    return [];
  }
  
  // Caso base: si n es 1, devolver [0]
  if (n === 1) {
    return [0];
  }
  
  // Caso base: si n es 2, devolver [0, 1]
  if (n === 2) {
    return [0, 1];
  }
  
  // Caso recursivo: obtener la matriz hasta n - 1
  let previousMatrix = fibsRec(n - 1);
  
  // Calcular el siguiente número en la secuencia
  let nextNumber = previousMatrix[previousMatrix.length - 1] + previousMatrix[previousMatrix.length - 2];
  
  // Agregar el nuevo número a la matriz
  previousMatrix.push(nextNumber);
  
  // Devolver la matriz completa
  return previousMatrix;
}

const input = prompt('Enter a number: ');
const n = parseInt(input, 10);

console.log('Fibonacci iterativo:');
console.log(fibs(n));
console.log('Fibonacci recursivo:')
console.log(fibsRec(n));

