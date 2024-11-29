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

console.log('Fibo de 8')
console.log(fibs(8));
console.log('Fibo de 10')
console.log(fibs(10));
console.log('Fibo de 12')
console.log(fibs(12));

// Fibonacci usando recursión

function fibsRecur(n) {
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
  // Si n es igual a 2 devolver [0, 1]
  if (n === 2) {
    matrix = [0, 1];
  }

  // Caso recursivo: obtener la matriz hasta n -1
  let previosMatrix =  fibsRecur(n - 1);
  // Calcular el siguiente numero de la seguencia
  let nextNumber = previosMatrix[previosMatrix.length - 1] + previosMatrix[previosMatrix.length - 2];
  // Agregar el nuevo número a la matriz
  previosMatrix.push(nextNumber);
  // Devolver la matriz completa
  matrix.push(previosMatrix);
}

console.log('Fibonacci recursivo:')
console.log('Fibo de 8')
console.log(fibs(8));
console.log('Fibo de 10')
console.log(fibs(10));
console.log('Fibo de 12')
console.log(fibs(12));