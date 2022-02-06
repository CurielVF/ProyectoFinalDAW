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
    var nuevoComentario = req.body;
    console.log(nuevoComentario)
})

module.exports = router;