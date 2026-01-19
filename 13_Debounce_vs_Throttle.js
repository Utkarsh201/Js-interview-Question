/**
 * 13. Difference between debounce and throttle
 *
 * Debounce:
 * - "Wait for a pause."
 * - Groups a burst of events into a single execution.
 * - The function executes only after X milliseconds have passed WITHOUT the event firing.
 * - Use case: Autocomplete search box (wait for user to stop typing), resizing window (wait until done).
 *
 * Throttle:
 * - "Execute at a steady pace."
 * - Guarantees the function execution at a regular interval (e.g., once every 100ms), regardless of how many times the event fires.
 * - Use case: Scrolling (update UI every 100ms while scrolling), infinite scroll loading APIs, game loop inputs.
 *
 * Visual Analogy:
 * - Debounce: An elevator door that keeps waiting if people keep entering. It only closes and goes up when no one has entered for 5 seconds.
 * - Throttle: A revolving door or a metronome. It lets one person in every 5 seconds, no matter how many are waiting.
 */
