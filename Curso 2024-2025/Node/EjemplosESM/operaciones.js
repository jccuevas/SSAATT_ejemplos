/* Es este archivo se encuentran las funciones que realizan las operaciones matemáticas
las cuales se han importado empleando Emac Script Modules.*/
import { suma } from "./suma.mjs"; //Se importa la función suma
import restar from "./resta.mjs"; //Como se exporta por defecto, incluso podemos cambiar el nombre.
/* Queremos importar los módulos que calculan el área del círculo y del triángulo pero ambas funciones
se llaman igual: area. Podemos usar import - as */
import { area as areaCirculo } from "./areaCirculo.mjs";
import { area as areaTriangulo } from "./areaTriangulo.mjs";

console.log("Suma importada: ", suma(2, 3));
console.log("Resta importada: ", restar(2, 3));

console.log("Área del círculo: ", areaCirculo(3));
console.log("Área del triángulo: ", areaTriangulo(3, 4));
