const { calcularStockDisponible } = require("../src/utils/stock");

test("Debe calcular el stock disponible correctamente", () => {
  expect(calcularStockDisponible(50, 10)).toBe(40);
});

test("Debe lanzar error si los valores son negativos", () => {
  expect(() => calcularStockDisponible(-1, 5)).toThrow();
});