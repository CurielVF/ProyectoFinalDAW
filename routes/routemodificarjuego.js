const express = require('express');
const router = express();
const Juego = require('../model/juego');
let verify = require('../middleware/verifyAccess')

router.get('/:id',verify,async (req,res)=>{
    let id = req.params.id
    let juego = await Juego.findById(id)
    res.render('pages/modificarjuego',{juego})
});

router.post("/api/:id",verify, async (req, res) => {
    await Juego.updateOne({_id:req.params.id},req.body) 
})

module.exports = router;

