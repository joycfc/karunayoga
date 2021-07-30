$(document).ready(function () {

    //me dice cuantas imagenes hay para crear los botones de los slides
    let imgItems = $(`.slider li`).length;

    // variable de la posicion de las imagenes
    let imgNumber = 1;

    for (i = 0; i < imgItems; i++) {
        $('.paginas').append('<li><span><i class="fas fa-circle"></i></span></li>');
    }

    //ocultamos las imagenes
    $('.slider li').hide();

    //mostramos la primera imagen del Li
    $('.slider li:first').show();

    //le damos estilos al primer item del slide
    $('.paginas li:first').css({
        'color': '#ffffff'
    });

    //funciones para controlar el slide

    $('.paginas li').click(paginas);
    $('.derecha span').click(next);
    $('.izquierda span').click(prev);


    setInterval(function () { next() }, 5000);

    //FUNCIONES

    function paginas() {
        //selecciona la posicion de las imagenes con el click 
        var seleccion = $(this).index() + 1;

        $('.slider li').hide();

        $('.slider li:nth-child(' + seleccion + ')').fadeIn();

        // cambia de color la seleccion
        $('.paginas li').css({
            'color': '#ffffff'
        });

        $(this).css({
            'color': 'brown'
        });

        imgNumber = seleccion
    }

    //pasa de imagen con el boton siguiente
    function next() {


        if (imgNumber >= imgItems) {
            imgNumber = 1;
        } else {
            imgNumber++;
        }

        $('.paginas li').css({
            'color': '#ffffff'
        });
        $('.paginas li:nth-child(' + imgNumber + ')').css({
            'color': 'brown'
        });


        $('.slider li').hide();
        $('.slider li:nth-child(' + imgNumber + ')').fadeIn();



    }


    //pasa de imagen con el boton previo

    function prev() {


        if (imgNumber <= 1) {
            imgNumber = imgItems;
        } else {
            imgNumber--;
        }

        $('.paginas li').css({
            'color': '#ffffff'
        });
        $('.paginas li:nth-child(' + imgNumber + ')').css({
            'color': 'brown'
        });


        $('.slider li').hide();
        $('.slider li:nth-child(' + imgNumber + ')').fadeIn();

    }

















});