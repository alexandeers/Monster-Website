$(window).on("load", function () {
    //Load function
    setTimeout(LoadPage, 100);

    //If
    if ($("head").hasClass("raptor")) {
        $("main").addClass("parallax");
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

window.addEventListener('scroll', function() {
    if(this.window.scrollY > 50) {
        $(".nav_wrapper").addClass("sticky");
        $("nav").addClass("decrease-text-after-scroll")
    } else {
        $(".nav_wrapper").removeClass("sticky");
        $("nav").removeClass("decrease-text-after-scroll")

    }
});
