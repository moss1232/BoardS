const http = require("http");
const fs = require("fs");
const httpPort = 5000;

http
  .createServer((req, res) => {
    fs.readFile("./dist/test.html", "utf-8", (err, content) => {
      if (err) {
        console.log('We cannot open "index.html" file.');
      }
      res.writeHead(200, {
        "Content-Type": "text/html; charset=utf-8",
      });
      res.end(content);
    });
  })
  .listen(httpPort, () => {
    console.log("Server listening on: http://127.0.0.1:%s", httpPort);
  });
