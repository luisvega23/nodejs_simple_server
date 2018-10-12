const http = require('http')
const url = require('url')
const math_ops = require('./math_operations')

var server = http.createServer(function (request, response) {
  const parsedUrl = url.parse(request.url, true)

  if(parsedUrl.pathname === '/suma') {
    math_ops.add(parsedUrl.query, response)
  }
  else if (parsedUrl.pathname === "/resta") {
    math_ops.substract(parsedUrl.query, response);
  }
  else{
    response.write("no es suma ni resta");
  }
})

server.listen(9000)
