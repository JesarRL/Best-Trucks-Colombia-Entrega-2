const express = require("express");
const router = express.Router();
const inventarioController = require("../controllers/inventario.controller")


router.post("/crear-ingreso", inventarioController.crearIngreso)
router.get("/listar-inventario", inventarioController.listarInventario)
router.get("/buscar_vehiculo/:busqueda", inventarioController.buscarInventario)
router.delete("/borrar-ingreso/:id", inventarioController.borrarIngreso)
router.put("/actualizar-ingreso/:id", inventarioController.actualizarInventario)










module.exports = router;