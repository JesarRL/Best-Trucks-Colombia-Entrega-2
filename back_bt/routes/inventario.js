const express = require("express")
const router = express.Router()
const inventariadoController = require("../controllers/inventariadoController")

//router.post("/", () => {
// console.log("creando producto inventario");
//})

router.post("/", inventariadoController.crearProducto)
router.get("/", inventariadoController.obtenerProductos)

module.exports = router;