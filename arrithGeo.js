// function arithGeo takes an array of numbers stored in arr as a parameter and returns the string "Arithmetic" if the 
// sequence follows an arithmetic pattern (difference between each number is constant) or returns the string "Geometric" if
// the sequence follows a geometric pattern (each term after the first is multiplied by common ratio). 

function arithGeo(arr) { 

	var diff = arr[1] - arr[0];                 // diff is the difference between array's second and first elements
	var ratio = arr[1] / arr[0];                // ratio is second element of array divided by its first

	var arith = true;                           // set an arith flag to true, assuming that arr will have arithmetic pattern
	var geo = true;                             // set a geo flag to true, assuming that arr wil have geometric pattern

	for(var i = 0; i < arr.length - 1; i++) {   // loop through array from first index. loop will stop at arr.length - 1 to stop
	                                            // two elements before end of array otherwise condition being tested for will 
	                                            // be out of of bounds on last iteration
    	if (arr[i + 1] - arr[i] !== diff) {     // loop will check to see if difference between elment and preceding element 
      		arith = false;                      // is not equal to diff. If it's not, change arith flag to false.
        }
      if (arr[i + 1] / arr[i] !== ratio) {    // loop will also check to see if element divided by preceding element is
     		geo = false;                          // not equal to ratio- if it is not, change geo flag to false.
        }
	}
	
	if (arith === true) {                       // after finished looping if arith is equal to true return "Arithmetic"
    	return "Arithmetic";
	}else if(geo === true) {
    	return "Geometric";                     // if arith is not equal to true and geo is equal to true then return 
    }else {                                   // "Geometric", else return -1 for neither. 
    return -1;
    }
}
