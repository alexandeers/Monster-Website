$(window).on("load",function() {
    //Load function
    setTimeout(LoadPage, 100);

    //If
    if( $("head").hasClass("raptor")) {
        $("body").addClass("parallax");
        $(".grid_container").addClass("perspective_3000");
    }
})

function LoadPage() {
    $(".loading_screen").fadeOut(1000); 
    $("main").fadeIn(1000);

    $(".grid_container").addClass(".slide-in-blurred-from-right");
}

function NavbarClick() {
    $(".nav_options").toggleClass("isVisible");
    $(".navdiv").toggleClass("isOpen");
    $(".nav_wrapper").toggleClass("navBackground");
}

