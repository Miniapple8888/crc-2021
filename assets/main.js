$(window).scroll(function() {
    $('nav').toggleClass('scrolled', $(this).scrollTop() > 100);
})
$('.hamburger-toggler').on('click', function() {
    $('nav').toggleClass('toggled');
    $('.hamburger-toggler').toggleClass('toggled');
})
$('.nav-item a').on('click', function() {
    $('nav').removeClass('toggled');
    $('.hamburger-toggler').removeClass('toggled');
    $('#navbar-collapse').removeClass('show');
})