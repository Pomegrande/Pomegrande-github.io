var head = document.getElementById('head');
var subhead = document.getElementById('subhead');
var counterDays = document.getElementById('days');
var counterHours = document.getElementById('hours');
var counterMinutes = document.getElementById('minutes');
var counterSeconds = document.getElementById('seconds');

const date = 'December 25, 2022 00:00:00';
var christmas = new Date(date);

function updateTimer(christmas) {
    
    var time = christmas - new Date();
    return {
        'days': Math.floor(time / (1000 * 60 * 60 * 24)),
        'hours': Math.floor((time/(1000 * 60 * 60)) % 24),
        'minutes': Math.floor((time / 1000 / 60) % 60),
        'seconds': Math.floor((time / 1000) % 60),
        'total': time
    };
};

function startTimer(counterDays, counterHours, counterMinutes, counterSeconds, christmas) {
    
    var timerInterval = setInterval(function() {
        var timer = updateTimer(christmas);
        
        counterDays.innerHTML = timer.days;
        counterHours.innerHTML = timer.hours;
        counterMinutes.innerHTML = timer.minutes;
        counterSeconds.innerHTML = timer.seconds;
        
        if (timer.total < 1) {
            clearInterval(timerInterval);
            counterDays.innerHTML = 0;
            counterHours.innerHTML = 0;
            counterMinutes.innerHTML = 0;
            counterSeconds.innerHTML = 0;
            
            head.innerHTML = "Het is Kerstmis!!!";
            subhead.innerHTML = "Fijne kerst iedereen!!!";
        } else if (timer.days < 1){
            subhead.innerHTML = "Het is momenteel kerstavond! Hoe lang nog tot eerste kerstdag?";
        }
   
    }, 1000);
};

window.onload = function() {   
    startTimer(counterDays, counterHours, counterMinutes, counterSeconds, christmas);  
};