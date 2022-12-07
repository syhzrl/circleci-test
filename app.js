const http = require('http');

http.createServer(function (req, res) {
    res.write('EDITED FOR THE 3RD TIME');
    res.end();
}).listen(8080, '0.0.0.0'); 
