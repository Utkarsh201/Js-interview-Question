/**
 * 4. Implement Lodash’s flatten method
 *
 * Implement a function that flattens a nested array.
 * We can implement different variations: flatten (1 level deep) or flattenDeep (recursive).
 */

// Flatten Deep (Recursive)
function flattenDeep(array) {
  let result = [];

  for (let element of array) {
    if (Array.isArray(element)) {
      result = result.concat(flattenDeep(element));
    } else {
      result.push(element);
    }
  }

  return result;
}

// Flatten with Depth control
function flatten(array, depth = 1) {
  let result = [];

  for (let element of array) {
    if (Array.isArray(element) && depth > 0) {
      result = result.concat(flatten(element, depth - 1));
    } else {
      result.push(element);
    }
  }

  return result;
}

// Example Usage:
const nested = [1, [2, [3, [4]], 5]];
console.log(flattenDeep(nested)); // [1, 2, 3, 4, 5]
console.log(flatten(nested, 1)); // [1, 2, [3, [4]], 5]
