// variables para los botones del menu
const navBar = document.querySelector(".navbarF");

const menu = document.querySelector(".navbarF__list");

const menuBtn = document.querySelector(".navbarF__bars");

const cancelBtn = document.querySelector(".navbarF__cancel");

// activa el menu Hamburguesa
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