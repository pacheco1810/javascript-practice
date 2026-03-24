
function pyramid(caracter, filas, invertida) {
  let resultado = "\n";

  for (let i = 1; i <= filas; i++) {

    let nivel = invertida ? filas - i + 1 : i;

    resultado += " ".repeat(filas - nivel);
    resultado += caracter.repeat(2 * nivel - 1);

    if (i < filas) {
      resultado += "\n";
    }
  }

  resultado += "\n";
  return resultado;
}

console.log(pyramid("p", 5, true)); 

module.exports = {
  pyramid
};