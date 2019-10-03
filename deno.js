var http = require('http');
var url = require('url');
var fs = require('fs');
const PORT = 3000
http.createServer((req, res) => {
  var q = url.parse(req.url, true);
  var filename = "." + q.pathname;
  fs.readFile(`${filename}.html`, (err, data) => {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    res.end();
  });
}).listen(PORT)