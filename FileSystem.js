const fs = require("fs");
// Create a file using File System
fs.writeFile("FirstFile.txt", "Hello World", () => {
  console.log("File Created");
});
// Read File
fs.readFile("FirstFile.txt", "utf-8", (error, data) => {
  console.log(data);
});
// Append File ..... New data is Inserted into the File
fs.appendFile("FirstFile.txt", " Welcome to the World", () => {
  console.log("Data is inserted");
});
// Read data in the Append File
fs.readFile("FirstFile.txt", "utf-8", (error, data) => {
  console.log(data);
});
