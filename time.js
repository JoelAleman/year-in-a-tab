function showTime(){
    // creates a "Date" object that is now stored within var "d"
    var d = new Date();
    // assigns different values to variables from "d"
    var year = d.getFullYear();
    var month = d.getMonth();
    var date = d.getDate();
    var day = d.getDay();
    var hour = d.getHours();
    var min = d.getMinutes();
    var sec = d.getSeconds();


    // Assigns the name of the month from the numeric value
    switch(month){
        case 0:
            month="January";
            break;
        case 1:
            month="February";
            break;
        case 2:
            month="March";
            break;
        case 3:
            month="April";
            break;
        case 4:
            month="May"
            break;
        case 5:
            month="June"
            break;
        case 6:
            month="July"
            break;
        case 7:
            month="August"
            break;
        case 8:
            month="September"
            break;
        case 9:
            month="October"
            break;
        case 10:
            month="November"
            break;
        case 11:
            month="December"
            break;
        default:
    }

    // Assigns the name of the day of the week from the numeric value
    switch(day){
        case 0:
            day="Sunday";
            break;
        case 1:
            day="Monday";
            break;
        case 2:
            day="Tuesday";
            break;
        case 3:
            day="Wednesday";
            break;
        case 4:
            day="Thursday";
            break;
        case 5:
            day="Friday";
            break;
        case 6:
            day="Saturday";
            break;
        default:
            day="error";
        }

    var AP = "am";
    if(hour >= 12){
        AP = "pm";
        hour = hour % 12;
    }
    if(min < 10){
        min = "0" + min;
    }
    if(sec < 10){
        sec = "0" + sec;
    }
    document.getElementById("date").innerHTML = day + ", " + month + " " + date + "th " + year;
    document.getElementById("time").innerHTML = hour + ":" + min + ":" + sec + AP;

}
//updates our clock every second 'once per 1000 miliseconds'
setInterval(showTime,1000);