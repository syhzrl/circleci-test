const http = require('http');

http.createServer(function (req, res) {
    res.write('ITS WORKING 2');
    res.end();
}).listen(8080, '0.0.0.0'); 
