/**
 * 6. Throttle promises by batching
 *
 * Execute a large list of promises in batches (e.g., only 5 at a time) to avoid overloading a server.
 * This is effectively implementing a concurrency limit.
 */

async function throttledPromises(tasks, batchSize) {
  const results = [];

  // Helper to run a batch
  for (let i = 0; i < tasks.length; i += batchSize) {
    const batch = tasks.slice(i, i + batchSize);

    // Map tasks to their executions
    const batchPromises = batch.map((task) => task());

    // Wait for the current batch to complete before starting the next one.
    // We use allSettled to ensure potential failures don't stop the whole process,
    // or Promise.all if we want strict success.
    const batchResults = await Promise.all(batchPromises);
    results.push(...batchResults);

    console.log(`Batch ${i / batchSize + 1} completed`);
  }

  return results;
}

// Advanced Version: Promise Pool (Running exactly N at a time, continuously)
async function promisePool(functions, limit) {
  const results = [];
  const executing = [];

  for (const fn of functions) {
    const p = Promise.resolve().then(() => fn());
    results.push(p);

    if (limit <= functions.length) {
      const e = p.then(() => executing.splice(executing.indexOf(e), 1));
      executing.push(e);

      if (executing.length >= limit) {
        await Promise.race(executing);
      }
    }
  }

  return Promise.all(results);
}

// Example Usage:
const createTask = (id) => () =>
  new Promise((res) => setTimeout(() => res(id), 1000));
const tasks = Array.from({ length: 10 }, (_, i) => createTask(i));

throttledPromises(tasks, 3).then(console.log); // [0, 1, 2, ..., 9]
