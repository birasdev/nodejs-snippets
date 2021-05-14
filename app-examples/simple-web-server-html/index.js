const http = require('http');
const url = require('url');
const path = require('path');
const fs = require('fs');

var mimeTypes = {
    "html": "text/html",
    "jpeg": "image/jpeg",
    "jpg": "image/jpeg",
    "png": "image/png",
    "js": "text/js",
    "css": "text/css",
}

http.createServer(function create(req, res) {
    console.log(req.url);
    var uri = new URL(req.url)
}).listen(1337)
