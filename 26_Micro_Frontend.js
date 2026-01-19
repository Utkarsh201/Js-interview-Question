/**
 * 26. What is Micro-Frontend Architecture?
 *
 * Concept:
 * - Applying the Microservices concept to the Frontend.
 * - Instead of a giant "Monolith" React app managed by 50 developers, you split the UI into smaller, vertical apps (e.g., "Checkout Team", "Search Team", "User Profile Team").
 *
 * Implementation Styles:
 * 1. Build-time integration: Publishing components as NPM packages (slow).
 * 2. Run-time integration: Using IFrames (strong isolation, hard communication).
 * 3. Run-time integration (JS): Webpack Module Federation (current standard). Hosting shell app that loads fragments.
 *
 * Pros:
 * - Independent deployments (Team A doesn't break Team B).
 * - Technology agnostic (Team A uses React, Team B uses Vue - though risky for bundle size).
 * - Scalability.
 *
 * Cons:
 * - Complex infrastructure.
 * - Shared dependencies management.
 * - Inconsistent UI/UX if not governed strictly.
 */
