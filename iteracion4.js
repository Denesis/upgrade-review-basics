// Crea una función llamada findArrayIndex que reciba como parametros un array de textos y un texto y devuelve la posición del
// array cuando el valor del array sea igual al valor del texto que enviaste como parametro. Haz varios ejemplos y compruebalos.

const cositas = ["Caracol", "Mosquito", "Salamandra", "Ajolote"];
const palabra = prompt("Que buscas?");

function findArrayIndex(array, text) {
  for (const cosas in array) {
    if (array[cosas] === text) {
      return `${text} se encuentra en la posicion ${cosas}`;
    }
    return `${text} no existe`;
  }
}
const wordPosition = findArrayIndex(cositas, palabra);
console.log(wordPosition);
