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
    'url(img/eyes_and_skyways.jpg) no-repeat center center scroll',

    'url(img/broad_channel.jpg) no-repeat center center scroll',
    'url(img/complex.jpg) no-repeat center center scroll',
    'url(img/lights.jpg) no-repeat center center scroll',
    'url(img/marsh_owls.jpg) no-repeat center center scroll',

    'url(img/meadows.jpg) no-repeat center center scroll',
    'url(img/nate_field.jpg) no-repeat center center scroll',
    'url(img/night_trees.jpg) no-repeat center center scroll',
    'url(img/snowfog_silhouette.jpg) no-repeat center center scroll',

    'url(img/sea_trees.jpg) no-repeat center center scroll',
    'url(img/projection_house.jpg) no-repeat center center scroll',
    'url(img/snow_hill.jpg) no-repeat center center scroll',
    'url(img/staten_wallpaper.jpg) no-repeat center center scroll',

    'url(img/mural.jpg) no-repeat center center scroll',
    'url(img/natebushes.jpg) no-repeat center center scroll',
    'url(img/photography.jpg) no-repeat center center scroll',
    'url(img/pool.jpg) no-repeat center center scroll',
    'url(img/vermontroads.jpg) no-repeat center center scroll'


];

function randomInt() {
    return Math.floor(Math.random() * 20);
}

var current = 0;
var max = 11;
var previous;
$('#about').on('click', function(){
    current = randomInt();
    console.log('Current: ' + current);
    $('#about').text('');
    if(current === previous){
        current = previous + 1;
    }

    $('#about .row').hide();
    $('#about').css('background',backgrounds[current]);
    $('#about').css('background-size','100% 100%');

    if( current === 2 || current === 6){
        $('#about').append('<h1 class="brand-heading">Maya + Nate</h1>');
    } else if(current === 3 || current === 7){
        $('#about').append('<h1 class="brand-heading">6:00 PM</h1>');
    } else if( current === 4 || current === 9){
        $('#about').append('<h1 class="brand-heading">Milk & roses</h1>');
    } else if(current === 5 || current === 10){
        $('#about').append('<h1 class="brand-heading">September 14 2014</h1>');
    } else if(current === 11 || current === 12){
        $('#about').append('<h1 class="brand-heading">CAMPING! </h1>');
    } else if(current === 0 || current === 13){
        $('#about').append('<h1 class="brand-heading">SATURDAY</h1>');
    }   else if(current === 1 || current === 14){
        $('#about').append('<h1 class="brand-heading">NATE + MAYA</h1>');
    } 
    else{
        $('#about').append('<h1 class="brand-heading">Cold springs</h1>');

    }
    $('#about').css('#about h1','margin-top:50%');

    //current = current + 1;
    previous = current;
});
