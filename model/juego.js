let mongoose = require("mongoose")
const Schema = mongoose.Schema

const JuegoSchema = Schema({
    nombre: String,
    creador: String,
    descripcion: String,
    clasificacion: String,
    imagen: String,
    categoria: String,
    fecha: Date,
    comentarios: Array,
    _id: {
        type: mongoose.Schema.Types.ObjectId,
        index: true,
        required: true,
        auto: true,
    },
    creadorId: String,
    descarga:String,
    calificacion:{
        type: Number,
        default:0
    }
})


module.exports = mongoose.model('juegos', JuegoSchema)