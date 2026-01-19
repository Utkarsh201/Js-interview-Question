/**
 * 18. Why do keys matter in React and how do they improve performance.
 *
 * 1. Purpose:
 *    - Keys help React identify which items in a list have changed, been added, or been removed.
 *    - They give a stable identity to DOM elements inside arrays.
 *
 * 2. The Problem without Keys:
 *    - If you have a list [A, B, C] and insert Z at the start -> [Z, A, B, C].
 *    - Without keys, React compares index by index:
 *      index 0: A vs Z (Change!)
 *      index 1: B vs A (Change!)
 *      index 2: C vs B (Change!)
 *    - React mutates every child. This is inefficient.
 *
 * 3. With Keys:
 *    - If items have IDs: key={A.id}, key={B.id}...
 *    - React sees: Key "Z" is new. Key "A" moved. Key "B" moved.
 *    - It strictly keeps the existing DOM nodes for A, B, C and just moves them or inserts Z.
 *
 * 4. Performance Improvement:
 *    - Minimizes DOM manipulation (re-ordering instead of re-creating).
 *    - Preserves Component State (e.g., input values inside the item) which is tied to the element instance.
 *
 * 5. Bad Practice:
 *    - Using array index as key. If list order changes, indexes change, leading to the same bugs and performance issues. Only use index if the list is static.
 */
