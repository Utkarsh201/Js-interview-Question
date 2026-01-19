/**
 * 31. How to measure performance in a React application.
 *
 * 1. React Profiler (DevTools Extension):
 *    - Records rendering sessions.
 *    - Shows flame graph of components.
 *    - Highlights which components rendered, why they rendered (props changed, hooks changed), and how long they took.
 *
 * 2. <Profiler> API (Programmatic):
 *    - Wrap parts of tree: <Profiler id="App" onRender={callback}>
 *    - Callback receives commit time, render duration. Useful for sending metrics to analytics (Datadog/Sentry).
 *
 * 3. Chrome DevTools (Lighthouse / Performance):
 *    - Measures Core Web Vitals (LCP, CLS, FID).
 *    - Generic JS execution time.
 *
 * 4. checking "Why Did You Render":
 *    - A library (`@welldone-software/why-did-you-render`) that monkey-patches React to console log unavoidable re-renders.
 */
