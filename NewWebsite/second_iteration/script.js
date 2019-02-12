/*
* Daniel Ryaboshapka   
* January 27 2019
* script.js
* scripts for home page 
* Fade in text, Button grow, current highlighted tab, progress percentages 
*/


$(document).ready(function() {
    // $('div.hidden').css('visibility','visible').hide().fadeIn(1500);
    // $('div.hidden').animate({'bottom' : '+=30px'});
    var counter = 1;
    $("[id^='prog']").each(function(){
        var percentageName = "percentage" + counter;
        var current = $(this).get(0);
        var width = Math.round(((current.offsetWidth)/400)*100);
        document.getElementById(percentageName).innerHTML = width + "%";
        counter++;
    });
});

