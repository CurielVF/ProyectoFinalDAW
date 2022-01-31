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

module.exports = router;