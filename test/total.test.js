const { calcularTotalCompra } = require("../src/utils/totals");

test("Debe calcular el total de una compra", () => {
  expect(calcularTotalCompra(10, 5)).toBe(50);
});

test("Debe lanzar error con valores inválidos", () => {
  expect(() => calcularTotalCompra(-10, 1)).toThrow();
});