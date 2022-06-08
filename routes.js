const { mainPageMarkup, submitSuccessMarkup } = require("./views");

let todos = [];

function getMainPage() {
  res.writeHead(200, {
    "Content-Type": "text/html",
  });

  res.end(mainPageMarkup);
}

function postForm() {
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

module.exports = {
    getMainPage, postForm
}