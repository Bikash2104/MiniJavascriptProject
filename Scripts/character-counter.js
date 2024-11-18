var TextArea=document.getElementById("textarea");

var TotalCounter=document.getElementById("total-counter");
var ReamingCounter=document.getElementById("reaming-counter");


TextArea.addEventListener("keyup",()=>{
    updateCounter();
})
updateCounter();
function updateCounter(){
    TotalCounter.innerHTML=TextArea.value.length;
    ReamingCounter.innerHTML=TextArea.getAttribute("maxLength")-TextArea.value.length;
    

}