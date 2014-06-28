//jQuery to collapse the navbar on scroll


//jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('.page-scroll a').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').scenter().animate({
            scrollTop: $($anchor.attr('href')).offset().center
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

var random;
var current;
var backgrounds = [
    'url(img/forest1.jpg) no-repeat center center scroll',
    'url(img/beachlands.jpg) no-repeat center center scroll',
    'url(img/black_beach.jpg) no-repeat center center scroll',
    'url(img/broad_channel.jpg) no-repeat center center scroll',
    'url(img/complex.jpg) no-repeat center center scroll',
    'url(img/lights.jpg) no-repeat center center scroll',
    'url(img/marsh_owls.jpg) no-repeat center center scroll',
    'url(img/beachlands.jpg)no-repeat center center scroll',
    'url(img/meadows.jpg) no-repeat center center scroll',
    'url(img/sea_trees.jpg) no-repeat center center scroll',
    'url(img/projection_house.jpg) no-repeat center center scroll',
    'url(img/snow_hill.jpg) no-repeat center center scroll'
];

function randomInt(min, max) {
    return Math.floor(Math.random() * 13);
}

var current = 0;
var max = 11;
$('#about').on('click', function(){
    $('#about').text('');
    if(current > max){
        current = 0;
    }

    $('#about .row').hide();
    $('#about').css('background',backgrounds[current]);
    $('#about').css('background-size','100% 100%');

    if( current % 2 ){
        $('#about').append('<h2>6:00PM</h2>');
    } else if(current%3){
        $('#about').append('<h2>September 14, 2014</h2>');
    } else if(current%5){
        $('#about').append('<h2>Milk & Roses</h2>');
    }

    current = current + 1;
});
