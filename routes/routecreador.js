const express = require('express');
const router = express();
const Creador = require('../model/creador');
const Juego = require('../model/juego');
let verify = require('../middleware/verifyAccess')

router.get("/:id",verify, async (req, res) => {
    let juegos = await Juego.find({ creadorId: req.params.id })
    let creadores = await Creador.find()
    for (let i = 0; i < creadores.length; i++) {
        if (creadores[i]._id == req.params.id) {
            creadores[i]['juegos'] = juegos;
            res.render("pages/creador", creadores[i])
        }
    }
})

module.exports = router;