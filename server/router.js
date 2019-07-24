const fs = require('fs')
const path = require('path')

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
}

module.exports = router
