/*
* Daniel Ryaboshapka   
* January 27 2019
* script.js
* scripts for home page 
* Fade in text, Button grow, current highlighted tab, progress percentages 
*/


$(document).ready(function() {
    $('div.hidden').css('visibility','visible').hide().fadeIn(1500);
    $('div.hidden').animate({'bottom' : '+=30px'});
});
