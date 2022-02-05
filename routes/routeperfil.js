const express = require('express');
const router = express();
const Creador = require('../model/creador');

router.get("/", async (req, res) => {
    let creadores = await Creador.find()
    
    for (let i = 0; i < creadores.length; i++) {

        if (creadores[i].nombre === "Thatgamecompany") {
            res.render("pages/perfil", creadores[i])
        }
    }
})

router.get("/borrarjuego/:nombre", async (req, res) => {
    console.log("Eliminado");
})

module.exports = router;