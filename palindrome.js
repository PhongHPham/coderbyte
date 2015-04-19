// function palindrome takes a string as str parameter and returns true if str is a palindrome
//  (string same forward as it is backward) and false if it isn't. Punctuation and numbers will not be part of string

function palindrome(str) { 
    var strArr = [], newStr = "";             // declare empty array called strArr to new spaceless string
                                              // and declare empty string called newStr 
    str = str.split("")                       // split str on every character into an array
    for (var i = 0; i < str.length; i++) {    // loop through array and if str[i] is not a space, " ", take it out
        if (str[i] !== " ") {
            strArr.push(str[i]);              // by pushing it into strArr
        }
    }

  newStr = strArr.join("");                             // join strArr into a string and assign to newStr
  return newStr == newStr.split("").reverse().join(""); // use split, reverse, and join methods to reverse newStr and
                                                        // and return as equal to newStr which will output true if it is indeed
}                                                       // a palindrome
