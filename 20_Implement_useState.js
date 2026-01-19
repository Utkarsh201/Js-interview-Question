/**
 * 20. Implement a basic version of useState
 *
 * A simplified simulation of how React preserves state using closures and a global/module-level store.
 */

// Module pattern to simulate the React Runtime
const ReactPolyfill = (() => {
  let hooks = []; // Stores states
  let index = 0; // Current hook pointer

  function useState(initialValue) {
    const _idx = index; // Capture local index for THIS hook call

    // If state doesn't exist (first render), initialize it
    if (hooks[_idx] === undefined) {
      hooks[_idx] = initialValue;
    }

    const setState = (newValue) => {
      const val =
        typeof newValue === "function" ? newValue(hooks[_idx]) : newValue;
      hooks[_idx] = val;
      render(); // Trigger re-render
    };

    index++; // Move to next hook for the next call in the component
    return [hooks[_idx], setState];
  }

  function useEffect(cb, depArray) {
    const oldDeps = hooks[index];
    let hasChanged = true;

    if (oldDeps) {
      hasChanged = depArray.some((dep, i) => !Object.is(dep, oldDeps[i]));
    }

    if (hasChanged) {
      cb();
    }

    hooks[index] = depArray;
    index++;
  }

  // Reset index before every render so hooks align correctly
  function workLoop() {
    index = 0;
    // In real React, this calls the component
  }

  return { useState, useEffect, workLoop };
})();

// Example Usage Simulation:
// Define Component
function Counter() {
  const [count, setCount] = ReactPolyfill.useState(0);
  const [text, setText] = ReactPolyfill.useState("foo");

  console.log("Render:", { count, text });

  return {
    click: () => setCount(count + 1),
    type: (txt) => setText(txt),
  };
}

// Function to simulate render cycle
let App;
function render() {
  ReactPolyfill.workLoop();
  App = Counter();
}

// 1. Initial Render
render();
// Output: Render: { count: 0, text: 'foo' }

// 2. Update State
App.click();
// Inside setState -> calls render()
// Output: Render: { count: 1, text: 'foo' }

App.type("bar");
// Output: Render: { count: 1, text: 'bar' }
