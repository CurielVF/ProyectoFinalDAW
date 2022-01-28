const express = require('express');
const router = express();
const Creador = require('../model/creador');
/*
var creadores = [
    {
        creador: "Thatgamecompany", descripcion: "Estudio independiente de desarrollo de videojuegos estadounidense, fundado por los estudiantes de la Universidad del Sur de California Kellee Santiago y Jenova Chen. Este estudio ha trabajado como desarrollador para Sony Computer Entertainment, en un contrato consistente en la creación de tres juegos descargables para la PlayStation Network.", imagen: "https://upload.wikimedia.org/wikipedia/en/3/3b/ThatGameCompany_Logo.png", sitio: "https://thatgamecompany.com/", correo: "info@thatgamecompany.com", telefono: "(310)453-4906", calificacion: 4.7,
        juegos: [
            { nombre: "Journey", creador: "Thatgamecompany", descripcion: "Journey es uno de los juegos más bonitos que existen. Con ausencia total de diálogos, el juego te lleva en un viaje de descubrimiento mientras te diriges hacia la cima de una montaña. Es posible avanzar en solitario o encontrarte con otros jugadores que están teniendo la misma experiencia que tú. En pocas palabras, Journey fascina por su simplicidad y riqueza visual.", imagen: "https://cdn.ligadegamers.com/imagenes/journey-mejores-juegos-indie.jpg" },
            { nombre: "Stardew Valley", creador: "Chucklefish Games", descripcion: "Stardew Valley es un juego apasionante para hacer de granjero a solas o en compañía. Hay muchos tipos de actividades a llevar a cabo, misiones que cumplir y posibilidades infinitas para hacer un tipo de granja u otra. Es posible interactuar con bastantes NPCs y formar una familia, o lanzarte al peligro en búsqueda de tesoros. ¡Stardew Valley puede ser tan largo como quieras!", imagen: "https://cdn.ligadegamers.com/imagenes/stardew-valley-mejores-juegos-indie.jpg" },
            { nombre: "Undertale", creador: "Toby Fox", descripcion: "Undertale es un RPG enfocado en las decisiones. Puedes matar, intentar dialogar o hasta reclutar enemigos como buenos aliados. Tu misión es salir del mundo subterráneo y regresar a la superficie. ¿Y qué te lo impide? Monstruos y mazmorras llenas de rompecabezas. ¿Serás un personaje de paz o arrasarás todo a tu paso? ¡Tú eliges!", imagen: "https://cdn.ligadegamers.com/imagenes/undertale-mejores-juegos-indie.jpg" },
        ]
    },
    {
        creador: "Chucklefish Games", descripcion: "", imagen: "", sitio: "", correo: "", telefono: "", calificacion: 3.5,
        juegos: [
            { nombre: "Journey", creador: "Thatgamecompany", descripcion: "Journey es uno de los juegos más bonitos que existen. Con ausencia total de diálogos, el juego te lleva en un viaje de descubrimiento mientras te diriges hacia la cima de una montaña. Es posible avanzar en solitario o encontrarte con otros jugadores que están teniendo la misma experiencia que tú. En pocas palabras, Journey fascina por su simplicidad y riqueza visual.", imagen: "https://cdn.ligadegamers.com/imagenes/journey-mejores-juegos-indie.jpg" },
            { nombre: "Stardew Valley", creador: "Chucklefish Games", descripcion: "Stardew Valley es un juego apasionante para hacer de granjero a solas o en compañía. Hay muchos tipos de actividades a llevar a cabo, misiones que cumplir y posibilidades infinitas para hacer un tipo de granja u otra. Es posible interactuar con bastantes NPCs y formar una familia, o lanzarte al peligro en búsqueda de tesoros. ¡Stardew Valley puede ser tan largo como quieras!", imagen: "https://cdn.ligadegamers.com/imagenes/stardew-valley-mejores-juegos-indie.jpg" },
            { nombre: "Undertale", creador: "Toby Fox", descripcion: "Undertale es un RPG enfocado en las decisiones. Puedes matar, intentar dialogar o hasta reclutar enemigos como buenos aliados. Tu misión es salir del mundo subterráneo y regresar a la superficie. ¿Y qué te lo impide? Monstruos y mazmorras llenas de rompecabezas. ¿Serás un personaje de paz o arrasarás todo a tu paso? ¡Tú eliges!", imagen: "https://cdn.ligadegamers.com/imagenes/undertale-mejores-juegos-indie.jpg" },
        ]
    },
    {
        creador: "Toby Fox", descripcion: "", imagen: "", sitio: "", correo: "", telefono: "", calificacion: 4.9,
        juegos: [
            { nombre: "Journey", creador: "Thatgamecompany", descripcion: "Journey es uno de los juegos más bonitos que existen. Con ausencia total de diálogos, el juego te lleva en un viaje de descubrimiento mientras te diriges hacia la cima de una montaña. Es posible avanzar en solitario o encontrarte con otros jugadores que están teniendo la misma experiencia que tú. En pocas palabras, Journey fascina por su simplicidad y riqueza visual.", imagen: "https://cdn.ligadegamers.com/imagenes/journey-mejores-juegos-indie.jpg" },
            { nombre: "Stardew Valley", creador: "Chucklefish Games", descripcion: "Stardew Valley es un juego apasionante para hacer de granjero a solas o en compañía. Hay muchos tipos de actividades a llevar a cabo, misiones que cumplir y posibilidades infinitas para hacer un tipo de granja u otra. Es posible interactuar con bastantes NPCs y formar una familia, o lanzarte al peligro en búsqueda de tesoros. ¡Stardew Valley puede ser tan largo como quieras!", imagen: "https://cdn.ligadegamers.com/imagenes/stardew-valley-mejores-juegos-indie.jpg" },
            { nombre: "Undertale", creador: "Toby Fox", descripcion: "Undertale es un RPG enfocado en las decisiones. Puedes matar, intentar dialogar o hasta reclutar enemigos como buenos aliados. Tu misión es salir del mundo subterráneo y regresar a la superficie. ¿Y qué te lo impide? Monstruos y mazmorras llenas de rompecabezas. ¿Serás un personaje de paz o arrasarás todo a tu paso? ¡Tú eliges!", imagen: "https://cdn.ligadegamers.com/imagenes/undertale-mejores-juegos-indie.jpg" },
        ]
    },
    {
        creador: "ZA UM", descripcion: "", imagen: "", sitio: "", correo: "", telefono: "", calificacion: 2.4,
        juegos: [
            { nombre: "Journey", creador: "Thatgamecompany", descripcion: "Journey es uno de los juegos más bonitos que existen. Con ausencia total de diálogos, el juego te lleva en un viaje de descubrimiento mientras te diriges hacia la cima de una montaña. Es posible avanzar en solitario o encontrarte con otros jugadores que están teniendo la misma experiencia que tú. En pocas palabras, Journey fascina por su simplicidad y riqueza visual.", imagen: "https://cdn.ligadegamers.com/imagenes/journey-mejores-juegos-indie.jpg" },
            { nombre: "Stardew Valley", creador: "Chucklefish Games", descripcion: "Stardew Valley es un juego apasionante para hacer de granjero a solas o en compañía. Hay muchos tipos de actividades a llevar a cabo, misiones que cumplir y posibilidades infinitas para hacer un tipo de granja u otra. Es posible interactuar con bastantes NPCs y formar una familia, o lanzarte al peligro en búsqueda de tesoros. ¡Stardew Valley puede ser tan largo como quieras!", imagen: "https://cdn.ligadegamers.com/imagenes/stardew-valley-mejores-juegos-indie.jpg" },
            { nombre: "Undertale", creador: "Toby Fox", descripcion: "Undertale es un RPG enfocado en las decisiones. Puedes matar, intentar dialogar o hasta reclutar enemigos como buenos aliados. Tu misión es salir del mundo subterráneo y regresar a la superficie. ¿Y qué te lo impide? Monstruos y mazmorras llenas de rompecabezas. ¿Serás un personaje de paz o arrasarás todo a tu paso? ¡Tú eliges!", imagen: "https://cdn.ligadegamers.com/imagenes/undertale-mejores-juegos-indie.jpg" },
        ]
    },
    {
        creador: "Moon Studios", descripcion: "", imagen: "", sitio: "", correo: "", telefono: "", calificacion: 3.7,
        juegos: [
            { nombre: "Journey", creador: "Thatgamecompany", descripcion: "Journey es uno de los juegos más bonitos que existen. Con ausencia total de diálogos, el juego te lleva en un viaje de descubrimiento mientras te diriges hacia la cima de una montaña. Es posible avanzar en solitario o encontrarte con otros jugadores que están teniendo la misma experiencia que tú. En pocas palabras, Journey fascina por su simplicidad y riqueza visual.", imagen: "https://cdn.ligadegamers.com/imagenes/journey-mejores-juegos-indie.jpg" },
            { nombre: "Stardew Valley", creador: "Chucklefish Games", descripcion: "Stardew Valley es un juego apasionante para hacer de granjero a solas o en compañía. Hay muchos tipos de actividades a llevar a cabo, misiones que cumplir y posibilidades infinitas para hacer un tipo de granja u otra. Es posible interactuar con bastantes NPCs y formar una familia, o lanzarte al peligro en búsqueda de tesoros. ¡Stardew Valley puede ser tan largo como quieras!", imagen: "https://cdn.ligadegamers.com/imagenes/stardew-valley-mejores-juegos-indie.jpg" },
            { nombre: "Undertale", creador: "Toby Fox", descripcion: "Undertale es un RPG enfocado en las decisiones. Puedes matar, intentar dialogar o hasta reclutar enemigos como buenos aliados. Tu misión es salir del mundo subterráneo y regresar a la superficie. ¿Y qué te lo impide? Monstruos y mazmorras llenas de rompecabezas. ¿Serás un personaje de paz o arrasarás todo a tu paso? ¡Tú eliges!", imagen: "https://cdn.ligadegamers.com/imagenes/undertale-mejores-juegos-indie.jpg" },
        ]
    },
]
*/
router.get("/:nombre", async (req, res) => {
    /*
        let cre = {
            nombre: "Thatgamecompany", descripcion: "Estudio independiente de desarrollo de videojuegos estadounidense, fundado por los estudiantes de la Universidad del Sur de California Kellee Santiago y Jenova Chen. Este estudio ha trabajado como desarrollador para Sony Computer Entertainment, en un contrato consistente en la creación de tres juegos descargables para la PlayStation Network.", imagen: "https://upload.wikimedia.org/wikipedia/en/3/3b/ThatGameCompany_Logo.png", sitio: "https://thatgamecompany.com/", correo: "info@thatgamecompany.com", telefono: "(310)453-4906", calificacion: 4.7,
            juegos: [
                { nombre: "Journey", creador: "Thatgamecompany", descripcion: "Journey es uno de los juegos más bonitos que existen. Con ausencia total de diálogos, el juego te lleva en un viaje de descubrimiento mientras te diriges hacia la cima de una montaña. Es posible avanzar en solitario o encontrarte con otros jugadores que están teniendo la misma experiencia que tú. En pocas palabras, Journey fascina por su simplicidad y riqueza visual.", imagen: "https://cdn.ligadegamers.com/imagenes/journey-mejores-juegos-indie.jpg" },
                { nombre: "Stardew Valley", creador: "Chucklefish Games", descripcion: "Stardew Valley es un juego apasionante para hacer de granjero a solas o en compañía. Hay muchos tipos de actividades a llevar a cabo, misiones que cumplir y posibilidades infinitas para hacer un tipo de granja u otra. Es posible interactuar con bastantes NPCs y formar una familia, o lanzarte al peligro en búsqueda de tesoros. ¡Stardew Valley puede ser tan largo como quieras!", imagen: "https://cdn.ligadegamers.com/imagenes/stardew-valley-mejores-juegos-indie.jpg" },
                { nombre: "Undertale", creador: "Toby Fox", descripcion: "Undertale es un RPG enfocado en las decisiones. Puedes matar, intentar dialogar o hasta reclutar enemigos como buenos aliados. Tu misión es salir del mundo subterráneo y regresar a la superficie. ¿Y qué te lo impide? Monstruos y mazmorras llenas de rompecabezas. ¿Serás un personaje de paz o arrasarás todo a tu paso? ¡Tú eliges!", imagen: "https://cdn.ligadegamers.com/imagenes/undertale-mejores-juegos-indie.jpg" },
            ]
        }
        let task = new Creador(cre)
        await task.save()
    */
    let creadores = await Creador.find()
    
    for (let i = 0; i < creadores.length; i++) {

        if (creadores[i].nombre === req.params.nombre) {
            res.render("pages/creador", creadores[i])
        }
    }
})

module.exports = router;