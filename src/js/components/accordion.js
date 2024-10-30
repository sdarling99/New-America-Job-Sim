jQuery(function ($) {
    $(".accordion").click(function (e) {
        $(e.delegateTarget).toggleClass("is-active");
        $(e.delegateTarget).find(".accordion-content").slideToggle(200);
    });
});
