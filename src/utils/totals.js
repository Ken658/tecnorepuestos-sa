function calcularTotalCompra(precioUnitario, cantidad) {
  if (precioUnitario < 0 || cantidad < 0) {
    throw new Error("Valores inválidos");
  }
  return precioUnitario * cantidad;
}

module.exports = { calcularTotalCompra };