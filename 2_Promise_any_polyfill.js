/**
 * 2. Implement Promise.any polyfill
 *
 * Promise.any() takes an iterable of Promise objects and, as soon as one of the promises in the iterable fulfills, returns a single promise that resolves with the value from that promise. If no promises in the iterable fulfill (if all of the given promises are rejected), then the returned promise is rejected with an AggregateError.
 */

Promise.myAny = function (promises) {
  return new Promise((resolve, reject) => {
    if (!Array.isArray(promises)) {
      return reject(new TypeError("Argument must be an array"));
    }

    const errors = [];
    let rejectedCount = 0;

    if (promises.length === 0) {
      return reject(new AggregateError([], "All promises were rejected"));
    }

    promises.forEach((promise, index) => {
      Promise.resolve(promise)
        .then((value) => {
          resolve(value);
        })
        .catch((error) => {
          errors[index] = error;
          rejectedCount++;

          if (rejectedCount === promises.length) {
            reject(new AggregateError(errors, "All promises were rejected"));
          }
        });
    });
  });
};

// Example Usage:
const pErr = new Promise((resolve, reject) => reject("Always fails"));
const pSlow = new Promise((resolve) => setTimeout(resolve, 500, "Done slowly"));
const pFast = new Promise((resolve) => setTimeout(resolve, 100, "Done quick"));

Promise.myAny([pErr, pSlow, pFast]).then((value) => {
  console.log(value); // "Done quick"
});
