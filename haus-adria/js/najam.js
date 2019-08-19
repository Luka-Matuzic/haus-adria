
$(document).ready(function(){
    
    'use strict';
    
    setInterval(function(){
        
        'use strict';
        
        var windowHeight=$(window).height();
        var containerHeight = $(".header-container").height();
        
        var padTop= windowHeight-containerHeight;
        
        $(".header-container").css({				
            'padding-top': Math.round (padTop/2)+ 'px',
            'padding-bottom': Math.round(padTop/2) + 'px'    
        });
    }, 10);
});





/*HOVER - DROP-DOWN MENU*/
$('ul.nav li.dropdown').hover(function(){
  $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeIn(500);
}, function() {
  $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeOut(500);
});



$('.carousel').carousel({full_width: true});
