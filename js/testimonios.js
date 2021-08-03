// productos 

// HACEMOS EL LlAMADO DE LOS COMENTARIOS
let jsonLocal = './../productos/datos.json';

$.getJSON(jsonLocal, function (data, status) {

    console.log(data);

    let comentarios = data     

    cardProductos(comentarios);

})

// SELECCIONAMOS EL CONTENEDOR DONDE SE VAN A PINTAR LOS COMENTARIOS
const section = document.querySelector('.contenedorTestimonios');
// pintamos los comentarios enel DOM

function cardProductos(array) {

    for (let persona of array) {

        let div = document.createElement('div');

        div.className = 'personaCard'

        div.innerHTML = `
        <img class="imagenCard" src=${persona.imagen}>

        <h4 class="tituloCard" >${persona.titulo}</h4>

        <p class="comentarioCard" >${persona.comentario}</p>       
        
        `
        console.log(div);

        section.appendChild(div);
    }




}