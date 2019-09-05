//init functions
$(document).ready(function() {
    loadOut();
    menuOpen();
    scrolling();
    animateScrolling();
});

//functions start here

function loadOut() {
    setTimeout(function() {
        $(".loading-screen").addClass("loaded");
    }, 2000);
    setTimeout(function() {
        $(".loading-screen").hide();
    }, 2500);
}

function menuOpen() {
    $(".nav-bar__menu-icon").on("click", function() {
        $(this).toggleClass("open");
        $(".menu").toggleClass("open");
        $(".nav-bar__logo").toggleClass("hidden");
    });
}

function scrolling() {
    var header = $(".nav-bar__logo");
    $(window).scroll(function() {
        var scroll = $(window).scrollTop();

        if (scroll >= 200) {
            header.addClass("scrolled");
        } else {
            header.removeClass("scrolled");
        }
    });
}

function animateScrolling() {
    var trigger = $(".trigger");
    console.log("waypoint started");

    trigger.waypoint(
        function() {
            $(this.element).addClass("triggered");
        },
        { offset: "60%" }
    );
}
