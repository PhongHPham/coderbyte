// function wordCount takes a str parameter and returns number of words (str will contain words separated by single spaces). 

function wordCount(str) { 
	str = str.split(" ");     // split string on space, " ", into an array
  return str.length;        // return length of array
}
