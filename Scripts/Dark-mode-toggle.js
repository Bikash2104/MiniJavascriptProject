var inputCheck=document.querySelector(".input");
var bodyEle=document.querySelector("body");

inputCheck.checked=JSON.parse(localStorage.getItem("mode"));
updateBody();

function updateBody(){
    if(inputCheck.checked){
        bodyEle.style.background="black";

    }else{
        bodyEle.style.background="white";
    }
}
inputCheck.addEventListener("input",()=>{
    updateBody();
    updateLocalStorage();
});

function updateLocalStorage(){
    localStorage.setItem("mode",JSON.stringify(inputCheck.checked));
}

