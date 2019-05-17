// 6. Square Given an array of integers, find out whether the sum of the integers is a perfect square. If it is a perfect square, return the square root, otherwise return the sum.
// Example:
// [10,1,4,6,1,1,2] returns 5 because the square root of 25 is 5.
// [1,1] returns 2 because 2 is not a perfect square.
// The square root of 2 is approximately 1.414213562373095.

var myArr = [10, 1, 4, 6, 1, 1, 2];

function findRoot(myArr) {
  sum = 0;
  for (i = 0; i < myArr.length; i++) {
    sum += myArr[i];
  }
  if (sum > 0 && Math.sqrt(sum) % 1 === 0) {
    return Math.sqrt(sum);
  } else {
    return sum;
  }
}

findRoot(myArr);

// 7. Duplicate Given an array of integers, find out whether the array contains any duplicate elements. The function should return true if any value appears at least twice in the array, and false if every element is distinct.
var arr = [6, 11, 8, 2, 1, 9];

function hasDuplicates(arr) {
  return new Set(arr).size !== arr.length;
}

hasDuplicates(arr);
