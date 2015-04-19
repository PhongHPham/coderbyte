// function exOh takes a str composed solely of 'x's and 'o's. If there are an equal number of 'x's and 'o's the function 
// returns true, otherwise it returns false. 

function exOh(str) { 
  var xCount = 0, oCount = 0;               // declare a counter x and a counter for o 
  for (var i = 0; i < str.length; i++) {    // loop through string
  	if (str[i] === "x") {                   // if str[i] is equal to x, increment xCount
    	xCount++;  
    }else if (str[i] === "o") {             // if str[i] is equal to o, increment oCount
    	oCount++;  
    }
  }
  return xCount === oCount ? true : false;  // if xCount is equal to oCount evaluates to true return true, otherwise return false
}
