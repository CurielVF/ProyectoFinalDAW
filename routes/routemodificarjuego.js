const express = require('express');
const router = express();
const Juego = require('../model/juego');

router.get('/',async (req,res)=>{
    res.render('pages/modificarjuego')
});

router.post("/api", async (req, res) => {
    var nuevoJuego = req.body;
    console.log(nuevoJuego)
    let juego = new Juego(nuevoJuego)
    await juego.save()
})

module.exports = router;

