const Producto = require("../models/inventario.model")

exports.crearProducto = async (req, res) => {
    console.log(req.body);

    try {
        //variable principal
        let producto;

        //instancia de modelo del componente de la data a enviar
        producto = new Producto(req.body);
        // guardado asincrono
        await producto.save();
        // respuesta del documento creado
        res.send(producto);

    } catch (error) {
        console.log(error);
        res.status(500).send("Lo sentimos, ha habido un error.")
    }
}

exports.obtenerProductos = async (req, res) => {
    try {
        const productos = await Producto.find();
        res.json(productos);

    } catch (error) {
        console.log(error);
        res.status(500).send("Lo sentimos, ha habido un error.")
    }
}