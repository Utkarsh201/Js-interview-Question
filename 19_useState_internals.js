/**
 * 19. Explain how useState works internally
 *
 * React hooks rely on "Call Order" stability.
 * Internally, React holds an array (or linked list) of hook states for each component fiber.
 *
 * Mechanics:
 * 1. Initialization:
 *    - When a component renders for the first time, React creates a "Fiber" node.
 *    - It initializes a list of hooks: [ hook1, hook2, ... ].
 *    - useState(initial) stores the value at the current index.
 *
 * 2. Re-render:
 *    - React resets its internal "hook pointer" to 0.
 *    - It calls the component function.
 *    - first useState() call reads from hooks[0].
 *    - second useState() call reads from hooks[1].
 *
 * 3. setState(newValue):
 *    - Doesn't update immediately. It schedules an update.
 *    - React marks the component as "dirty".
 *    - React triggers a re-render.
 *    - During next render, the new value is retrieved.
 *
 * This is why hooks cannot be inside loops or conditions: it would break the index alignment (hook pointer).
 */
