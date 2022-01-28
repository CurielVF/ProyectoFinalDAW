const express = require('express');
const router = express();
const Creador = require('../model/creador');
/*
var juegos = [
    { nombre: "Journey", creador: "Thatgamecompany", descripcion: "Journey es uno de los juegos más bonitos que existen. Con ausencia total de diálogos, el juego te lleva en un viaje de descubrimiento mientras te diriges hacia la cima de una montaña. Es posible avanzar en solitario o encontrarte con otros jugadores que están teniendo la misma experiencia que tú. En pocas palabras, Journey fascina por su simplicidad y riqueza visual.", imagen: "https://cdn.ligadegamers.com/imagenes/journey-mejores-juegos-indie.jpg" },
    { nombre: "Stardew Valley", creador: "Chucklefish Games", descripcion: "Stardew Valley es un juego apasionante para hacer de granjero a solas o en compañía. Hay muchos tipos de actividades a llevar a cabo, misiones que cumplir y posibilidades infinitas para hacer un tipo de granja u otra. Es posible interactuar con bastantes NPCs y formar una familia, o lanzarte al peligro en búsqueda de tesoros. ¡Stardew Valley puede ser tan largo como quieras!", imagen: "https://cdn.ligadegamers.com/imagenes/stardew-valley-mejores-juegos-indie.jpg" },
    { nombre: "Undertale", creador: "Toby Fox", descripcion: "Undertale es un RPG enfocado en las decisiones. Puedes matar, intentar dialogar o hasta reclutar enemigos como buenos aliados. Tu misión es salir del mundo subterráneo y regresar a la superficie. ¿Y qué te lo impide? Monstruos y mazmorras llenas de rompecabezas. ¿Serás un personaje de paz o arrasarás todo a tu paso? ¡Tú eliges!", imagen: "https://cdn.ligadegamers.com/imagenes/undertale-mejores-juegos-indie.jpg" },
    { nombre: "Disco Elysium", creador: "ZA UM", descripcion: "El planteamiento de Disco Elysium es sublime. Se trata de un RPG distinto a lo que estamos acostumbrado, muy enfocado en la libertad de acción, decisión y construcción del personaje. Asumirás el control de un detective, quien debe resolver un crimen. Sin embargo, la borrachera hace que sufra de amnesia, ¡así que necesita tu ayuda! Interactúa con los personajes como quieras, conecta pistas y acusa a quienes creas que son culpables. ¡Reflexiona bien!", imagen: "https://cdn.ligadegamers.com/imagenes/disco-elysium-mejores-juegos-indie.jpg" },
    { nombre: "Ori and the Blind Forest", creador: "Moon Studios", descripcion: "Ori and the Blind Forest posee una historia emotiva que viene acompañada de un apartado audiovisual maravilloso. Tiene una dificultad bien balanceada, en un juego que te reta a resolver rompecabezas, coleccionar ítems y salvar el mundo de la oscuridad. Si te apasionó este juego, ¡también está Ori and the Will of the Wisps!", imagen: "https://cdn.ligadegamers.com/imagenes/ori-and-the-blind-forest-mejores-juegos-indie.jpg" },
]
*/
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

module.exports = router;