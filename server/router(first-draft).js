const fs = require('fs');
const path = require('path');
const querystring=require('querystring');
const url=require('url');
const search=require('./search');

const router = (request, response) => {
let endpoint = request.url

if(endpoint === '/'){
  endpoint = '/public/index.html'
 }

if(endpoint.startsWith('/public')){
  fs.readFile(path.join(__dirname, '..', endpoint), (error, file) => {
      if(error){
        response.end()
      } else {
        response.writeHead(200)
        response.end(file)
      }
    })
 }
  //example search endpoint : /search?q=fluffyunicorn
  if (endpoint.startsWith('/search')){
  //data comes from get XMLHTTPRequest in event listener on client side
  //get unparsed query
  //separates url into different parts as an object, which will have a property query:'q=fluffyunicorn'
  let urlObject=url.parse(endpoint);
  //parses query string from urlObject into an object {q: 'fluffyunicorn'}
  let queryObject=querystring.parse(urlObject.query);
  //takes the value ('fluffyunicorn') of the 'q' property of queryObject
  let searchTerm=queryObject.q;
  //calls search function, passing in the searchTerm. it returns a filtered array.
  let result=search(searchTerm);
  //tells the browser to expect a json file
  response.writeHead(200,{'content-type':'application/json'})
  //sends the response with a JSON version of the array of results
  response.end(JSON.stringify(result));

 }
}

module.exports = router
