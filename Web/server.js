var http = require('http');
var url = require('url');

function start(route, handle) {
    http.createServer(function onRequest(req, res) {
        var pathName = url.parse(req.url).pathname;
        if (pathName === '/favicon.ico')
            return;
        console.log('Request for ' + pathName + ' received!');
        route(handle, pathName);
        res.end();
    }).listen(8000);

    console.log("Server is started !");
}

exports.start = start;