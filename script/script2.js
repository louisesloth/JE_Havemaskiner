$(document).ready(function () {

    // nav mobil louise
    $("i .container").click(function () {

        $(this).toggleClass("change"); //får burgermenuen til at skifte til et kryds og omvendt
        $(".dropdown-content").toggle(); //åbner og lukker dropdownmenu

    });
    // nav mobil louise slut

});

var myslideIndex1 = 1;
showSlides1(myslideIndex1);

// next and previous controls
function plusSlides1(n) {
    showSlides1(myslideIndex1 += n);
}

// thumbnail image controls
function currentSlide1(n) {
    showSlides1(myslideIndex1 = n);
}

function showSlides1(n) {
    var i;
    var slides = document.getElementsByClassName('mySlides1');
    var dots = document.getElementsByClassName('dot1');
    if (n > slides.length) {
        myslideIndex1 = 1;
    }
    if (n < 1) {
        myslideIndex1 = slides.length;
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(' active1', '');
    }
    slides[myslideIndex1 - 1].style.display = 'block';
    dots[myslideIndex1 - 1].className += ' active1';
}

var myslideIndex2 = 1;
showSlides2(myslideIndex2);

// next and previous controls
function plusSlides2(n) {
    showSlides2(myslideIndex2 += n);
}

// thumbnail image controls
function currentSlide2(n) {
    showSlides2(myslideIndex2 = n);
}

function showSlides2(n) {
    var i;
    var slides = document.getElementsByClassName('mySlides2');
    var dots = document.getElementsByClassName('dot2');
    if (n > slides.length) {
        myslideIndex2 = 1;
    }
    if (n < 1) {
        myslideIndex2 = slides.length;
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(' active2', '');
    }
    slides[myslideIndex2 - 1].style.display = 'block';
    dots[myslideIndex2 - 1].className += ' active2';
}

var myslideIndex3 = 1;
showSlides3(myslideIndex3);

// next and previous controls
function plusSlides3(n) {
    showSlides3(myslideIndex3 += n);
}

// thumbnail image controls
function currentSlide3(n) {
    showSlides3(myslideIndex3 = n);
}

function showSlides3(n) {
    var i;
    var slides = document.getElementsByClassName('mySlides3');
    var dots = document.getElementsByClassName('dot3');
    if (n > slides.length) {
        myslideIndex3 = 1;
    }
    if (n < 1) {
        myslideIndex3 = slides.length;
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(' active3', '');
    }
    slides[myslideIndex3 - 1].style.display = 'block';
    dots[myslideIndex3 - 1].className += ' active3';
}