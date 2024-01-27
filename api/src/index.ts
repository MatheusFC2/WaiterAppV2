import express from "express";
import mongoose from "mongoose";
import { router } from "./router";
import path from "node:path";
const app = express();

mongoose
	.connect("mongodb://localhost:27017")
	.then(() => {
		const port = 3001;

		app.use(
			"/uploads",
			express.static(path.resolve(__dirname, "..", "uploads"))
		); // added this now when use /uploads/{file_name} you'll acess the image
		app.use(express.json());
		app.use(router);

		app.listen(port, () => {
			console.log(`listening on http://localhost:${port}`);
		});
		console.log("connected to mongodb");
	})
	.catch((err) => console.log(err));
