function eliminarjuego(id, nombre) {
    var answer = window.confirm("¿Estas seguro de eliminar el juego \"" + nombre + "\"?");
    if (answer) {
        window.location.href = "perfil/borrarjuego/" + id
    }
}

$("#guardar-cambios").on('click', function (e) {
    e.preventDefault()
    console.log("funcionando")
    var perfil = {
        nombre: $("#inputNombre").val().trim(),
        imagen: $("#inputImage").val().trim() == "" ? "https://images4.alphacoders.com/100/thumb-350-1008904.png" : $("#inputImage").val().trim(),
        sitio: $("#inputSitio").val().trim(),
        telefono: $("#inputTelefono").val().trim(),
        correo: $("#inputCorreo").val().trim()
    }
    console.log(perfil)
    $.post("/perfil/api/modificarperfil", perfil)
        .then(function (data) {

        })
    window.location.href = "/perfil";
})