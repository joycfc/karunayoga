//EJECUTA LAS FUNCIONES CUANDO EL DOCUMENTO CARGADO
$(document).ready(function () {

// LLAMADO DE PRODUCTOS DEL ARCHIVO JSON

let productosLocal = '/productos/productos.json';

$.getJSON(productosLocal, function (data, status) {
    
    let misProductos = data;
    
    console.log (data);

    cardProductos(misProductos);

    }
);

const section = document.querySelector('#nuestorProductos');

function cardProductos(array) {


    for (const item of array) {

        let div = document.createElement('div');

        div.className = 'productoCard';

        div.innerHTML = `
        
        
        
        
        
        
        
        
        `

        
    }
}















});