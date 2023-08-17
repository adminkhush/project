const startE1=document.getElementById("start");
const stopE1=document.getElementById("stop");

const  resetE1=document.getElementById("reset");
const  timerE1=document.getElementById("timer");
let startTime=0;
let elapseTime=0;
let interval;

function startTimer(){
startTime=Date.now()-elapseTime;
interval=setInterval(()=>
{
 elapseTime=Date.now()-startTime;
timerE1.textContent=formateTime(elapseTime);
},100);
startE1.disabled =true;
stopE1.disabled = false;

}
function formateTime(elapseTime){
 const millisecond= Math.floor((elapseTime % 1000)/10);
 const second= Math.floor((elapseTime % (1000*60))/1000);
 const minute= Math.floor((elapseTime % (1000*60*60))/(1000*60));
 const hour= Math.floor(elapseTime /(1000*60*60));

 return   ( 
     (hour ? ( hour > 9 ? hour : "0" + hour):"00") +":"+
(minute ? ( minute > 9 ? minute : "0"+ minute):"00")
  +":"+
   (second ?( second > 9 ? second : "0"+second):"00")
+"."+
 ( millisecond > 9  ? millisecond : "0" + millisecond)
 ) ;
}
function stopTimer(){
clearInterval(interval);
startE1.disabled =false;
stopE1.disabled = true;
}
function resetTimer(){
 clearInterval(interval);
 elapseTime=0;
 timerE1.textContent="00:00:00";
startE1.disabled =false;
stopE1.disabled = true;
}

startE1.addEventListener("click",startTimer);
 stopE1.addEventListener("click",stopTimer);
 resetE1.addEventListener("click",resetTimer);
