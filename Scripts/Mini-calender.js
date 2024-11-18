var monthName=document.getElementById("month-name");
var dayNumber=document.getElementById("day-number");
var dayName=document.getElementById("day-name");
var yearName=document.getElementById("year");


var date=new Date();
var month=["jan","feb","mar","Apr","may"];
monthName.innerHTML=`${month[date.getMonth()]}`
dayNumber.innerHTML=date.getDate();
yearName.innerHTML=date.getFullYear();
dayName.innerHTML=date.toLocaleString("en",{weekday:"long"});






