let digitalElement = document.querySelector(".digital");
let sElement = document.querySelector(".p_s");
let mElement = document.querySelector(".p_m");
let hElement = document.querySelector(".p_h");

function uptadeClock(){
    let now = new Date;
    let hour = now.getHours();
    let minute = now.getMinutes();
    let seconds = now.getSeconds();

    digitalElement.innerHTML = `${fixZero(hour)}:${fixZero(minute)}:${fixZero(seconds)} ` ;

    //relogio analogico
    let sdeg = ((360 / 60) * seconds) - 90 ;
    let mdeg = ((360 / 60)* minute) -90 ;
    let hdeg = ((360 / 12)* hour) - 90;
    sElement.style.transform= `rotate(${sdeg}deg)` ;
    mElement.style.transform= `rotate(${mdeg}deg)` ;
    hElement.style.transform= `rotate(${hdeg}deg)` ;

}

function fixZero(time){
    
    return time < 10 ? `0${time}` : time ;
}
setInterval(uptadeClock,1000) ;
uptadeClock();