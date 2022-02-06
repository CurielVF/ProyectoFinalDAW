let mongoose = require("mongoose")
const Schema = mongoose.Schema

const JuegoSchema = Schema({
    nombre: String,
    creador: String,
    descripcion: String,
    clasificacion: String,
    imagen: String,
    categoria: String,
    comentarios: Array,
    _id: {
        type: mongoose.Schema.Types.ObjectId,
        index: true,
        required: true,
        auto: true,
    },
    creadorId: String
})


module.exports = mongoose.model('juegos', JuegoSchema)