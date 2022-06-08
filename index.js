const http = require("http");
const { getMainPage, postForm } = require("./routes");

const { PORT = 3000 } = process.env;

const server = http.createServer((req, res) => {
  if (req.url === "/" && req.method === "GET") {
    getMainPage(req, res)
  }

  if (req.url === "/submit" && req.method === "POST") {
    postForm(req, res)
  }
});

server.listen(PORT);
