$("#agregar-juego").on('click', function (e) {
    e.preventDefault()
    var newJuego = {
        nombre: $("#inputNombre").val().trim(),
        descripcion: $("#inputDescripcion").val().trim(),
        clasificacion: $("#inputClasificacion").val().trim(),
        imagen: $("#inputImage").val().trim(),
        categoria: $("#inputCategoria").val().trim(),
        descarga: $("#inputDescarga").val().trim(),
        fecha: $("#inputFecha").val().trim()
    }
    console.log(newJuego)
    $.post("/agregarjuego/api", newJuego)
        .then(function (data) {

        })
    var timer = setTimeout(function () {
        window.location.href = "/";
    }, 500);
})