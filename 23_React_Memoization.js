/**
 * 23. How does memoization work in React.
 *
 * Memoization acts as a cache to prevent unnecessary re-computations or re-renders.
 *
 * 1. React.memo (HOC):
 *    - Wraps a component.
 *    - React renders the component and compares the new props with the previous props.
 *    - If props are the same (shallow comparison), it skips rendering the component and reuses the last result.
 *
 * 2. useMemo (Hook):
 *    - Caches the RESULT of a calculation.
 *    - const value = useMemo(() => computeExpensiveValue(a, b), [a, b]);
 *    - Only re-computes if dependencies [a, b] change.
 *
 * 3. useCallback (Hook):
 *    - Caches the FUNCTION INSTANCE.
 *    - const handleClick = useCallback(() => {}, []);
 *    - Essential when passing functions to React.memo-ized child components. If you don't use useCallback, the function is recreated on every render, causing the child to see a "new" prop and re-render anyway.
 */
