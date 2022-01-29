let mongoose = require("mongoose")
const Schema = mongoose.Schema

const CreadorSchema = Schema({
    nombre: String,
    descripcion: String,
    sitio: String,
    correo: String,
    imagen: String,
    telefono: String,
    juegos: Array

})


module.exports = mongoose.model('creadores', CreadorSchema)