// variables para los botones del menu
const navBar =document.querySelector(".navbar");

const menu = document.querySelector(".navbar__list");

const menuBtn = document.querySelector(".navbar__bars");

const cancelBtn = document.querySelector(".navbar__cancel");

// activa el menu Huamburguesa
menuBtn.onclick = ()=>{
    menu.classList.add("activo");
    menuBtn.classList.add("hide");

}


// desactiva el menu hamburguesa
cancelBtn.onclick = ()=>{
    menu.classList.remove("activo");
    menuBtn.classList.remove("hide");
}

window.onscroll = () => {
    this.scrollY > 20 ? navBar.classList.add("sticky") : navBar.classList.remove("sticky");
}