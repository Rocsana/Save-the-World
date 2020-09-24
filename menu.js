function openMenu () {
    document.getElementById("content").classList.toggle( "hero__hamburger--opened");
}

function dropMenu () {
     document.getElementById("minimenu").classList.toggle( "hero__navbar--drop");
}

const images = ["./Photos/hero-image 2.png", "./Photos/hero-image 3.png", "./Photos/hero-image 4.png"];

function background (index) {
    document.getElementById("backgrimg").style.backgroundImage =`url("${images[index]}")`;  
}

function openHamb () {
    document.getElementById("larger").classList.toggle("hero__hamburger--minmen");
}
