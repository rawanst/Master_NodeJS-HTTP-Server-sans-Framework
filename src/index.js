const http = require("http");

const prenom = "Rawan";

const server = http.createServer((req, res) => {
	try{
		// console.log(a); //test error 500
		if(req.url === "/" && req.method === "GET"){
			res.writeHead(200, {'content-type':'text/html'});
   		        res.write('<p>200 OK</p><h1>HELLO WORLD ' + prenom + '</h1>');
		}
	} catch(e){
		res.writeHead(500, {'content-type':'text/html'});
		res.write('<h1>500 Internal Server Error</h1>');
	}
	res.end();
})

server.listen(5000);
