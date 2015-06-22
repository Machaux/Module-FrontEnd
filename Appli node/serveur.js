var http = require('http');

var server = http.createServer();

server.on('request', function (req, res) {
	res.writeHead (200, {'content-type': 'text/plain'});
	res.write('bonjour Nantes');
	console.log('server démarré sur le port %d', port);
	res.end();
});

var port = 8080;
server.listen(port);
server.once('listening', function() {
	//console.log('server démarré sur le port %d', port);
});
