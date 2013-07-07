var express = require('express');

var app = express.createServer(express.logger());

fs.appendFile('index.html', 'Hello World From FS Index.html', function (err) {
  if (err) throw err;
  console.log('The "data to append" was appended to file!');
});



app.get('/', function(request, response) {
  response.send('Hello World2!');
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
