var express = require('express');
var fs = require('fs');

var app = express.createServer(express.logger());

var readhtm =  function(pagename){
	var buffer = new Buffer(fs.readFileSync(pagename));
	return buffer.toString("utf-8");
}

app.get('/', function(request, response) {
  response.send(readhtm("index.html"));
});

var port = process.env.PORT || 8000;
app.listen(port, function() {
  console.log("Listening on " + port);
});