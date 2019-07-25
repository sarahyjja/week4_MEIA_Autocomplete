const fs = require("fs");
const http = require("http");
const path = require("path");

const router = (request, response) => {
  let endpoint = request.url;
  if(endpoint === '/'){
    endpoint = '/public/index.html'
   }

    const filePath = path.join(__dirname, '..', endpoint);

    if(endpoint.startsWith("/public")){
    fs.readFile(filePath, (error, file) => {
      if (error) {
        response.writeHead(500, { 'content-type': 'text/html' });
        response.end("Sorry we had a problem with our server");
      } else {
        response.writeHead(200, { 'content-type': 'text/html' });
        response.end(file);
      }
    })
  }
}
module.exports = router;
