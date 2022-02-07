const express = require('express');
const router = express();
const Creador = require('../model/creador');
const Juego = require('../model/juego');
let verify = require('../middleware/verifyAccess')

router.get("/",verify, async (req, res) => {
    console.log(req.body)
    console.log(req.userId)
    let juegos = await Juego.find().sort({ calificacion: -1 })
    res.render("pages/index", { juegos })
})

router.get("/api/juegos/:buscarpor/:busqueda/:orden", async (req, res) => {
    var busqueda = req.params.busqueda;
    var buscarPor = req.params.buscarpor;
    var orden = req.params.orden;

    console.log(busqueda);
    console.log(buscarPor);
    console.log(orden);

    console.log({ [buscarPor]: new RegExp(busqueda, "i") })

    let juegos = await Juego.find({ $or: [{ [buscarPor]: new RegExp(busqueda, "i") }] })
        .sort({ [orden]: 1 })
    return res.json(juegos);
});

router.get("/api/juegos/:orden", async (req, res) => {
    var orden = req.params.orden;
    let juegos = await Juego.find()
        .sort({ [orden]: 1 })
    return res.json(juegos);
});

router.get("/api/juegos", async (req, res) => {
    let juegos = await Juego.find().sort({ orden: -1 })
    return res.json(juegos);
});


router.get("/logoff",verify,(req,res)=>{
    res.clearCookie("token")
    res.redirect("/login")
})

module.exports = router;