jQuery(function ($) {
    $(".toggle").click(function () {
        $(".toggle").removeClass("active");
        $(this).toggleClass("active");
    });

    $(".hn").click(function () {
        $(".articles-container").removeClass("active");
        $(".historic-newspapers").addClass("active");
    });

    $(".hn-va").click(function () {
        $(".articles-container").removeClass("active");
        $(".historic-newspapers-va").addClass("active");
    });
});
