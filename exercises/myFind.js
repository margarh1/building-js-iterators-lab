// See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Find
function myFind(arr, callback) {

//  CODE INSIDE HERE   //

  for (var idx = 0; idx < arr.length; idx++) {
    if (callback(arr[idx], idx, arr)) {
      return arr[idx];
    }
  }

}

/*
 Best if you don't code out here.
 If you want to check your code, use `index.js`!
*/







// export this function (you can ignore this for now)
module.exports = myFind;
