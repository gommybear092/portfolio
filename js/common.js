$(function (){
    // Event
    loadHandler();
    $(window).on("scroll", scrollHandler);

    // Func : loadHandler
    function loadHandler() {
        let t = $(this).scrollTop();
        floating(t);
        desktop_top_button(t);
    }

    // Func : Scroll
    function scrollHandler() {
        let t = $(this).scrollTop();
        floating(t);
        desktop_top_button(t);
    }

    // Func : floating
    function floating(t) {
        (t > 50) ? $("#header").addClass("floating") : $("#header").removeClass("floating");
        return;
    }

    // Func : desktop_top_button
    function desktop_top_button(t) {
        let ww_t = window.visualViewport.height;
        let foo_h = $("#footer").innerHeight();
        (t > 550) ? $("#btn-desktop-top").addClass("show") : $("#btn-desktop-top").removeClass("show");

        if ((Math.round(t) + Math.round(ww_t)) >= $(document).height() - foo_h) {
            $("#btn-desktop-top").addClass("__footer-bottom");
        } else {
            $("#btn-desktop-top").removeClass("__footer-bottom");
        }
        return;
    }


});
