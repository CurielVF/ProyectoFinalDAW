var listaJuegos
$.get("/api/juegos", function (data) {
    listaJuegos = data
})

function consultaApiBusqueda() {
    var buscarPor = $("#busqueda-drop").val().trim()
    var orden = $("#orden-drop").val().trim()
    var busqueda = $(".input-busqueda").val().trim()

    if ($(".input-busqueda").val().trim() != "") {

        $.get("/api/juegos/" + buscarPor + "/" + busqueda + "/" + orden, function (data) {
            cambiarOrden(data)
        })
    }
    else {
        $.get("/api/juegos/" + orden, function (data) {
            cambiarOrden(data)
        })
    }

}

function cambiarOrden(data) {
    $(".juegos-creador").empty()
    listaJuegos = data
    for (var i = 0; i < data.length; i++) {
        $(".juegos-creador").append(`
                <tr class="clickable-row">
                        <td class="fila-juego">
                            <img src=${data[i].imagen} class="imagen-juego">
                            <div class="datos-juego">
                                <div class="clasificacion-juego">
                                    <span>
                                        <a href="/juego/${data[i]._id}">
                                            ${data[i].nombre}
                                        </a>

                                    </span>
                                    <p>Calificación: ${data[i].calificacion}</p>
                                </div>
                                <p> Creador:
                                    <a href="/creador/${data[i].creadorId}">
                                        ${data[i].creador}
                                    </a>
                                </p>
                                
                                ${data[i].descripcion}
                            </div>
                        </td>
                    </tr>



                        `
        )
    }
}

function sortByProperty(property) {
    return function (a, b) {
        if (a[property] > b[property])
            return 1;
        else if (a[property] < b[property])
            return -1;

        return 0;
    }
}
$(".boton-busqueda").on('click', function (e) {
    e.preventDefault()
    consultaApiBusqueda()
})

$("#orden-drop").change(function (e) {
    e.preventDefault()
    let orden = $("#orden-drop").val().trim()
    console.log("funcion")
    cambiarOrden(listaJuegos.sort(sortByProperty(orden)))
})