/**
 * 30. What are memory leaks in React and how to detect them.
 *
 * Definition:
 * - Closures or references retaining memory that is no longer needed, preventing Garbage Collection.
 *
 * Common React Leaks:
 * 1. Unsubscribing failures: Starting a setInterval or event listener in `useEffect` but failing to clear it in the return cleanup function.
 * 2. State updates on unmounted components: An async request finishes after the user has navigated away, and `.then(() => setState(...))` runs. React usually warns about this.
 *
 * Detection:
 * 1. React Warnings: "Can't perform a React state update on an unmounted component."
 * 2. Chrome DevTools -> Performance Tab: Record a session, force GC, and check if memory graph stays high (sawtooth pattern is good, constantly rising plateau is bad).
 * 3. Chrome DevTools -> Memory Tab: Take Heap Snapshots. Compare "Snapshot 1" (before action) and "Snapshot 2" (after action and return). Look for "Detached DOM nodes" (elements removed from screen but still referenced in JS).
 */
