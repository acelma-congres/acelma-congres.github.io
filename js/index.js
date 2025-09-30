// countdown

var countDownDate=new Date("Mar 13, 2026 00:00:00").getTime();

function updateTimer(){
    var now = new Date().getTime();
    var distance = countDownDate-now;

    var days = Math.floor(distance/(1000*60*60*24));
    var hours = Math.floor((distance % (1000*60*60*24))/(1000*60*60));
    var minutes = Math.floor((distance% (1000*60*60))/(1000*60));
    var seconds = Math.floor((distance%(1000*60))/1000);

    document.getElementById("timer").innerHTML = days + " jours " + hours + " heures "+ minutes + " min " + seconds + " s ";
    
    if(distance<0){
        clearInterval(x);
    }
}updateTimer();
var x =setInterval(updateTimer,1000);
