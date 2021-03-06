/**
 * Created by WangLu on 2015-07-23.
 */
var http = require('http');
var url = require('url');

function start(route, handle){
    function onRequest(request, response){
        var postData = '';
        var pathname = url.parse(request.url).pathname;
        console.log('Request for ' + pathname + ' received.');

        request.setEncoding('utf8');

        request.addListener('data', function(postDataChunk){
            postData += postDataChunk;
            console.log('Received post data ' + postDataChunk + '.');
        });
        
        request.addListener('end', function () {
            route(handle, pathname, response, postData);
        });
    }

    http.createServer(onRequest).listen(8888);
    console.log('Server has started.');
}

exports.start = start;