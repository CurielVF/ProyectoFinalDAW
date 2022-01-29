const express = require('express');
const router = express();
const Creador = require('../model/creador');

router.get("/:nombre", async (req, res) => {
    let creadores = await Creador.find()
    
    for (let i = 0; i < creadores.length; i++) {

        if (creadores[i].nombre === req.params.nombre) {
            res.render("pages/creador", creadores[i])
        }
    }
})

module.exports = router;