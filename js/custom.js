$(document).ready(function () {
    "use strict";
    var height = $(window).height();
    var navbar_top = $('.navbar').outerHeight();
    var slide_bar = $('.side-bar').height();
    $('.content').css('min-height', height);
    $('.side-bar').css('top', navbar_top);
    $('.side-bar').css('height', height - navbar_top)
    $('.side-bar').css('height', height + 20)
});