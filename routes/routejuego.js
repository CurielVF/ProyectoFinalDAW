const express = require('express');
const router = express();
const Juego = require('../model/juego');
let verify = require('../middleware/verifyAccess')
const Creador = require('../model/creador');

router.get("/:id",verify, async (req, res) => {
    let juegos = await Juego.find()

    for (let i = 0; i < juegos.length; i++) {

        if (juegos[i]._id == req.params.id) {
            console.log(juegos[i])
            res.render("pages/juego", juegos[i])
        }
    }
})

router.post("/api/comentario",verify, async (req, res) => {
    let idJuego = req.body.idJuego
    let idUsuario = req.userId

    let juego = await Juego.findById(idJuego)
    let creador = await Creador.findById(idUsuario)
    let newComentario = {
        creadorId: idUsuario,
        nombreCreador: creador.nombre,
        comentario: req.body.comentario,
        calificacion: parseInt(req.body.calificacion)
    }
    let comentarios = []
    let calificacion = newComentario.calificacion
    for(let i=0;i<juego.comentarios.length;i++){
        comentarios.push(juego.comentarios[i])
        calificacion += juego.comentarios[i].calificacion
    }
    calificacion /= (juego.comentarios.length+1)
    comentarios.push(newComentario)
    console.log(comentarios)
    juego.comentarios = comentarios
    juego.calificacion = calificacion
    await juego.save()
})

module.exports = router;