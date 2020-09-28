function openMen(x) {
    var el = document.getElementById("hamb");
    el.classList.toggle("change");
    var element = document.getElementById("content");
    element.classList.toggle("hamburger__opened");
  }

function dropMenu () {
    var menu = document.getElementById("minimenu");
    menu.classList.toggle( "navbar__drop");
}

const images = ["./Photos/hero-image 2.png", "./Photos/hero-image 3.png", "./Photos/hero-image 4.png"];

function background (index) {
    var background =  document.getElementById("backgrimg");
    background.style.backgroundImage =`url("${images[index]}")`;  
}

function openHamb () {
    var menuHamb = document.getElementById("insideMen");
    menuHamb.classList.toggle("hamburger__minmen");
}
