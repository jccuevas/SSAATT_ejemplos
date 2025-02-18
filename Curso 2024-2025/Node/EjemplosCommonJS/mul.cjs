/* Este módulo exporta dos funciones, una para multiplicar y otra para dividir empleando CommonJS.*/
function multiplicar(a, b) {
  return a * b;
}

function dividir(a, b) {
  return a / b;
}

module.exports = { multiplicar, dividir }; //Exportamos las funciones multiplicar y dividir
