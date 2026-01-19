/**
 * 27. Server-Side Rendering techniques to improve SEO
 *
 * SEO relies on crawlers (Googlebot) being able to parse content efficiently.
 *
 * Techniques:
 * 1. Pre-rendering:
 *    - Serve fully formed HTML so the bot sees content immediately, not "Loading...".
 *
 * 2. Meta Tags (Dynamic):
 *    - Ensure the server injects correct Open Graph (OG) tags, Title, and Description based on the page content (e.g., Product Name) before sending the HTML.
 *    - Doing this in `useEffect` (Client Side) is too late for social media scrapers (Twitter cards, Facebook previews).
 *
 * 3. Structured Data (JSON-LD):
 *    - Injecting schema markup script tags in the initial HTML.
 *
 * 4. Robots.txt & Sitemaps:
 *    - Generating dynamic sitemaps on the server based on database entries.
 *
 * 5. Performance (Core Web Vitals):
 *    - SSR improves LCP (Largest Contentful Paint). Better metrics = Better Ranking.
 */
