const express = require('express');
const router = express();
const Juego = require('../model/juego');

router.get("/:nombre", async (req, res) => {
    let juegos = await Juego.find()

    for (let i = 0; i < juegos.length; i++) {

        if (juegos[i].nombre === req.params.nombre) {
            res.render("pages/juego", juegos[i])
        }
    }
})

router.get("/addDB", async (req, res) => {

    let jue = {
        nombre: "Journey",
        creador: "Thatgamecompany",
        descripcion: "Journey es uno de los juegos más bonitos que existen. Con ausencia total de diálogos, el juego te lleva en un viaje de descubrimiento mientras te diriges hacia la cima de una montaña. Es posible avanzar en solitario o encontrarte con otros jugadores que están teniendo la misma experiencia que tú. En pocas palabras, Journey fascina por su simplicidad y riqueza visual.",
        imagen: "https://cdn.ligadegamers.com/imagenes/journey-mejores-juegos-indie.jpg",
        clasificacion: "+18",
        categoria: "Shootter",
        comentarios:""
    }

    let jue2 = {
        nombre: "Sky: Niños de la Luz",
        creador: "Thatgamecompany",
        descripcion: "Sky: Niños de la Luz es un videojuego indie social de mundo abierto desarrollado y lanzado por Thatgamecompany. Su primer lanzamiento fue en iOS el 18 de Julio de 2019.",
        imagen: "https://fs-prod-cdn.nintendo-europe.com/media/images/10_share_images/games_15/nintendo_switch_download_software_1/H2x1_NSwitchDS_SkyChildrenOfTheLight_ES_image1600w.jpg",
        clasificacion: "+18",
        categoria: "Shootter",
        comentarios:"El mejor juego"
    }

    let task = new Juego(jue)
    let task2 = new Juego(jue2)
    await task.save()
    await task2.save()

})
module.exports = router;