const fs = require("fs");
const http = require("http");
const path = require("path");

//Create const for path
//Where do we have to go and url (endpoint)
//__dirname .. endpoint

//respond to this
//fs.readFile and read path
//Get answer - error or file

//If error do this (error message)
//Else give the file

const router = (request, response) => {
    const endpoint = request.url;
    const filePath = path.join(__dirname, '..', 'public', endpoint);

    if (endpoint === "/") {

      fs.readFile(filePath, (error, file)=>{
        if (error) {
          response.writeHead(500, { 'content-type': 'text/html' });
          response.end("Sorry we had a problem with our server");
        }
        else {
          response.writeHead(200, { 'content-type': 'text/html' });
          response.end(file);
        }
      });


    }

  };








module.exports = router;
