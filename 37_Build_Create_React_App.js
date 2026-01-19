/**
 * 37. How would you build a tool like Create React App.
 *
 * CRA is essentially a CLI tool that scaffolds a project with a pre-configured build setup.
 *
 * Steps to build "My-CRA":
 *
 * 1. CLI Entry Point:
 *    - Node.js script using `commander` or `yargs` to parse arguments (e.g., `my-cra create app-name`).
 *
 * 2. Template Storage:
 *    - Have a folder structure (src, public, package.json) stored as templates inside the tool.
 *
 * 3. Scaffolding:
 *    - Use file system (fs) to copy template files to the user's target directory.
 *
 * 4. Dependency Management:
 *    - Spawn a child process to run `npm install` or `yarn` in the new folder.
 *
 * 5. The "Eject" Magic (react-scripts):
 *    - CRA hides Webpack config in a package called `react-scripts`.
 *    - Your generated package.json scripts should point to your tool:
 *      "start": "my-scripts start"
 *    - Your tool's "start" command runs Webpack Dev Server with your distinct config.
 */
