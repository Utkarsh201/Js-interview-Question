/**
 * 10. Output for tricky 10-15 JavaScript snippets
 */

// 1. Closures and var scope
console.log("Snippet 1:");
for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 1);
}
// Output: 3, 3, 3 (because var has function scope, i is shared). Fix: use let.

// 2. Object keys
console.log("Snippet 2:");
const a = {},
  b = { key: "b" },
  c = { key: "c" };
a[b] = 123;
a[c] = 456;
console.log(a[b]);
// Output: 456
// Explanation: Object keys are strings. a[b] becomes a['[object Object]']. a[c] overwrites it.

// 3. Type Coercion
console.log("Snippet 3:");
console.log(1 + "2"); // "12"
console.log("1" - 1); // 0 (minus coerces to number)
console.log(true + true); // 2

// 4. Hoisting
console.log("Snippet 4:");
console.log(myVar); // undefined
var myVar = 5;
// console.log(myLet); // ReferenceError
// let myLet = 5;

// 5. this context
console.log("Snippet 5:");
const obj = {
  name: "Alice",
  getName: function () {
    return this.name;
  },
  getNameArrow: () => this.name,
};
console.log(obj.getName()); // "Alice"
console.log(obj.getNameArrow()); // undefined (inherits from parent scope, likely window/global)

// 6. Array length
console.log("Snippet 6:");
const arr = [1, 2, 3];
arr.length = 0;
console.log(arr); // []

// 7. NaN comparison
console.log("Snippet 7:");
console.log(NaN === NaN); // false
console.log(Object.is(NaN, NaN)); // true

// 8. Event Loop Order
console.log("Snippet 8:");
console.log("Start");
setTimeout(() => console.log("Timeout"), 0);
Promise.resolve().then(() => console.log("Promise"));
console.log("End");
// Output: Start, End, Promise, Timeout (Microtasks like Promise run before Macrotasks like setTimeout)

// 9. Primitive vs Reference
console.log("Snippet 9:");
let x = { val: 1 };
let y = x;
y.val = 2;
console.log(x.val); // 2 (Reference copy)

// 10. Floating point math
console.log("Snippet 10:");
console.log(0.1 + 0.2 === 0.3); // false (0.30000000000000004)
