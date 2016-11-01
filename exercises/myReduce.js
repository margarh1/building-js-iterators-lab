// See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce for more details
// Don't worry about initialValue at first. You can always add it in later.

function myReduce(arr, callback, initialValue) {

//  CODE INSIDE HERE   //

  var idx;
  var exitValue = arr[0];

  if (initialValue === undefined) {
    idx = 1;
  } else {
    idx = initialValue;
  }

  for (idx; idx < arr.length; idx++) {
    exitValue = callback(exitValue, arr[idx], idx, arr);
  }

  return exitValue;

}

/*
 Best if you don't code out here.
 If you want to check your code, use `index.js`!
*/







// export this function (you can ignore this for now)
module.exports = myReduce;
