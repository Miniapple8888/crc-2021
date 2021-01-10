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
/*
$(".nav-item a").click(function(event) {
    event.preventDefault();
    console.log($(this).attr('href'));
    $("html, body").animate({
        scrollTop: $($(this).attr("href")).offset().top
      }, 500);
});*/