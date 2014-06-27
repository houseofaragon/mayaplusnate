//jQuery to collapse the navbar on scroll


//jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('.page-scroll a').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

var random;
var backgrounds = [
    'url(img/forest1.jpg) no-repeat center scroll',
    'url(img/beachlands.jpg) no-repeat center scroll',
    'url(img/black_beach.jpg) no-repeat center scroll',
    'url(img/broad_channel.jpg) no-repeat center scroll',
    'url(img/complex.jpg) no-repeat center scroll',
    'url(img/lights.jpg) no-repeat center scroll',
    'url(img/marsh_owls.jpg) no-repeat center scroll',
    'url(img/beachlands.jpg) no-repeat center scroll',
    'url(img/meadows.jpg) no-repeat center scroll',
    'url(img/sea_trees.jpg) no-repeat center scroll',
    'url(img/projection_house.jpg) no-repeat center scroll',
    'url(img/snow_hill.jpg) no-repeat center scroll',
    'url(img/projection_house.jpg) no-repeat center scroll'

];

function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

$('#about').on('click', function(){
    random = randomInt(0,13);
    $('#about .row').hide();
    $('#about').css('background',backgrounds[random]);
});
