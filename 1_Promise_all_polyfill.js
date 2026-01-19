/**
 * 1. Implement Promise.all polyfill
 *
 * Promise.all takes an array of promises (or values) and returns a single Promise that executes when all guarantees in the iterable argument have resolved or when the iterable argument contains no promises. It rejects with the reason of the first promise that rejects.
 */

Promise.myAll = function (promises) {
  return new Promise((resolve, reject) => {
    if (!Array.isArray(promises)) {
      return reject(new TypeError("Argument must be an array"));
    }

    const results = [];
    let completed = 0;

    // Handle empty array case immediately
    if (promises.length === 0) {
      resolve(results);
      return;
    }

    promises.forEach((promise, index) => {
      // Promise.resolve wraps values in a promise in case they aren't promises
      Promise.resolve(promise)
        .then((value) => {
          results[index] = value;
          completed++;

          if (completed === promises.length) {
            resolve(results);
          }
        })
        .catch((error) => {
          reject(error);
        });
    });
  });
};

// Example Usage:
const p1 = Promise.resolve(1);
const p2 = 2;
const p3 = new Promise((resolve) => setTimeout(resolve, 100, "foo"));

Promise.myAll([p1, p2, p3]).then((values) => {
  console.log(values); // [1, 2, "foo"]
});
