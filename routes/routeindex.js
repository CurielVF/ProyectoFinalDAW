const express = require('express');
const router = express();
const Creador = require('../model/creador');
const Juego = require('../model/juego');

router.get("/", async (req, res) => {
    let creadores = await Creador.find()

    juegos = []
    for (let i = 0; i < creadores.length; i++) {
        for (let j = 0; j < creadores[i].juegos.length; j++) {
            juegos.push(creadores[i].juegos[j])
        }
    }
    res.render("pages/index", { juegos })
})

//Ejemplo para añadir datos a base ----------------------------------
router.get("/addDB", async (req, res) => {
    /*
    nombre: "", descripcion: "", imagen: "", sitio: "", correo: "", telefono: "", calificacion: 4.7,
            juegos: [
                { nombre: "", creador: "", descripcion: "", imagen: "" },
            ]
            */

    let cre = {
        nombre: "Thatgamecompany", descripcion: "Estudio independiente de desarrollo de videojuegos estadounidense, fundado por los estudiantes de la Universidad del Sur de California Kellee Santiago y Jenova Chen. Este estudio ha trabajado como desarrollador para Sony Computer Entertainment, en un contrato consistente en la creación de tres juegos descargables para la PlayStation Network.", imagen: "https://upload.wikimedia.org/wikipedia/en/3/3b/ThatGameCompany_Logo.png", sitio: "https://thatgamecompany.com/", correo: "info@thatgamecompany.com", telefono: "(310)453-4906", calificacion: 4.7,
        juegos: [
            { nombre: "Journey", creador: "Thatgamecompany", descripcion: "Journey es uno de los juegos más bonitos que existen. Con ausencia total de diálogos, el juego te lleva en un viaje de descubrimiento mientras te diriges hacia la cima de una montaña. Es posible avanzar en solitario o encontrarte con otros jugadores que están teniendo la misma experiencia que tú. En pocas palabras, Journey fascina por su simplicidad y riqueza visual.", imagen: "https://cdn.ligadegamers.com/imagenes/journey-mejores-juegos-indie.jpg" },
            { nombre: "Sky: Niños de la Luz", creador: "Thatgamecompany", descripcion: "Sky: Niños de la Luz es un videojuego indie social de mundo abierto desarrollado y lanzado por Thatgamecompany. Su primer lanzamiento fue en iOS el 18 de Julio de 2019.", imagen: "https://fs-prod-cdn.nintendo-europe.com/media/images/10_share_images/games_15/nintendo_switch_download_software_1/H2x1_NSwitchDS_SkyChildrenOfTheLight_ES_image1600w.jpg" },
        ]
    } 
    let cre2 = {
        nombre: "ACE Team", descripcion: "ACE Team es una compañía independiente de videojuegos establecida en Santiago, Chile. Su nombre proviene de las iniciales de los 3 miembros fundadores: Andres Bordeu, Carlos Bordeu y Edmundo Bordeu. Ha licenciado con el motor Source con el que realizó su juego debut Zeno Clash.", imagen: "https://sm.ign.com/ign_latam/screenshot/default/ace-team-logo-black-600x366_dk86.jpg", sitio: "https://www.aceteam.cl/index.html", correo: "contact@aceteam.cl", telefono: "(650)723-4906", calificacion: 3.5,
        juegos: [
            { nombre: "The Eternal Cylinder", creador: "ACE Team", descripcion: "The Eternal Cylinder es un videojuego de exploración de mundo abierto de supervivencia de aventuras desarrollado por ACE Team y publicado por Good Shepherd Entertainment.", imagen: "https://media.vandal.net/m/76502/the-eternal-cylinder-20198161222137_1.jpg" },
        ]
    }

    let jue = {
        nombre: "Journey",
        creador: "Thatgamecompany",
        descripcion: "Journey es uno de los juegos más bonitos que existen. Con ausencia total de diálogos, el juego te lleva en un viaje de descubrimiento mientras te diriges hacia la cima de una montaña. Es posible avanzar en solitario o encontrarte con otros jugadores que están teniendo la misma experiencia que tú. En pocas palabras, Journey fascina por su simplicidad y riqueza visual.",
        imagen: "https://cdn.ligadegamers.com/imagenes/journey-mejores-juegos-indie.jpg",
        clasificacion: "+18",
        categoria: "Shootter"
    }

    let jue2 = {
        nombre: "Sky: Niños de la Luz",
        creador: "Thatgamecompany",
        descripcion: "Sky: Niños de la Luz es un videojuego indie social de mundo abierto desarrollado y lanzado por Thatgamecompany. Su primer lanzamiento fue en iOS el 18 de Julio de 2019.",
        imagen: "https://fs-prod-cdn.nintendo-europe.com/media/images/10_share_images/games_15/nintendo_switch_download_software_1/H2x1_NSwitchDS_SkyChildrenOfTheLight_ES_image1600w.jpg",
        clasificacion: "+18",
        categoria: "Shootter"
    }

    let task3 = new Juego(jue)
    let task4 = new Juego(jue2)
    await task3.save()
    await task4.save()

    
    let task = new Creador(cre)
    let task2 = new Creador(cre2)
    await task.save()
    await task2.save()
})
//-------------------------------------------------------------------

module.exports = router;