import express from "express";
import cors from "cors";
import * as bodyParser from "body-parser";
import dotenv from "dotenv";
import path from "path";
import { Client } from 'pg';


const env = dotenv.config();
const app = express();


app.use(cors());
app.use(express.static(path.join(__dirname, "public")));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());

const prefix = "/api/v1";

app.get("/", (req, res) => {
	const fileDirectory = path.resolve(__dirname, ".", "public/");

	res.sendFile("index.html", { root: fileDirectory }, (err) => {
		res.end();

		if (err) throw err;
	});
});

const PORT  = process.env.PORT || 3035

app.listen(PORT, () => {
    console.info(`Node server listening on port: ${PORT}`);
	console.log("connecting to database, please wait...");
    // const client = new Client(process.env.database);
    // client.connect();

})