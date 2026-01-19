/**
 * 8. Throttling implementation
 *
 * Throttling ensures that a function is called at most once during a specified time interval.
 * It's useful for events that fire continuously like scrolling or resizing.
 */

function throttle(func, limit) {
  let inThrottle;

  return function (...args) {
    const context = this;

    if (!inThrottle) {
      func.apply(context, args);
      inThrottle = true;

      setTimeout(() => {
        inThrottle = false;
      }, limit);
    }
  };
}

// Extended Version (ensures the last call is also executed if triggered during the wait)
function throttleExtended(func, limit) {
  let lastFunc;
  let lastRan;

  return function (...args) {
    const context = this;
    if (!lastRan) {
      func.apply(context, args);
      lastRan = Date.now();
    } else {
      clearTimeout(lastFunc);
      lastFunc = setTimeout(
        function () {
          if (Date.now() - lastRan >= limit) {
            func.apply(context, args);
            lastRan = Date.now();
          }
        },
        limit - (Date.now() - lastRan),
      );
    }
  };
}

// Example Usage:
// const onScroll = () => console.log('Scrolled!');
// const throttledScroll = throttle(onScroll, 1000);
// window.addEventListener('scroll', throttledScroll);
