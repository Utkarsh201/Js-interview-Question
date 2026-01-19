/**
 * 17. Explain Virtual DOM & its comparison mechanism
 *
 * 1. What is Virtual DOM?
 *    - It is a lightweight JavaScript object representation of the real DOM.
 *    - Updating the real DOM is slow; updating JS objects is fast.
 *
 * 2. How it works (Render Phase):
 *    - When state changes, React creates a new Virtual DOM tree.
 *    - It compares the new tree with the previous one. This process is called "Diffing" or "Reconciliation".
 *
 * 3. Comparison Mechanism (Diffing Algorithm):
 *    - React uses a heuristic O(n) algorithm (instead of O(n^3)).
 *    - Two elements of different types (<div> vs <span>) produce different trees -> React tears down the old tree and builds the new one.
 *    - Breadth-First: It compares level by level.
 *    - Keys: Used to identify children in lists to avoid unnecessary re-renders of siblings.
 *
 * 4. Commit Phase:
 *    - Once the differences (diffs) are calculated, React calculates the minimal set of changes needed.
 *    - It updates the REAL DOM in one batch (to minimize reflows/repaints).
 */
