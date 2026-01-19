/**
 * 3. Implement Array.prototype.reduce polyfill
 *
 * The reduce() method executes a reducer function (that you provide) on each element of the array, resulting in single output value.
 */

Array.prototype.myReduce = function (callback, initialValue) {
  if (this == null) {
    throw new TypeError("Array.prototype.myReduce called on null or undefined");
  }
  if (typeof callback !== "function") {
    throw new TypeError("Callback must be a function");
  }

  const array = this;
  let accumulator = initialValue;
  let startIndex = 0;

  // If initialValue is not provided, use the first element of the array as the initial accumulator
  // and start the loop from the second element (index 1)
  if (arguments.length < 2) {
    if (array.length === 0) {
      throw new TypeError("Reduce of empty array with no initial value");
    }
    accumulator = array[0];
    startIndex = 1;
  }

  for (let i = startIndex; i < array.length; i++) {
    // Only iterate over present properties (sparse arrays)
    if (i in array) {
      accumulator = callback(accumulator, array[i], i, array);
    }
  }

  return accumulator;
};

// Example Usage:
const arr = [1, 2, 3, 4];
const sum = arr.myReduce((acc, curr) => acc + curr, 0);
console.log(sum); // 10
