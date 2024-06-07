// обработка кнопки

let toggleBtn = document.querySelector('.toggle-btn');
let menu = document.querySelector(".menu");

let close = menu.querySelector(".closeBtn");



    function toggleMenu(){
        let menu = document.querySelector(".menu");
        menu.classList.toggle('hide-menu')
    }


// animation

new WOW().init();

// slider

$(".slider").owlCarousel( { 
    nav:false,
    dots:true,
    loop:true,
    autoplay:true,
    margin:15,
    responsive:{
        0:{items:2},
        768:{items:4}
    }
})