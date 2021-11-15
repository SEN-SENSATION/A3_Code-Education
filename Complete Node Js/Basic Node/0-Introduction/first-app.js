const fs = require("fs");

console.log("Hello form node.js"); // Log to terminal
fs.writeFileSync("./hello.txt", "Hello from node.Js!"); // Create file with the word "Hello from node.Js"
