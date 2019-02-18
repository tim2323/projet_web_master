// Button black white
var boutonBlack = document.getElementById('background-black');
var boutonBlanc = document.getElementById('background-white');
var header1 = document.getElementById('header-background');
var linkNav = document.querySelectorAll('.nav-link');

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
var onScroll = document.getElementById('navbar');
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 330 || document.documentElement.scrollTop > 330) {
    navbar.classList.add('fixed-top')
    navbar.classList.add('bg-white')
  } else {
    navbar.classList.remove('fixed-top')
  }
}
backgroundColor


// Footer 
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
// END footer
