/**
 * 9. Execute N async tasks in series
 *
 * Execute an array of async tasks one after another (sequentially).
 */

async function executeInSeries(tasks) {
  const results = [];

  for (const task of tasks) {
    // Await the current task before moving to the next
    const result = await task();
    results.push(result);
  }

  return results;
}

// Using Array.reduce
function executeInSeriesReduce(tasks) {
  return tasks.reduce((promiseChain, currentTask) => {
    return promiseChain.then((results) => {
      return currentTask().then((result) => [...results, result]);
    });
  }, Promise.resolve([]));
}

// Example Usage:
const asyncTask = (id) => () =>
  new Promise((resolve) => {
    setTimeout(() => {
      console.log(`Task ${id} done`);
      resolve(id);
    }, 500);
  });

const myTasks = [asyncTask(1), asyncTask(2), asyncTask(3)];

executeInSeries(myTasks).then((res) => console.log("All done:", res));
// Output:
// Task 1 done (after 500ms)
// Task 2 done (after 1000ms)
// Task 3 done (after 1500ms)
// All done: [1, 2, 3]
