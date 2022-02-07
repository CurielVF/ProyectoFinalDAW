let mongoose = require("mongoose")
const Schema = mongoose.Schema
let bcrypt = require("bcrypt")

const CreadorSchema = Schema({
    nombre: String,
    descripcion: String,
    sitio: String,
    correo: String,
    imagen: String,
    telefono: String,
    juegos: Array,
    _id: {
        type: mongoose.Schema.Types.ObjectId,
        index: true,
        required: true,
        auto: true,
    },
    password: String
})

CreadorSchema.methods.encryptPassword = function(password){
    return bcrypt.hashSync(password,10)
}

CreadorSchema.methods.validatePassword = function(usserpassword){
    return bcrypt.compareSync(usserpassword,this.password)
}

module.exports = mongoose.model('creadores', CreadorSchema)