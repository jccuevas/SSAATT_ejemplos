/*Suma.js es un módulo que exporta una función que suma dos números	con un módulo CommonJS.
 * @module suma
 * @param {number} a - Primer número a sumar
 * @param {number} b - Segundo número a sumar
 * @returns {number} - Suma de a y b
 */
function suma(a, b) {
  return a + b;
}

module.exports = suma; //Exportamos la función suma
//El fichero también se podría haber llamado index.js, ya que es el nombre por defecto que se busca al importar un módulo de un directorio.
