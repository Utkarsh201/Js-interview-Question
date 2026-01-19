/**
 * 11. Object vs Map differences in JavaScript
 *
 * 1. Key Types:
 *    - Object: Keys must be Strings or Symbols.
 *    - Map: Keys can be any value, including functions, objects, or any primitive.
 *
 * 2. Key Order:
 *    - Object: Keys are not guaranteed to be ordered (though modern engines usually sort strings and keep insertion order for others, it's not strictly reliable for all cases previously).
 *    - Map: Iterates entries in insertion order.
 *
 * 3. Size:
 *    - Object: You have to manually calculate size (e.g., Object.keys(obj).length).
 *    - Map: Has a built-in `.size` property.
 *
 * 4. Performance:
 *    - Map: Generally performs better in scenarios involving frequent additions and removals of key-value pairs.
 *
 * 5. Iteration:
 *    - Object: Requires helper methods like Object.keys(), Object.values(), or for...in loop (which picks up prototype properties).
 *    - Map: Directly iterable with for...of.
 *
 * 6. Defaults:
 *    - Object: Has a prototype, so it contains default keys like 'toString' unless created with Object.create(null).
 *    - Map: Did not contain any keys by default.
 */

// Example:
const map = new Map();
const objKey = { id: 1 };
map.set(objKey, "Value for object key");
console.log(map.get(objKey)); // 'Value for object key'

const obj = {};
// obj[objKey] = 'Value' -> this effectively does obj['[object Object]'] = 'Value'
