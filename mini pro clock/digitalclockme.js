 function displayTime(){
 var clock = new Date();
 var hour = clock.getHours();
 var minute = clock.getMinutes();
 var second = clock.getSeconds();
 var date = clock.getDate();
 var month = clock.getMonth()+1;
 var year = clock.getFullYear();
 var session =document.getElementById("session");
  
 if (hour >= 12){
    session.innerHTML = 'PM';
 }else{
    session.innerHTML = 'AM';
 }
 if (hour>12){
    hour = hour-12;
 }
document.getElementById("hours").innerHTML = hour;
document.getElementById("minutes").innerHTML = minute;
document.getElementById("seconds").innerHTML = second;
document.getElementById("date").innerHTML = date;
document.getElementById("month").innerHTML = month;
document.getElementById("year").innerHTML = year;

 }
 setInterval(displayTime,1000);