const express = require('express');
const router = express();
const Creador = require('../model/creador');
const Juego = require('../model/juego');
let verify = require('../middleware/verifyAccess')

router.get("/",verify, async (req, res) => {
    let id = req.userId
    let juegos = await Juego.find({ creadorId: id })
    let creadores = await Creador.find()
    for (let i = 0; i < creadores.length; i++) {
        if (creadores[i]._id == id) {
            creadores[i]['juegos'] = juegos;
            res.render("pages/perfil", creadores[i])
        }
    }
})

router.get("/borrarjuego/:id",verify, async (req, res) => {
    let id = req.params.id
    await Juego.remove({ _id: id })
    res.redirect('/perfil')
})

router.post("/api/modificarperfil",verify, async (req, res) => {
    let id = req.userId
    await Creador.updateOne({_id:id},req.body) 
    var newJuego = {
        creador: req.body.nombre
    }
    await Juego.updateMany({creadorId:id},newJuego) 
})

module.exports = router;