/**
 * 5. Implement auto-retry for promises
 *
 * Create a function that retries a promise-returning function N times upon failure.
 */

async function retry(fn, retries = 3, delay = 1000) {
  try {
    return await fn();
  } catch (error) {
    if (retries <= 0) {
      throw error;
    }

    // Wait for the specified delay before retrying
    await new Promise((resolve) => setTimeout(resolve, delay));

    console.log(`Retrying... attempts left: ${retries}`);
    return retry(fn, retries - 1, delay);
  }
}

// Example Usage:
let attempts = 0;
const unstableApi = () => {
  return new Promise((resolve, reject) => {
    attempts++;
    if (attempts < 3) {
      reject("Failed connection");
    } else {
      resolve("Success data");
    }
  });
};

retry(unstableApi, 5, 500)
  .then((data) => console.log(data)) // 'Success data'
  .catch((err) => console.error(err));
