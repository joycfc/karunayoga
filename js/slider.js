// CARGAR EL DOCUMENTO

$(document).ready(function () {
    //me dice cuantas imagenes hay para crear los botones de los slides
    let imgItems = $(`.sliderJ__li`).length;

    // variable de la posicion de las imagenes
    let imgNumber = 1;

    for (i = 0; i < imgItems; i++) {
        $(".sliderJ__paginas").append(
            '<li><span><i class="punto fas fa-circle"></i></span></li>'
        );
    }

    //ocultamos las imagenes
    $(".sliderJ__li").hide();

    // mostramos la primera imagen del Li
    $(".sliderJ__li:first").show();

    //le damos estilos al primer item del slide
    $(".sliderJ__paginas li:first").css({
        color: "#ffffff",
    });

    //funciones para controlar el slide

    $(".sliderJ__paginas li").click(paginas);
    $(".derecha span").click(next);
    $(".izquierda span").click(prev);

    setInterval(function () {
        next();
    }, 5000);

    //FUNCIONES

    function paginas() {
        //selecciona la posicion de las imagenes con el click
        var seleccion = $(this).index() + 1;

        $(".sliderJ__li").hide();

        $(".sliderJ__li:nth-child(" + seleccion + ")").fadeIn();

        // cambia de color la seleccion
        $(".sliderJ__paginas li").css({
            color: "#ffffff",
        });

        $(this).css({
            color: "orangered",
        });

        imgNumber = seleccion;
    }

    //pasa de imagen con el boton siguiente
    function next() {
        if (imgNumber >= imgItems) {
            imgNumber = 1;
        } else {
            imgNumber++;
        }

        $(".sliderJ__paginas li").css({
            color: "#ffffff",
        });
        $(".sliderJ__paginas li:nth-child(" + imgNumber + ")").css({
            color: "brown",
        });

        $(".sliderJ__li").hide();
        $(".sliderJ__li:nth-child(" + imgNumber + ")").fadeIn();
    }

    //pasa de imagen con el boton previo

    function prev() {
        if (imgNumber <= 1) {
            imgNumber = imgItems;
        } else {
            imgNumber--;
        }

        $(".sliderJ__paginas li").css({
            color: "#ffffff",
        });
        $(".sliderJ__paginas li:nth-child(" + imgNumber + ")").css({
            color: "brown",
        });

        $(".sliderJ__li").hide();
        $(".sliderJ__li:nth-child(" + imgNumber + ")").fadeIn();
    }

    
});