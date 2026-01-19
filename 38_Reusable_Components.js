/**
 * 38. How do you structure reusable UI components in React.
 *
 * Best Practices:
 *
 * 1. Atomic Design Pattern:
 *    - Atoms: Button, Input, Icon.
 *    - Molecules: SearchBar (Input + Button).
 *    - Organisms: Header (Logo + SearchBar + Nav).
 *    - Templates: Layouts.
 *
 * 2. Headless Components (Logic vs UI):
 *    - Separate logic (hooks) from presentation.
 *    - useToggle() hook vs <Toggle /> UI.
 *
 * 3. Composition over Inheritance:
 *    - Use `children` prop heavily.
 *    - <Card><CardHeader /><CardBody /></Card> is better than <Card title="..." body="..." />.
 *
 * 4. API Design Check:
 *    - Polymorphism: Using `as` prop (render a Button as an <a> tag).
 *    - Styling: Allow `className` or `style` overrides, or valid Theme tokens.
 *
 * 5. Directory Structure:
 *    /components
 *      /Button
 *        Button.jsx
 *        Button.test.js
 *        Button.stories.js (Storybook)
 *        index.js
 */
