const eidAlAdha = "9 jul 2022";

function countdown(){
    const eidDay = new Date(eidAlAdha);
    const currentDay = new Date();
    const totalTime = (eidDay - currentDay)/1000;
    const days =Math.floor (totalTime/3600/24);
    const hours = Math.floor(totalTime/3600)%24 ;
    const minutes = Math.floor(totalTime/60) % 60 ;
    const seconds = Math.floor(totalTime)%60;
    
    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;
    
}
countdown();
setInterval(countdown,1000);