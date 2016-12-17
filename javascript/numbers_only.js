function numbersOnly(myArr) {
  var numArray = [];
  for (index = 0; index < myArr.length; index++ ) {
    if (typeof myArr[index] == 'number') {
    	numArray.push(myArr[index]); 
    }
  }
  return numArray;
}

numbersOnly([1, "apple", -3, "orange", 0.5]);



function deleteNumbers(myArr) {
  for (index = 0; index < myArr.length; index++ ) {
    if (typeof myArr[index] == 'number') {
    	myArr.splice([index], 1); 
 	}
  }
  return myArr;
}

deleteNumbers([1, "apple", -3, "orange", 0.5]);