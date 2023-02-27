const fs = require("fs");
const http = require("http");
const server = http.createServer();

// Another Streaming Method
server.on("request", (req, res) => {
  const rstream = fs.createReadStream("Stream.txt");
  rstream.pipe(res);
});
server.listen("4000", "127.0.0.1", () => {
  console.log("Listening to the port 4000");
});
