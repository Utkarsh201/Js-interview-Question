/**
 * 7. Debouncing implementation
 *
 * Debouncing limits the rate at which a function acts. It ensures that a function
 * is not called again until a certain amount of time has passed since the last call.
 */

function debounce(func, delay) {
  let timeoutId;

  return function (...args) {
    const context = this;

    // Clear the existing timer
    if (timeoutId) {
      clearTimeout(timeoutId);
    }

    // Set a new timer
    timeoutId = setTimeout(() => {
      func.apply(context, args);
    }, delay);
  };
}

// Example Usage:
// const searchInput = document.getElementById('search');
// const performSearch = (query) => console.log('Searching for:', query);
// const debouncedSearch = debounce(performSearch, 500);

// searchInput.addEventListener('input', (e) => debouncedSearch(e.target.value));
// User types 'A', timer starts.
// User types 'B' (within 500ms), timer resets.
// User pauses, timer fires after 500ms -> "Searching for: AB"
