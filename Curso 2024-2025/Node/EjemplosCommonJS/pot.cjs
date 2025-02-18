/* Módulo que exporta la función potencia y la raíz cuadrada, empleando otra forma con exports */

function potencia(a, b) {
  return Math.pow(a, b);
}

function raiz(a) {
  return Math.sqrt(a);
}

exports.potencia = potencia; //Exportamos la función potencia
exports.raiz = raiz; //Exportamos las funciones potencia y raizCuadrada
