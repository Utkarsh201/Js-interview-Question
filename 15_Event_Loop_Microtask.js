/**
 * 15. What is the Event Loop and how does the Microtask Queue work?
 *
 * JavaScript is single-threaded. To handle asynchronous operations (timers, fetch), it uses the Event Loop.
 *
 * Architecture:
 * 1. Call Stack: Executes synchronous code (LIFO).
 * 2. Web APIs: Handles async features (setTimeout, DOM events, fetch). When done, they push callbacks to queues.
 * 3. Task Queue (Macrotask Queue): Holds callbacks from setTimeout, setInterval.
 * 4. Microtask Queue: Holds callbacks from Promises (.then/catch), MutationObserver, queueMicrotask.
 * 5. Event Loop: Monitors the Call Stack. If empty, it pushes tasks from queues to the stack.
 *
 * The Loop Logic:
 * 1. Execute all synchronous code on Call Stack.
 * 2. Stack is empty? Check Microtask Queue.
 * 3. Execute ALL tasks in Microtask Queue until empty. (This includes new microtasks added while processing!)
 * 4. Check Task Queue (Macrotask). Take ONE task and execute it.
 * 5. Update Rendering (if needed).
 * 6. Repeat.
 *
 * Key Takeaway: Microtasks have higher priority than Macrotasks. They run immediately after the current script finishes, blocking rendering if they take too long.
 */

// Example Proof:
console.log("Script Start");

setTimeout(() => console.log("Macrotask (setTimeout)"), 0);

Promise.resolve().then(() => console.log("Microtask (Promise)"));

console.log("Script End");

// Output:
// Script Start
// Script End
// Microtask (Promise)
// Macrotask (setTimeout)
