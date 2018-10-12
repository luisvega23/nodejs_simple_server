/**
 ** Add method
 ** This method takes the query parameter from the url and response stream, in order to go throw the params
 ** and make the add operation, and to send the response on the response stream.
 **/
function add (query, response) {
  var suma = 0
  for (var propName in query) {
      var splitted = query[propName]
      if(isNumeric(splitted)) {
        //Ok, it's a number
        var number = Number(splitted)
        suma += number
      } else {
        //It's not a number, so we show an error message and sends to the client
        response.writeHead(400, {'Content-Type': 'application/json'})
        response.end(JSON.stringify({result:'error, el input debe ser numerico'}))
      }
  }
  //If everithing was OK, we send code 200 response, using json format
  response.writeHead(200, {'Content-Type': 'application/json'})
  response.end(JSON.stringify({result:suma}))
}

function substract (query, response) {
  var resta = 0;
  var first_n = 0;
  var c = 0;
  for (var propName in query) {
    var splitted = query[propName];
    if(isNumeric(splitted) && c === 0) {
      var number = Number(splitted);
      first_n = number;
      c++;
    } 
    else if (isNumeric(splitted) && c != 0) {
      var number = Number(splitted);
      resta -= number;
    }
    else{
      response.writeHead(400, {'Content-Type': 'application/json'});
      response.end(JSON.stringify({result:'error, el input debe ser numerico'}));
    }
  }
  resta += first_n;
  response.writeHead(200, {'Content-Type': 'application/json'});
  response.end(JSON.stringify({result:resta}));
}


function fib(query, response){
  var a = 1;
  var b = 0;
  var temp = 0;
  for (var propName in query){
    var splitted = query[propName];
    if(isNumeric(splitted)) {
      var number = Number(splitted);
    } else{
        response.writeHead(400, {'Content-Type': 'application/json'});
        response.end(JSON.stringify({result:'error, el input debe ser numerico'}));
    }
  }
  if (number <= 0){
    b = 0;
  }
  else if (number === 1) {
    b = 1;
  }
  else {
    for (var i = number; i>0 ; i--){
      temp = a;
      a = a + b;
      b = temp;
      console.log('a = '+a);
      console.log('b = '+b);
      console.log('temp = '+temp);
    }    
  }
  response.writeHead(200, {'Content-Type': 'application/json'})
  response.end(JSON.stringify({result:b})) 
}

/**
 ** isNumeric returns true if input is a number. This can be done using the oppsite behaviour from isNaN function
 **/

function isNumeric(num) {
  //isNaN returns false if the input is a number, true otherwise
  return !isNaN(num)
}

//In this line we export the functions to be used in other javascript files. We must import this module with 'require' signature
module.exports.add = add
module.exports.substract = substract;
module.exports.fib = fib;

