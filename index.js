const http = require("http");
const { mainPageMarkup, submitSuccessMarkup } = require("./views");

const { PORT = 3000 } = process.env;

let todos = [];
const server = http.createServer((req, res) => {
  if (req.url === "/" && req.method === "GET") {
    res.writeHead(200, {
      "Content-Type": "text/html",
    });

    res.end(mainPageMarkup);
  }

  if (req.url === "/submit" && req.method === "POST") {
    let body = "";
    req.on("data", (chunk) => {
      body += chunk;
    });
    req.on("end", () => {
      todos.push(body.split("=")[1]);

      res.writeHead(200, {
        "Content-Type": "text/html",
      });

      res.end(submitSuccessMarkup);
    });
  }
});

server.listen(PORT);
