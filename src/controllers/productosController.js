async function crearProducto(req, res) {
  const { nombre, precio } = req.body;

  if (!nombre || !precio) {
    return res.status(400).json({ mensaje: "Datos incompletos" });
  }

  return res.status(201).json({
    mensaje: "Producto creado",
    producto: { id: 1, nombre, precio }
  });
}

module.exports = { crearProducto };