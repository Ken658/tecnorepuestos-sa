const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

// Aquí luego se agregan las rutas
// app.use("/api/productos", require("./routes/productos.routes"));

module.exports = app;
