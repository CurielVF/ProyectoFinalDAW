const express = require('express');
const router = express();
const Juego = require('../model/juego');

router.get("/:id", async (req, res) => {
    let juegos = await Juego.find()

    for (let i = 0; i < juegos.length; i++) {

        if (juegos[i]._id == req.params.id) {
            console.log(juegos[i])
            res.render("pages/juego", juegos[i])
        }
    }
})

router.post("/api/comentario", async (req, res) => {
    let idJuego = req.body.idJuego
    let juego = await Juego.findById(idJuego)
    let newComentario = {
        creadorId: req.body.creadorId,
        nombreCreador: req.body.nombreCreador,
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