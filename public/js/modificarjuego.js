$("#modificar-juego").on('click', function (e) {
    e.preventDefault()
    console.log("funcionando")
    var newJuego = {
        nombre: $("#inputNombre").val().trim(),
        descripcion: $("#inputDescripcion").val().trim(),
        clasificacion: $("#inputClasificacion").val().trim(),
        imagen: $("#inputImage").val().trim()=="" ? "https://images4.alphacoders.com/100/thumb-350-1008904.png" : $("#inputImage").val().trim() ,
        categoria: $("#inputCategoria").val().trim(),
        descarga: $("#inputDescarga").val().trim(),
        fecha: $("#inputFecha").val().trim()
    }
    console.log(newJuego)
    $.post("/modificarjuego/api/"+document.getElementsByName('id-juego')[0].id, newJuego)
        .then(function (data) {

        })
    window.location.href = "/perfil";
})