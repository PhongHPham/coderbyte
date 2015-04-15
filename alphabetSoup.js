/* function alphabetSoup takes a str parameter string and returns the string with its letters in alphabetical order. Function 
assumes numbers and punctuation symbols will not be included in string */

function alphabetSoup(str) { 
str = str.toLowerCase().split("").sort().join("");        // string's toLowerCase method used to convert letters to lowercase
   return str;                                            // then split method separates string on the letter into an array
}                                                         // array's sort method to rearrange letters alphabetically
                                                          // finally join method used to turn array back to a string 
                                                          // and alphabetized string returned
