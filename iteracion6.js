// Crea una función llamada swap() que reciba un array y dos parametros que sean indices del array. La función deberá intercambiar la posición de los valores de los indices que hayamos
// enviado como parametro. Retorna el array resultante.

const names = ["Diego", "Denesis", "Daniel", "Miguel", "Oliver"];

function swap1(source, value1, value2) {
  for (const index in source) {
    if (source[index] === value1) {
      source.splice(index, 1, value2);
    } else if (source[index] === value2) {
      source.splice(index, 1, value1);
    }
  }
  return source;
}

const newOrder = swap1(names, "Diego", "Oliver");
console.log(newOrder);
