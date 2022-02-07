const express = require('express');
const router = express();
const Juego = require('../model/juego');
const Creador = require('../model/creador');
let verify = require('../middleware/verifyAccess')

router.get('/',verify,async (req,res)=>{
    res.render('pages/agregarjuego')
});

router.post("/api",verify, async (req, res) => {
    var nuevoJuego = req.body;
    var creador = await Creador.findById(req.userId)
    console.log(nuevoJuego)
    let juego = new Juego(nuevoJuego)
    juego.creadorId = req.userId
    juego.creador = creador.nombre
    await juego.save()
})

module.exports = router;

