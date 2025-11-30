function calcularStockDisponible(stockActual, stockMinimo) {
  if (stockActual < 0 || stockMinimo < 0) {
    throw new Error("Los valores no pueden ser negativos");
  }
  return stockActual - stockMinimo;
}

module.exports = { calcularStockDisponible };