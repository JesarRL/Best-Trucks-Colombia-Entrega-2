const mongoose = require("mongoose");
const { type } = require("os");

const inventarioSchema = mongoose.Schema({
    marca: {
        type: String,
        required: true
    }, modelo: {
        type: String,
        required: true,
    }, year: {
        type: Number,
        required: true,
    }, combustible: {
        type: String,
        required: true,
    }, cilindrara: {
        type: Number,
        required: true,
    }, potencia: {
        type: Number,
        required: true,
    }, torque: {
        type: Number,
        required: true,
    }, valvulas: {
        type: Number,
        required: true,
    }, consumo_promedio: {
        type: Number,
        required: true,
    }, dimensiones: {
        type: String,
        required: true,
    }, precio: {
        type: Number,
        required: true,
    }
}, {
    timestamps: true,
    versionKey: false
})

module.exports = mongoose.model("Inventario", inventarioSchema)