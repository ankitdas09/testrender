const express = require("express");
require("dotenv").config();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

console.log(process.env.PORT);

app.get("/", (req, res) => {
	console.log(req.body);
	res.json({
		status: "ok",
	});
});

app.post("/", (req, res) => {
	console.log(req.body);
	res.json({
		status: "ok",
	});
});

const port = process.env.PORT || 8000;
app.listen(port, () => console.log("Listening..."));
