/**
 * 29. What is Event Capturing and Bubbling
 *
 * When you click an element (e.g., a button inside a div inside body), the event doesn't just happen on the button. It traverses the DOM tree.
 *
 * Phase 1: Capturing Phase (Trickling)
 * - The event travels DOWN from Window -> Document -> Body -> Div -> Button.
 * - Rarely used, but can be listened to via `addEventListener('click', fn, true)` (useCapture = true).
 *
 * Phase 2: Target Phase
 * - The event reaches the target element (Button).
 *
 * Phase 3: Bubbling Phase
 * - The event travels UP from Button -> Div -> Body -> Document -> Window.
 * - This is the default for `onClick` or `addEventListener('click', fn, false)`.
 *
 * Event Delegation:
 * - Because of bubbling, you can put one listener on a parent <ul> to handle clicks for 100 <li> children.
 * - You check `event.target` to see which child was actually clicked.
 *
 * Stopping:
 * - `event.stopPropagation()`: Stops the event from traveling further (up or down).
 */
