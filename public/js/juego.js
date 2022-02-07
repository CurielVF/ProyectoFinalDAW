$("#agregar-comentario").on('click', function (e) {
    e.preventDefault()
    var newComentario = {
        idJuego: document.getElementsByName('titulo-juego')[0].id,
        comentario: $("#inputComentarios").val().trim(),
        calificacion: $("#calificacion-comentario").val().trim()
    }

    $.post("juego/api/comentario", newComentario)
        .then(function (data) {

        })
        window.location.href = "/juego/"+document.getElementsByName('titulo-juego')[0].id;
})