// See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Filter
function myFilter(arr, callback) {

//  CODE INSIDE HERE   //
  
  var newArr = [];
  
  for (var idx = 0; idx < arr.length; idx++) {
    if (callback(arr[idx], idx, arr)) {
      newArr.push(arr[idx]);
    }
  }
  
  return newArr;
}

/*
 Best if you don't code out here.
 If you want to check your code, use `index.js`!
*/







// export this function (you can ignore this for now)
module.exports = myFilter;
