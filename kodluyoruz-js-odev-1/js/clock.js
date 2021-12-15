let name = prompt("adınız nedir")

document.getElementById("myName").innerHTML=name;
console.log(name);
console.log(Date.now);

 

function showTime(){
    var date=new Date();
    var hour =date.getHours();
    var minute = date.getMinutes();
    var second=date.getSeconds();
    var dayName= date.getDay();
    switch(dayName){
        case 1:
            dayName= "pazartesi";
            break;
        case 2:
            dayName="Salı";
            break;
        case 3:
            dayName="Çarşamba";
            break;
        case 4:
            dayName="Perşembe";
            break;
        case 5:
            dayName="Cuma";
            break;
        case 6:
            dayName="Cumartesi";
            break;
        case 7:
            dayName="Pazar";
            break;
    }
    hour = hour<10 ? "0"+hour:hour;
    minute = minute<10 ? "0"+minute:minute;
    second = second<10 ? "0"+second:second;
    
    var timer=`${hour} : ${minute} : ${second} - ${dayName}`;
    document.querySelector('#myClock').innerHTML=timer;
    setInterval(showTime,1000);

}
showTime();