// Import the fs module to handle file system operations
const fs = require("fs");

// Step 1: Demonstrate synchronous execution
console.log("1. Synchronous operation starts.");

// Step 2: Demonstrate an asynchronous callback using fs.readFile
fs.readFile("ex.txt", "utf8", (err, data) => {
  if (err) {
    console.error("Error reading file:", err);
    return;
  }
  console.log("3. File content (from callback):", data);
});

// Step 3: Show that the next line runs without waiting for the callback
console.log("2. Synchronous operation ends.");

// Step 4: Demonstrate the event loop using setTimeout
setTimeout(() => {
  console.log("4. Timeout callback executed after 2 seconds.");
}, 2000);

// Step 5: Show that the event loop allows other operations to continue
console.log("5. Event loop continues running while waiting for callbacks.");
