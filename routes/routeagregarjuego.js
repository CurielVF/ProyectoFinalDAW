const express = require('express');
const router = express();
const Juego = require('../model/juego');

router.get('/',async (req,res)=>{
    res.render('pages/agregarjuego')
});

module.exports = router;

