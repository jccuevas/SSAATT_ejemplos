/* Es este archivo se encuentran las funciones que realizan las operaciones matemáticas
las cuales se han importado empleando CommonJS.*/
const suma = require("./suma.cjs"); //Se importa la función suma
const { multiplicar, dividir } = require("./mul.cjs"); //Se exportan las funciones multiplicar y dividir
const operaciones = require("./pot.cjs"); //Se importa la función potencia y raiz conjuntamente

console.log("Suma importada: ", suma(2, 3));
console.log("Multiplicación importada: ", multiplicar(2, 3));
console.log("División importada: ", dividir(2, 3));
console.log("Potencia importada: ", operaciones.potencia(2, 3));
console.log("Raíz importada: ", operaciones.raiz(2));
