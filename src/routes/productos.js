const express = require("express");
const { crearProducto } = require("../controllers/productosController");
const router = express.Router();

router.post("/", crearProducto);

module.exports = router;