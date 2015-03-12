$("[data-toggle=popover]").popover();
//            $("[name='my-checkbox']").bootstrapSwitch();
$(document).ready(function () {

    /*navbar*/
    $('ul.nav li.dropdown').hover(function () {
        $(this).find('.dropdown-menu').stop(true, true).delay(100).fadeIn(100);
    }, function () {
        $(this).find('.dropdown-menu').stop(true, true).delay(50).fadeOut(50);
    });

    /*Carousel*/
    $('#myCarousel').carousel({
        interval: 10000
    })

    $('#myCarousel').on('slid.bs.carousel', function () {
        //alert("slid");
    });
});