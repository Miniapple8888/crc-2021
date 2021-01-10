$(window).scroll(function() {
    $('nav').toggleClass('scrolled', $(this).scrollTop() > 100);
})
$('.hamburger-toggler').on('click', function() {
    $('nav').toggleClass('toggled');
    $('.hamburger-toggler').toggleClass('toggled');
})