/**
 * 35. Principles of Functional Programming
 *
 * FP is a paradigm treating computation as the evaluation of mathematical functions and avoiding changing-state and mutable data.
 *
 * Core Principles:
 * 1. Pure Functions:
 *    - Given same input, always return same output.
 *    - No side effects (no API calls, no modifying global variables).
 *
 * 2. Immutability:
 *    - Don't change data. Create new copies with changes.
 *    - const newObj = { ...oldObj, key: 'value' };
 *
 * 3. First-Class Functions:
 *    - Functions are variables. Can be passed as arguments or returned.
 *
 * 4. Higher-Order Functions:
 *    - Functions that take other functions as args (map, filter, reduce).
 *
 * 5. Composition:
 *    - Building complex logic by combining simple functions.
 *    - pipe(trim, lowercase, save)(input).
 */
