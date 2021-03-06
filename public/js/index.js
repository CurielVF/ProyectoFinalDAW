var listaJuegos
$.get("/api/juegos", function (data) {
    listaJuegos = data
})

$("#aviso-disponible").hide()

function consultaApiBusqueda() {
    var buscarPor = $("#busqueda-drop").val().trim()
    var orden = $("#orden-drop").val().trim()
    var busqueda = $(".input-busqueda").val().trim()

    if ($(".input-busqueda").val().trim() != "") {

        $.get("/api/juegos/" + buscarPor + "/" + busqueda + "/" + orden, function (data) {
            cambiarOrden(data.sort(sortByProperty(orden)))
        })
    }
    else {
        $.get("/api/juegos/" + orden, function (data) {
            cambiarOrden(data.sort(sortByProperty(orden)))
        })
    }

}

function cambiarOrden(data) {
    $(".juegos-creador").empty()
    listaJuegos = data
    $("#aviso-disponible2").hide()
    $("#aviso-disponible").show()
    if (data.length == 0) {
        $("#aviso-disponible").show()
    }
    else {
        $("#aviso-disponible").hide()
    }

    for (var i = 0; i < data.length; i++) {
        $(".juegos-creador").append(`
        <tr class="clickable-row">
        <td class="fila-juego">
            <img src='${data[i].imagen}' class="imagen-juego" onerror="this.src='https://thumbs.dreamstime.com/b/seamless-bright-vector-pattern-joysticks-video-game-controller-gaming-cool-print-boys-girls-textiles-sportswear-212032349.jpg';">
            <div class="datos-juego">
                <div class="clasificacion-juego">
                    <span>
                        <a href="/juego/${data[i]._id}">
                        ${data[i].nombre}
                        </a>

                    </span>
                    <p id="cal-css">Calificación: ${data[i].calificacion.toFixed(2)} <span class="estrella-calificacion">★</span>
                    </p>
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
        if (property == "calificacion") {
            if (a[property] > b[property])
                return -1;
            else if (a[property] < b[property])
                return 1;

            return 0;
        }
        else {
            if (a[property].toLowerCase() > b[property].toLowerCase())
                return 1;
            else if (a[property].toLowerCase() < b[property].toLowerCase())
                return -1;

            return 0;
        }

    }
}
$(".boton-busqueda").on('click', function (e) {
    e.preventDefault()
    consultaApiBusqueda()
})

$("#orden-drop").change(function (e) {
    e.preventDefault()
    let orden = $("#orden-drop").val().trim()
    console.log("orden: " + orden)
    cambiarOrden(listaJuegos.sort(sortByProperty(orden)))
})
