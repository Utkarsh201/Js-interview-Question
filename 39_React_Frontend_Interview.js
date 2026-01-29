/**
 * React & Frontend Interview Questions
 *
 * 1. What is the difference between Controlled and Uncontrolled components?
 *
 *    Controlled Component:
 *    - The component's state is controlled by React.
 *    - The form data is handled by a React component (via state).
 *    - Changes to the input are handled by an onChange handler that updates the state.
 *    - Single Source of Truth: The state drives the input value.
 *    - Example: <input value={value} onChange={handleChange} />
 *
 *    Uncontrolled Component:
 *    - The form data is handled by the DOM itself.
 *    - We use a ref (useRef) to access the DOM value when needed (e.g., on submit).
 *    - Easier to integrate with non-React code.
 *    - Example: <input ref={inputRef} /> then accessing inputRef.current.value.
 *
 * ---------------------------------------------------
 *
 * 2. What triggers a re-render in a React component?
 *
 *    A re-render can be triggered by:
 *    - State Change: Calling useState setter or this.setState.
 *    - Props Change: Receiving new props from a parent.
 *    - Parent Re-render: By default, if a parent re-renders, all children re-render.
 *    - Context Change: If the component consumes a context and the provider value changes.
 *    - Hooks Change: Changes in custom hooks or hooks like useReducer.
 *
 * ---------------------------------------------------
 *
 * 3. How can we prevent unnecessary re-renders?
 *    (Reference: 23_React_Memoization.js)
 *
 *    - React.memo:
 *      Higher Order Component that wraps a functional component. It memoizes the rendered output via shallow comparison of props.
 *      If props haven't changed, React skips rendering that component.
 *
 *    - useMemo:
 *      Memoizes a calculated value. Prevents expensive calculations from running on every render unless dependencies change.
 *      Ex: const memoizedValue = useMemo(() => computeExpensiveValue(a, b), [a, b]);
 *
 *    - useCallback:
 *      Memoizes a callback function definition. Useful when passing callbacks to optimized children (wrapped in React.memo) to prevent function reference inequality from breaking memoization.
 *      Ex: const memoizedCallback = useCallback(() => { doSomething(a); }, [a]);
 *
 * ---------------------------------------------------
 *
 * 4. What is Memoization?
 *    (Reference: 23_React_Memoization.js)
 *
 *    - Memoization is an optimization technique used primarily to speed up computer programs by storing the results of expensive function calls.
 *    - When the same inputs occur again, the cached result is returned instead of recomputing.
 *    - In React, it's used to avoid unnecessary re-rendering of components or re-execution of logic.
 *
 * ---------------------------------------------------
 *
 * 5. What is the difference between useState and useEffect?
 *
 *    - useState:
 *      Used for State Management. It allows you to declare state variables in functional components.
 *      It preserves values between renders and triggers a re-render when updated.
 *
 *    - useEffect:
 *      Used for Side Effects. It handles operations like data fetching, subscriptions, timers, or manual DOM manipulations.
 *      It runs after the render phase. You define when it runs via the dependency array [].
 *
 * ---------------------------------------------------
 *
 * 6. Does setState update the state immediately? How do we access the current state right after an update?
 *    (Reference: 19_useState_internals.js)
 *
 *    - No, state updates are asynchronous (batched) in React standard event handlers.
 *      React schedules an update and re-renders the component.
 *      The state variable will not reflect the new value within the same function scope immediately after setting it.
 *
 *    - How to access the new state?
 *      1. useEffect: Use a useEffect hook with the state variable in the dependency array. It runs immediately after the render reflects the new state.
 *         useEffect(() => { console.log(state); }, [state]);
 *
 *      2. Functional Update: If you need the current state to compute the next state, use the functional form.
 *         setState(prev => prev + 1);
 *
 *      3. (Class Components Only): setState provides a callback as a second argument.
 *         this.setState({ val: 2 }, () => { console.log(this.state.val); });
 */
