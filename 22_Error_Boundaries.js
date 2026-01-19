/**
 * 22. What are Error Boundaries in React.
 *
 * Definition:
 * - Error Boundaries are React components that catch JavaScript errors anywhere in their child component tree, log those errors, and display a fallback UI instead of the component tree that crashed.
 *
 * Characteristics:
 * - Must be a Class Component (currently no hook equivalent effectively).
 * - Must implement `static getDerivedStateFromError()` (to update state for fallback UI) or `componentDidCatch()` (for logging).
 *
 * What they catch:
 * - Errors during rendering.
 * - Errors in lifecycle methods.
 * - Errors in constructors of the whole tree below them.
 *
 * What they DO NOT catch:
 * - Event handlers (onClick) -> use try/catch within the handler.
 * - Asynchronous code (setTimeout, requestAnimationFrame).
 * - Server-side rendering (SSR).
 * - Errors thrown in the boundary itself.
 */

/* Example:
class ErrorBoundary extends React.Component {
  state = { hasError: false };

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    logErrorToService(error, info);
  }

  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }
    return this.props.children; 
  }
}
*/
