// function letterCapitalize takes a str parameter and returns it with first letter of each word capitalized

function letterCapitalize(str) { 
    var splitUp = str.split(" ");                       // take str and split on word into each array element 
    for (var i = 0; i < splitUp.length; i++) {          // assign array to splitUp. Then loop through splitUp 
       var firstLetter =  splitUp[i].charAt(0).toUpperCase();   // on each element, take it's first letter and capitalize it and
       splitUp[i] = firstLetter + splitUp[i].substr(1);     // store in firstLetter. Then add firstLetter to substring of element
                                                        // using .substr method to ignore original first character and store this 
    }                                                   // newly modified word over original element in splitUp[i]
    return splitUp.join(" ");                           // join array back into string and return


         
}
