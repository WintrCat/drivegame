const express = require("express");
const path = require("path");

let server = express();
server.use(express.json());
server.use("/static", express.static("client"));

let orientation = {
	yaw: 0,
	pitch: 0,
	roll: 0
};

server.get("/", (req, res) => {

	res.sendFile(path.resolve("client/index.html"));
	
});

server.post("/orientation", (req, res) => {

	orientation.yaw = req.body.yaw;
	orientation.pitch = req.body.roll;
	orientation.roll = req.body.pitch;
	console.log(orientation);
	
});

server.listen(8080, () => {
	console.log("Webserver running on port 8080.");
});