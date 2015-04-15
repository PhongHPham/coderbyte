// timeConvert takes a parameter num and returns the number of hours and minutes the parameter converts to.
// example: if num = 63 then output will be 1:3

function timeConvert(num) { 
    var totalHour = 0;          // set variables for hours and minutes
    var minutes = 0;
    if (num < 60) {             // if num is less than 60, assign num to minutes
        minutes = num;        
    }else {
        minutes = num % 60;     // use modular division to find minutes
    }
    while (num >= 60) {         // while loop to increment totalHour counter every time 60 is subtracted from num
        totalHour++;
        num -= 60;
    }
    return totalHour + ':' + minutes;   // return time
   

}
