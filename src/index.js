const http = require("http");

const prenom = "Rawan";

const server = http.createServer((req, res) => {
	console.log("HELLO WORLD " + prenom);
	res.end();
})

server.listen(5000)
