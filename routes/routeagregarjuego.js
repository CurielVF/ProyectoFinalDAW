const express = require('express');
const router = express();
const Juego = require('../model/juego');
let verify = require('../middleware/verifyAccess')

router.get('/',verify,async (req,res)=>{
    res.render('pages/agregarjuego')
});

router.post("/api",verify, async (req, res) => {
    var nuevoJuego = req.body;
    console.log(nuevoJuego)
    let juego = new Juego(nuevoJuego)
    juego.creadorId = req.userId
    await juego.save()
})

module.exports = router;

