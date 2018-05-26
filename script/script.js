$(document).ready(function () {

    // nav mobil louise
    $("i .container").click(function () {

        $(this).toggleClass("change"); //får burgermenuen til at skifte til et kryds og omvendt
        $(".dropdown-content").toggle(); //åbner og lukker dropdownmenu

    });
    // nav mobil louise slut

});

//service dias louise
var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
}
//service dias louise slut
// produkter Ivan javascript starts here

$(document).ready(function () {
    $(".next1").on("click", function () {
        var currentImg = $(".active1");
        var nextImg = currentImg.next();

        if(nextImg.length){
            currentImg.removeClass('active1').css('z-index', -10);
            nextImg.addClass('active1').css('z-index', 10);
        }
    });

    $(".prev1").on("click", function () {
        var currentImg = $(".active1");
        var prevImg = currentImg.prev();

        if(prevImg.length){
            currentImg.removeClass('active1').css('z-index', -10);
            prevImg.addClass('active1').css('z-index', 10)
        }
    });

    $(".next2").on("click", function () {
        var currentImg = $(".active2");
        var nextImg = currentImg.next();

        if(nextImg.length){
            currentImg.removeClass('active2').css('z-index', -10);
            nextImg.addClass('active2').css('z-index', 10);
        }
    });

    $(".prev2").on("click", function () {
        var currentImg = $(".active2");
        var prevImg = currentImg.prev();

        if(prevImg.length){
            currentImg.removeClass('active2').css('z-index', -10);
            prevImg.addClass('active2').css('z-index', 10)
        }
    });

    $(".next3").on("click", function () {
        var currentImg = $(".active3");
        var nextImg = currentImg.next();

        if(nextImg.length){
            currentImg.removeClass('active3').css('z-index', -10);
            nextImg.addClass('active3').css('z-index', 10);
        }
    });

    $(".prev3").on("click", function () {
        var currentImg = $(".active3");
        var prevImg = currentImg.prev();

        if(prevImg.length){
            currentImg.removeClass('active3').css('z-index', -10);
            prevImg.addClass('active3').css('z-index', 10)
        }
    });
});

// produkter Ivan javascript stops here