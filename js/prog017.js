/**************************************
 *          Arrays foreach            *
 **************************************/

// Foreach
// Recorre un array y ejecuta una funcion

let animales = ["perro", "gato", "pez", "rana"];
animales.forEach((animal) => console.log(animal));

function retorna_valores(valor, indice) {
  console.log(`${indice} = ${valor}`);
}

animales.forEach(retorna_valores);

/**************************************
 *             Arrays Map             *
 **************************************/

const numeros = [1, 2, 3, 4, 5];

const doble = numeros.map((numero) => numero * 2);

console.log(doble);

const triple = numeros.map(function (valor) {
  return valor * 3;
});
console.log(triple);

const raiz = doble.map((valor) => Math.sqrt(valor));
console.log(raiz);

const elementos_indices = numeros.map((valor, indice) => {
  return `${indice} = ${valor}`;
});
console.log(elementos_indices);