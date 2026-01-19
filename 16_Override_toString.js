/**
 * 16. How to override toString on String.prototype?
 *
 * You can override methods on built-in prototypes, though it's generally discouraged ("Monkey Patching") as it affects all instances globally and can break libraries.
 */

/*
// WARNING: This affects ALL strings in the application
const originalToString = String.prototype.toString;

String.prototype.toString = function() {
    return 'Overridden: ' + originalToString.call(this);
};

const str = "Hello";
console.log(str.toString()); // "Overridden: Hello"
console.log(`${str}`);       // "Overridden: Hello" (template literals use toString)
*/

// A safer approach is to override it on a specific object/class instance
class MyString extends String {
  toString() {
    return `Custom: ${super.toString()}`;
  }
}
const myStr = new MyString("World");
console.log(myStr.toString()); // "Custom: World"
