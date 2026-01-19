/**
 * 28. How to control tab order in DOM (explain tabIndex)
 *
 * Accessibility (a11y) relies on keyboard navigation using the Tab key.
 *
 * Natural Order:
 * - Elements are focused in the order they appear in the DOM.
 * - Native interactive elements (button, input, a, select) are focusable by default.
 * - Non-interactive (div, span) are not.
 *
 * tabIndex Attribute:
 * 1. tabIndex="0":
 *    - Makes a non-interactive element focusable.
 *    - Inserts it into the natural tab order of the document.
 *    - Use case: Custom button made of a div.
 *
 * 2. tabIndex="-1":
 *    - Makes element focusable programmatically (.focus()), but NOT reachable via Tab key.
 *    - Use case: Managing focus inside a Modal (focus trap), or error messages to scroll to.
 *
 * 3. tabIndex="1" (or > 0):
 *    - Anti-pattern!
 *    - Forces the element to the front of the tab order, ignoring DOM structure.
 *    - Confusing for screen reader users and creates "jumping" logic. Avoid this.
 */
