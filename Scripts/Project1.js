var Container=document.querySelector(".container");


var Elements=["YouTuber","Web Developer","Freelancer","Instructor"];
var ElementIndex=0;
var charIndex=0;

function updateText(){
    charIndex++;
    Container.innerHTML=`
<h1>I am ${Elements[ElementIndex].slice(0,1)==="I " ? "an":"a"} ${Elements[ElementIndex].slice(0,charIndex)}</h1> `;
            

if(charIndex===Elements[ElementIndex].length){
    ElementIndex++
    charIndex=0;
}
if(ElementIndex===Elements.length){
    ElementIndex=0;
}
setTimeout(updateText,400)
}
updateText();