/**Build a function mergeSort that takes in an array and returns a sorted array, 
 * using a recursive merge sort methodology. 
 * An input of [3, 2, 1, 13, 8, 5, 0, 1] should return [0, 1, 1, 2, 3, 5, 8, 13] 
 * And an input of [105, 79, 100, 110] should return [79, 100, 105, 110].
 * 
 * Pasos (Método divide y vencerás):
 * 1. Dividimos el array a la mitad
 * 2. Ordenamos cada subarray (aplicando recursividad)
 * 3. Devolvemos solución final del array ordenado combinando los subarrays
 *  */

function mergeSort(arr) {
  // Caso base: si el array es de tamano 1 devolvemos el mismo
  if (arr.length <= 1) {
    return arr;
  }
  // Dividimos el array en dos mitades
  const middle = Math.floor(arr.length / 2);
  const left = arr.slice(0, middle);
  const right = arr.slice(middle);
  
  // Ordenamos ambas mitades recursivamente y las combinamos
  return merge( mergeSort(left), mergeSort(right)); 
}

// Función Auxiliar merge
function merge(left, right) {
  let result = [];
  let leftIndex = 0; 0 
  let rightIndex = 0;

  // Mientras ambos subarrays tengan elementos, comparamos los primeros elementos de cada lista
  while (leftIndex < left.length && rightIndex < right.length) {

    if (left[leftIndex] < right[rightIndex]) {
      result.push(left[leftIndex]);
      leftIndex++ // Mover el índice de left
    } else {
      result.push(right[rightIndex]);
      rightIndex++ // Mover el índice de right 
    }
  }

  // Agregar los elementos restantes de left (si los hay)
  while (leftIndex < left.length) {
    result.push(left[leftIndex]);
    leftIndex++;
  }

  // Misma operación pero con right
  while (rightIndex < right.length) {
    result.push(right[rightIndex]);
    rightIndex++;
  }

  return result;
}

console.log(mergeSort([56, 878, 87, 1, 10, 32, 9, 64]));