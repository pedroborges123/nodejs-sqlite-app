var http = require('http');
var url = require('url');

http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    //console.log(req);
    var q = url.parse(req.url, true).query;
    console.log(q.num);
    res.end('Result is: ' + calc(q.num));
}).listen(8085);
