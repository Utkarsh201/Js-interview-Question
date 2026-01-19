/**
 * 24. SSR vs CSR with examples and use-cases
 *
 * CSR (Client-Side Rendering) - e.g., standard Create React App:
 * - Server sends an empty HTML shell (<div id="root"></div>) and a large JS bundle.
 * - Browser executes JS -> Fetches Data (API) -> Generates DOM.
 * - Pros: Rich interactions, fast page transitions (SPA feels native), cheap server (static/CDN).
 * - Cons: Slow initial load (FCP - First Contentful Paint), Bad for SEO (crawlers see empty shell initially).
 *
 * SSR (Server-Side Rendering) - e.g., Next.js (getServerSideProps):
 * - Server executes React code, runs fetch calls, and generates full HTML string.
 * - Sends complete HTML to browser. Browser displays it immediately.
 * - "Hydration": JS bundle loads afterwards and attaches event listeners to the existing HTML.
 * - Pros: Great SEO, Fast First Contentful Paint.
 * - Cons: Higher server load, slower TTFB (Time to First Byte) because server must do work before sending anything.
 *
 * SSG (Static Site Generation) - A middle ground:
 * - HTML generated at BUILD time. Fast as CSR, SEO like SSR. Good for blogs/marketing sites.
 */
