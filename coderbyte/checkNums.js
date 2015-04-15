// function checkNums takes two parameters, num1 and num2, and returns true if num2 is greater than num1. 
// Otherwise, function returns false. If num1 is equal to num2 checkNums returns the string -1. 

function checkNums(num1, num2) {
    if (num1 === num2) {
        return "-1";    
    }else {
        return num2 > num1 ? true : false;
    }
}
