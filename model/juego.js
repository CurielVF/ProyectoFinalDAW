let mongoose = require("mongoose")
const Schema = mongoose.Schema

const JuegoSchema = Schema({
    nombre: String,
    creador: String,
    descripcion: String,
    clasificacion: String,
    imagen: String,
    categoria: String,
    comentarios: String

})


module.exports = mongoose.model('juegos', JuegoSchema)