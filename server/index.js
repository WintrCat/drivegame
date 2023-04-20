const express = require("express");
const path = require("path");

let server = express();
server.use(express.json());
server.use("/static", express.static("client"));

let orientation = {
	alpha: 0,
	beta: 0,
	gamma: 0
};

server.get("/", (req, res) => {

	res.sendFile(path.resolve("client/index.html"));
	
});

server.post("/orientation", (req, res) => {

	orientation.alpha = req.body.alpha;
	orientation.beta = req.body.beta;
	orientation.gamma = req.body.gamma;
	console.log(orientation);
	
});

server.listen(8080, () => {
	console.log("Webserver running on port 8080.");
});