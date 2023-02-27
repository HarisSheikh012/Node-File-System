// Json Start
const data = {
  name: "Haris",
  age: 24,
  channel: "Tech Support",
};
// Convert Object to Json
// const stringifydata = JSON.stringify(data);
// console.log(stringifydata);
// // Convert Json to Object
// const parsedata = JSON.parse(stringifydata);
// console.log(parsedata);
// End

// Task

// 1 Convert to Json
// 2 Dusre file my add krna
// 3 Read file
// 4 Again Wapis json object my convert kr dena
// 5 Console.log

console.log(data,"The Original Data is ");

// Task Started

// 1 Uper Wala hi object liya ha
const JsonData = JSON.stringify(data); // 1 Completed
console.log(JsonData, "Object Convert to JSON Data");

// 2 Dusre File Me Add krna
const fs = require("fs");
fs.writeFile("JsonFile.JSON", JsonData, (error) => {
  // 2 Completed
  console.log(error);
});

// 3 Read File
fs.readFile("JsonFile.JSON", "utf-8", (error, TheData) => {
  console.log(TheData, "The Data is Reading from other File"); // Completed
  // 4 Again Wapis json object my convert kr dena
  const OriginalData = JSON.parse(TheData); // 4 Completed
  // 5 Console.log
  console.log(OriginalData, "Original data"); // Completed
});

// Task Completed