var express = require('express');
var app = express.createServer(express.logger());

app.get('/index.html', function(req, res){
  var body = 'Hello World from the Index page!';
  res.setHeader('Content-Type', 'text/plain');
  res.setHeader('Content-Length', body.length);
  res.end(body);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
