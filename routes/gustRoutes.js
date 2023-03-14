const express = require("express");

const cors = require("cors");

const app = express.Router();

app.use(cors());

app.get("/welcome", (req, res) => {
	res.send(req.query.greeting);
});

app.get("/:name", (req, res) => {
	res.send("Hello " + req.params.name);
});

app.get("/welcome/:name", (req, res) => {
	res.send(req.query.greeting + ", " + req.params.name);
});


module.exports = app;