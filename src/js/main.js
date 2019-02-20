// Button black white
let boutonBlack = document.getElementById('background-black');
let boutonBlanc = document.getElementById('background-white');
let header1 = document.getElementById('header-background');
let linkNav = document.querySelectorAll('.nav-link');

boutonBlack.addEventListener('click', () => {
    header1.style.backgroundColor="black";
    header1.style.color="white";
    for (let i = 0; i < linkNav.length; i++) {
        linkNav[i].style.color="white";
    }
})

boutonBlanc.addEventListener('click', () => {
    header1.style.backgroundColor="white";
    header1.style.color="black";
    for (let i = 0; i < linkNav.length; i++) {
        linkNav[i].style.color="black";
    }
})


// NAV ON SCROLL

// let onScroll = document.getElementById('navbar');
// window.onscroll = function() {scrollFunction()};

// function scrollFunction() {
//   if (document.body.scrollTop > 330 || document.documentElement.scrollTop > 330) {
//     navbar.classList.add('fixed-top')
//     navbar.classList.add('bg-white')
//   } else {
//     navbar.classList.remove('fixed-top')
//   }
// }

window.onscroll = function () { NavSticky() };

let nav = document.getElementById("navbar");
let sticky = nav.offsetTop + 250;
let img1 = document.getElementById('image1')
let img2 = document.getElementById('image2')
let jumboTOP = document.getElementById("bg-gris")

function NavSticky() {
    if (window.pageYOffset > sticky) {
        nav.classList.remove("navSticky2");
        nav.classList.add("navSticky1");
        navbar.classList.add('bg-white')
    } else if (window.pageYOffset > sticky - 100) {
        nav.classList.add("navSticky2");
        img1.classList.add("d-none");
        img2.classList.remove("d-none");
        jumboTOP.classList.add("paddingSup")
    } else {
        nav.classList.remove("navSticky2");
        nav.classList.remove("navSticky1");
        navbar.classList.remove('bg-white');
        img2.classList.add("d-none");
        img1.classList.remove("d-none");
        jumboTOP.classList.remove("paddingSup");
    }
}


// Bouton register et connection
let connexion = document.getElementById('pageConnection');
let enregistrement = document.getElementById('pageEnregistrement');

function afficherConnection() {
    connexion.classList.remove("d-none");
    enregistrement.classList.add("d-none");
}
function afficherEnregistrement() {
    connexion.classList.add("d-none");
    enregistrement.classList.remove("d-none");
}
let buttonCo = document.getElementById("buttonConnexion");
let buttonEnr = document.getElementById("buttonEnregistrement");

buttonCo.addEventListener("click", afficherConnection);
buttonEnr.addEventListener("click", afficherEnregistrement);


// Carousel 
$(document).ready(function(){
    $('.customer-logos').slick({
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1500,
        arrows: false,
        dots: false,
        pauseOnHover: false,
        responsive: [{
            breakpoint: 768,
            settings: {
                slidesToShow: 4
            }
        }, {
            breakpoint: 520,
            settings: {
                slidesToShow: 3
            }
        }]
    });
});
// END Carousel
