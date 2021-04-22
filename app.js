var multiArr1 = [['cheese', 1]['candy', 5]]


//4. Create a function that takes a multi-dimensional array as an argument and console.logs every value in that two dimensional array using for-loop inside a for-loop.
function multiplyAll(arr) {
    
    // Only change code below this line
    for (var i = 0; i < arr.length; i++) {
      for (var j = 0; j < arr[i].length; j++) {
        console.log(arr[i][j]); 
      }
    }
    // Only change code above this line
  }
  
  // Modify values below to test your code
  multiplyAll([[1, 2], [3, 4], [5, 6, 7]]);



  // 5. Create an array that is three-dimension. Each index of the array should contain an array. Each of those arrays should also have arrays inside them. Finally, the second level of arrays, should contain numbers or strings as their values.

  var threedimensionalArray =[[['tart','candy'][3, 90]]] 




  //6. Create a function that receives two numbers as arguments. The function should return whichever argument is the largest.
//Finally, console.log the function passing in two numbers as arguments.

function testGreaterThan(val, val2) {
   
    if(val > val2){
        return val
    }else if(val < val2){
        return val2
    }
   return 'they are equal'
}
  
  testGreaterThan(21,12);
  
  // 7. Create a function that receives two values as arguments. The function should return one string if the two values are equal, and a different string if the two values are different. You may either test for equality in value or for equality in value /and/ type.

  // Finaly console.log the function with two equal arguments, and then console.log the function with two arguments that are not equal.

  function testGreaterThan(val, val2) {
   
    if(val === val2){
        return 'They are equal'
    }else if(val !== val2){
        return 'They are different'
    }
   
}
  
  testGreaterThan(21,12);