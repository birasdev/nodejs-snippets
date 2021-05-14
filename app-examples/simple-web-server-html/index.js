const http = require('http');
const url = require('url');
const path = require('path');
const fs = require('fs');

const PORT = 1337;

var mimeTypes = {
    "html": "text/html",
    "jpeg": "image/jpeg",
    "jpg": "image/jpeg",
    "png": "image/png",
    "js": "text/js",
    "css": "text/css",
}

http.createServer(function create(req, res) {
    switch(req.url) {
        case '/':
            // send index.html to the client
            break;
        default:
            let file = fs.readFile(path.join(__dirname, 'public', req.url.split('&')[0]), 'utf8', function (error, data) {
                if (error) { 
                    // console.error(error); 
                    res.writeHead(404);
                    res.end('Not Found')
                } else {
                    console.log(data)
                    res.write(data);
                    res.end()
                }
            });
            console.log(path.join(__dirname, 'public', req.url.split('&')[0]), file);
    }
    console.log("req.url:", req.url);
    // res.end('Nada');
}).listen(PORT)
