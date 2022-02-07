const express = require('express');
const router = express();
const Creador = require('../model/creador');
const Juego = require('../model/juego');
let verify = require('../middleware/verifyAccess')

router.get("/",verify, async (req, res) => {
    console.log(req.body)
    console.log(req.userId)
    let juegos = await Juego.find().sort({ nombre: 1 })
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
    let juegos = await Juego.find().sort({ nombre: 1 })
    return res.json(juegos);
});


router.get("/logoff",(req,res)=>{
    res.clearCookie("token")
    res.redirect("/login")
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
        nombre: "Thatgamecompany", descripcion: "Estudio independiente de desarrollo de videojuegos estadounidense, fundado por los estudiantes de la Universidad del Sur de California Kellee Santiago y Jenova Chen. Este estudio ha trabajado como desarrollador para Sony Computer Entertainment, en un contrato consistente en la creación de tres juegos descargables para la PlayStation Network.", imagen: "https://upload.wikimedia.org/wikipedia/en/3/3b/ThatGameCompany_Logo.png", sitio: "https://thatgamecompany.com/", correo: "info@thatgamecompany.com", 
        telefono: "(310)453-4906", 
        calificacion: 4.7,
        _id: "Thatgamecompany"
    }
    let cre2 = {
        nombre: "ACE Team", descripcion: "ACE Team es una compañía independiente de videojuegos establecida en Santiago, Chile. Su nombre proviene de las iniciales de los 3 miembros fundadores: Andres Bordeu, Carlos Bordeu y Edmundo Bordeu. Ha licenciado con el motor Source con el que realizó su juego debut Zeno Clash.", imagen: "https://sm.ign.com/ign_latam/screenshot/default/ace-team-logo-black-600x366_dk86.jpg", sitio: "https://www.aceteam.cl/index.html", correo: "contact@aceteam.cl", telefono: "(650)723-4906", calificacion: 3.5,
        _id: "ACETeam"
    }

    let jue = {
        nombre: "Journey",
        creador: "Thatgamecompany",
        descripcion: "Journey es uno de los juegos más bonitos que existen. Con ausencia total de diálogos, el juego te lleva en un viaje de descubrimiento mientras te diriges hacia la cima de una montaña. Es posible avanzar en solitario o encontrarte con otros jugadores que están teniendo la misma experiencia que tú. En pocas palabras, Journey fascina por su simplicidad y riqueza visual.",
        imagen: "https://cdn.ligadegamers.com/imagenes/journey-mejores-juegos-indie.jpg",
        clasificacion: "+18",
        categoria: "Shootter",
        creadorId: "Thatgamecompany",
        fecha: Date("2008/01/30 23:30:14"),
        comentarios:[{
            creadorId: "Thatgamecompany",
            comentario: "Pesimo juego",
            calificacion: 1
        },{
            creadorId: "Thatgamecompany",
            comentario: "Genial juego",
            calificacion: 5
        }
    ]
    }

    let jue2 = {
        nombre: "Sky: Niños de la Luz",
        creador: "Thatgamecompany",
        descripcion: "Sky: Niños de la Luz es un videojuego indie social de mundo abierto desarrollado y lanzado por Thatgamecompany. Su primer lanzamiento fue en iOS el 18 de Julio de 2019.",
        imagen: "https://fs-prod-cdn.nintendo-europe.com/media/images/10_share_images/games_15/nintendo_switch_download_software_1/H2x1_NSwitchDS_SkyChildrenOfTheLight_ES_image1600w.jpg",
        clasificacion: "+18",
        categoria: "Shootter",
        creadorId: "Thatgamecompany",
        fecha: Date("2018/01/30 23:30:14")
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