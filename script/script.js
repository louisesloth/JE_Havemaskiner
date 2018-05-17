$(document).ready(function () {

    $("button .container").click(function () {

        $(this).toggleClass("change"); //får burgermenuen til at skifte til et kryds og omvendt
        $(".dropdown-content").toggle(); //åbner og lukker dropdownmenu

    });

});

//burgermenu ikon slut