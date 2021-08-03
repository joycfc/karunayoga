// VARIABLES Y CONSTANTES

const productosDom = document.getElementById("productos");
const footer = document.getElementById("footer");
const items = document.getElementById("items");
const templateCard = document.getElementById("template-card").content;
const templateFooter = document.getElementById("template-footer").content;
const templateCarrito = document.getElementById("template-carrito").content;

let carrito = {};

// se usa fragment para evitar el reflow cuando se pintan las cards en el DOM
const fragment = document.createDocumentFragment();

// EVENTOS

// EJECUTAMOS LAS FUNCIONES CUANDO EL DOCUMENTO ESTE CARGADO

document.addEventListener("DOMContentLoaded", () => {
  fetchData();
  if (localStorage.getItem("carrito")) {
    carrito = JSON.parse(localStorage.getItem("carrito"));
    pintarCarrito();
  }
});

productosDom.addEventListener("click", (e) => {
  carritoAdd(e);
});

items.addEventListener("click", (e) => {
  btnActivo(e);
});

// FUNCIONES

//FUNCION QUE TRAE LOS ELEMENTOS DEL ARCHIVO JSON
const fetchData = async () => {
  try {
    const respuesta = await fetch("productos/productos.json");
    const data = await respuesta.json();
    console.log(data);

    pintarCards(data);
  } catch (error) {
    console.log(error);
  }
};

// PINTA LOS PRODUCTOS EN EL DOM TRAIDOS DEL ARCHIVO JSON
const pintarCards = (data) => {
  data.forEach((producto) => {
    templateCard.querySelector("h5").textContent = producto.titulo;
    templateCard.querySelector("p").textContent = producto.precio;
    templateCard.querySelector("img").setAttribute("src", producto.imagen);
    templateCard.querySelector(".btn-dark").dataset.id = producto.id;

    const clone = templateCard.cloneNode(true);
    fragment.appendChild(clone);
  });
  productosDom.appendChild(fragment);
};

// SELECCIONA LOS ELEMENTOS QUE VAMOS ESCOGIENDO

const carritoAdd = (e) => {


  if (e.target.classList.contains("btn-dark")) {

    setCarrito(e.target.parentElement);

    Swal.fire({
      icon: 'success',
      title: 'Exitos!',
      text: 'Agregaste tu producto al Carrito'
    })
  }
  // evitamos que el evento se propague y selecione otros elementos
  e.stopPropagation();
};

const setCarrito = (objeto) => {
  const item = {
    id: objeto.querySelector(".btn-dark").dataset.id,
    titulo: objeto.querySelector("h5").textContent,
    precio: objeto.querySelector("p").textContent,
    cantidad: 1,
  };
  //subimos la cantidad
  if (carrito.hasOwnProperty(item.id)) {
    item.cantidad = carrito[item.id].cantidad + 1;
  }

  carrito[item.id] = {
    ...item,
  };
  pintarCarrito();
};

const pintarCarrito = () => {
  // limpiar el html para no repetir los elementos
  items.innerHTML = "";

  // pintamos los productos seleccionados en el carrito
  Object.values(carrito).forEach((producto) => {
    templateCarrito.querySelector("th ").textContent = producto.id;
    templateCarrito.querySelectorAll("td ")[0].textContent = producto.titulo;
    templateCarrito.querySelectorAll("td ")[1].textContent = producto.cantidad;
    templateCarrito.querySelector(".btn-info ").dataset.id = producto.id;
    templateCarrito.querySelector(".btn-danger ").dataset.id = producto.id;
    templateCarrito.querySelector(".costo").textContent =
      producto.cantidad * producto.precio;

    const clone = templateCarrito.cloneNode(true);
    fragment.appendChild(clone);
  });
  items.appendChild(fragment);

  pintarFooter();

  // guardamos los elementos en el LOCAlstorage
  localStorage.setItem("carrito", JSON.stringify(carrito));
};
// PINTAMOS LOS ELEMENTOS SELECCIONADOS EN EL FOOTER DEL TOTAL DE COMPRA

const pintarFooter = () => {
  footer.innerHTML = "";

  if (Object.keys(carrito).length === 0) {
    footer.innerHTML = `
    <th scope="row" colspan="5">Carrito vacío.</th>
    `;
    return;
  }
  // SE VAN SUMANDO LOS TOTALES Y LAS CANtIDADES


  const nCantidad = Object.values(carrito).reduce(
    (acumulador, {
      cantidad
    }) => acumulador + cantidad,
    0
  );

  const nPrecio = Object.values(carrito).reduce(
    (acumulador, {
      cantidad,
      precio
    }) => acumulador + cantidad * precio,
    0
  );

  templateFooter.querySelectorAll("td")[0].textContent = nCantidad;
  templateFooter.querySelector("span").textContent = nPrecio;

  const clone = templateFooter.cloneNode(true);
  fragment.appendChild(clone);
  footer.appendChild(fragment);

  const vaciarBtn = document.getElementById("vaciarCarrito");
  vaciarBtn.addEventListener("click", () => {
    carrito = {};
    pintarCarrito();
  });
};

// BOTONES PARA DISMINUIR O AUMENTAR LOS PRODUCTOS
const btnActivo = (e) => {
  if (e.target.classList.contains("aumentar")) {
    // console.log(e.target.dataset.id);
    // aumenta los productos
    const producto = carrito[e.target.dataset.id];
    producto.cantidad++;
    carrito[e.target.dataset.id] = {
      ...producto,
    };
    pintarCarrito();
  }
  // disminuye los productos
  if (e.target.classList.contains("disminuir")) {
    const producto = carrito[e.target.dataset.id];
    producto.cantidad--;
    if (producto.cantidad === 0) {
      delete carrito[e.target.dataset.id];
    }
    pintarCarrito();
  }

  e.stopPropagation();
};