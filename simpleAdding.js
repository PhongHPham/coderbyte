// function simpleAdding takes a parameter num and adds up all the numbers from 1 to num. 
// num will be any number between 1 and 1000.

function simpleAdding(num) { 

  var total = 0;                      // declare variable total 
  for (var i = 1; i <= num; i++) {    // loop from 1 till i is equal to num 
    total += i;                       // adding to total each iteration
  }
  return total;                       // return total
}
