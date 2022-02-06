const express = require('express');
const router = express();
const Creador = require('../model/creador');
const Juego = require('../model/juego');

router.get("/", async (req, res) => {
    let juegos = await Juego.find({ creadorId: "Thatgamecompany" })
        .sort({ nombre: 1 })
    let creadores = await Creador.find()
    for (let i = 0; i < creadores.length; i++) {
        if (creadores[i]._id === "Thatgamecompany") {
            creadores[i]['juegos'] = juegos;
            res.render("pages/perfil", creadores[i])
        }
    }
})

router.get("/borrarjuego/:id", async (req, res) => {
    let id = req.params.id
    await Juego.remove({ _id: id })
    res.redirect('/perfil')
})

module.exports = router;