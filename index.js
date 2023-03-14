const express = require("express");

const cors = require("cors");

//give the path to other routing files here
const GustRoutes = require("./routes/gustRoutes.js");

const app = express();
app.use(cors());

const port = process.env.PORT || 4000;

app.get("/", (req, res) => {
	res.send("Hello World!");
});

app.get("/marco", (req, res) => {
	res.send("polo");
});

app.listen(port, () => {
	console.log(`Server running on port ${port}`);
});

//route to other files
app.use("/GustRequest", GustRoutes);