const express = require('express');
const router = express();
const Juego = require('../model/juego');

router.get('/:id',async (req,res)=>{
    let id = req.params.id
    let juego = await Juego.findById(id)
    res.render('pages/modificarjuego',{juego})
});

router.post("/api/:id", async (req, res) => {
    await Juego.updateOne({_id:req.params.id},req.body) 
})

module.exports = router;

