/**
 * 25. What is Module Federation?
 *
 * Context:
 * - Introduced in Webpack 5.
 *
 * Definition:
 * - A method to allow a JavaScript application to dynamically load code from another application at runtime.
 * - It allows multiple independent builds to form a single application.
 *
 * Key Feature:
 * - It solves the problem of code sharing in Micro-Frontends.
 * - Instead of publishing a component as an NPM package (which requires version bumps and redeployment of all consumers on update), App A can expose a component that App B imports via URL at runtime.
 * - If App A deploys a new version, App B gets it instantly on refresh without rebuilding App B.
 *
 * Config looks like:
 * new ModuleFederationPlugin({
 *   name: 'app1',
 *   exposes: { './Button': './src/Button' },
 *   remotes: { app2: 'app2@http://localhost:3002/remoteEntry.js' }
 * })
 */
