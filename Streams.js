const fs = require("fs");
const http = require("http");
const server = http.createServer();
// Data is reading Without Streaming
// server.on("request", (req, res) => {
//   fs.readFile("Stream.txt", "utf-8", (error, data) => {
//     res.end(data);
//   });
// });
// server.listen("2000", "127.0.0.1", () => {
//   console.log("Listening to the Port 2000");
// });

// Data is reading With Streaming
server.on("request", (req, res) => {
  const rstream = fs.createReadStream("Stream.txt");
  rstream.on("data", (Data) => {
    res.end(Data);
  });
  rstream.on("error", () => {
    console.log(error);
    res.end("File Not Found");
  });
});
server.listen("5000", "127.0.0.1", () => {
  console.log("listening to the port 5000");
});
