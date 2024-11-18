var hours1=document.getElementById("hours");
var minutes1=document.getElementById("minutes");
var seconds1=document.getElementById("seconds");
var ampm1=document.getElementById("ampm");



function updatetime(){
    var time=new Date();
    var hours2=time.getHours();
    var minutes2=time.getMinutes();
    var seconds2=time.getSeconds();
    var ampm2="AM";
    if(hours2 >12){
        hours2=hours2-12;
        ampm1.innerHTML="pm"
    }

    hours2=hours2 <10 ? "0" + hours2:hours2;
    minutes2=minutes2 <10 ? "0" + minutes2:minutes2;
    seconds2=seconds2 <10 ? "0" + seconds2:seconds2;

    hours1.innerText=hours2;
    minutes1.innerText=minutes2;
    seconds1.innerHTML=seconds2;
    setTimeout(() => {
        updatetime();
    }, 1000);
}
updatetime();