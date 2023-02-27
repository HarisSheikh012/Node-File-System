// Events Create
const EventEmitter = require("events");
const event = new EventEmitter();
// Events Define
event.on("saymyname", () => {
  console.log("Your name is Haris");
});
// Multiple Call Backs Events Functions
event.on("saymyname", () => {
  console.log("Your name is Sheikh");
});
// Events Call
event.emit("saymyname");

// Parametrs Events
event.on("CheckPage", (code, message) => {
  console.log(`Your Status code is ${code} and message is ${message}`);
});
// Parameters Events Call
event.emit("CheckPage","200","ok");