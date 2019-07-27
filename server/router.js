const fs = require("fs");
const path = require("path");
const url = require("url");
const querystring = require("querystring");
const search = require("./search");


const router = (request, response) => {
    console.log('this is request: ', request)
  console.log('this is request.url', request.url)
  let endpoint = request.url;
  if (endpoint === "/") {
    endpoint = "/public/index.html";
  }
console.log('this is __dirname: ', __dirname)
console.log('this is endpoint: ', endpoint)
  const filePath = path.join(__dirname, "..", endpoint);

  console.log('this is file path: ', filePath)

  const extension = endpoint.split(".")[1];
  const extensionType = {
    html: "text/html",
    css: "text/css",
    js: "text/javascript",
    ico: "image/x-icon",
    json: "application/json",
    gif: "image/gif"
  };

  if (endpoint.startsWith("/public")) {
    fs.readFile(filePath, (error, file) => {
      if (error) {
        response.writeHead(500, { "content-type": "text/html" });
        response.end("Sorry we had a problem with our server");
      } else {
        response.writeHead(200, { "content-type": extensionType[extension] });
        response.end(file);
      }
    });
  }

  if (endpoint.startsWith("/search")) {
    //example search endpoint : /search?q=fluffyunicorn
    //splits url into different parts and extracts searchTerm 'fluffyunicorn'
    let urlObject = url.parse(endpoint);
    let queryObject = querystring.parse(urlObject.query);
    let searchTerm = queryObject.q;
    let result = search(searchTerm);
    response.writeHead(200, { "content-type": "application/json" });
    response.end(JSON.stringify(result));
  }
};

module.exports = router;
